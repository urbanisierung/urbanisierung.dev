import { Injectable } from '@angular/core'
import { CONFERENCE_TALKS } from '../constants/conferencetalks.constant'
import { JOBS } from '../constants/jobs.constant'
import { Route } from '../constants/route.enum'
import { SIDEPROJECTS } from '../constants/sideprojects.constant'
import { NewsEvent } from '../types/NewsEvent.type'
import { DevToService } from './devto.service'

@Injectable({
  providedIn: 'root',
})
export class NewsEventService {
  public newsEvents: NewsEvent[] = []

  constructor(private devToService: DevToService) {
    // Blog Posts
    this.devToService.get().subscribe((articles) => {
      for (const article of articles) {
        this.newsEvents.push({
          title: `New Blog Post: ${article.title}`,
          timestamp: new Date(article.published_at).getTime(),
          url: article.url,
          route: Route.BLOG,
        })
      }
    })

    // Jobs
    for (const job of JOBS) {
      this.newsEvents.push({
        title: `Starting a new challenge as ${job.title} at ${job.company.name}`,
        timestamp: job.fromTimestamp,
        url: job.company.url,
        route: Route.EXPERIENCE,
      })
    }

    // Side Projects
    for (const sideproject of SIDEPROJECTS) {
      this.newsEvents.push({
        title: `Starting a new side project: ${sideproject.name}`,
        timestamp: sideproject.startTimestamp,
        url:
          sideproject.urls.length > 0
            ? sideproject.urls[0].url
            : `https://urbanisierung.dev`,
        route: Route.SIDEPROJECTS,
      })
    }

    // Conference Talks
    for (const talk of CONFERENCE_TALKS) {
      this.newsEvents.push({
        title: `Conference Talk about ${talk.title} (${talk.location})`,
        timestamp: talk.timestamp,
        url: talk.url,
        route: Route.CONFERENCE_TALKS,
      })
    }
  }

  public getLatestNews(count?: number) {
    const now = Date.now()
    const pastNews = this.newsEvents.filter(
      (newsEvent) => newsEvent.timestamp < now,
    )
    const sortedNews = pastNews.sort((a, b) => b.timestamp - a.timestamp)
    return count ? sortedNews.slice(0, count) : sortedNews
  }

  public getUpcomingNews(count?: number) {
    const now = Date.now()
    const upcomingNews = this.newsEvents.filter(
      (newsEvent) => newsEvent.timestamp > now - 1000 * 60 * 60 * 24,
    )
    const sortedNews = upcomingNews.sort((a, b) => b.timestamp - a.timestamp)
    return count ? sortedNews.slice(0, count) : sortedNews
  }
}
