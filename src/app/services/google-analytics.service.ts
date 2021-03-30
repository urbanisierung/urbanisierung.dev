import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Router, NavigationEnd } from '@angular/router'

// tslint:disable-next-line: ban-types
declare let gtag: Function

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor(private router: Router) {}

  public init() {
    this.subscribeToRouterChanges()
    try {
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalyticsId}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${environment.googleAnalyticsId}', {'send_page_view': false});
      `
      document.head.appendChild(script2)
    } catch (ex) {
      //
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null,
  ) {
    gtag('event', eventName, {
      eventCategory,
      eventLabel,
      eventAction,
      eventValue,
      anonymize_ip: environment.googleAnalyticsAnonymizeIp,
    })
  }

  private subscribeToRouterChanges() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.googleAnalyticsId, {
          page_path: event.urlAfterRedirects,
          anonymize_ip: environment.googleAnalyticsAnonymizeIp,
        })
      }
    })
  }
}
