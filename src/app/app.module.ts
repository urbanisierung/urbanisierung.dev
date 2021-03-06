import { ScrollingModule } from '@angular/cdk/scrolling'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AboutComponent } from './components/about/about.component'
import { ArtItemComponent } from './components/art/art-item/art-item.component'
import { ArtComponent } from './components/art/art.component'
import { ArticleComponent } from './components/article/article.component'
import { ArticlesComponent } from './components/articles/articles.component'
import { BookComponent } from './components/books/book/book.component'
import { BooksComponent } from './components/books/books.component'
import { ContactComponent } from './components/contact/contact.component'
import { HeaderMenuItemComponent } from './components/header-menu-item/header-menu-item.component'
import { HeaderComponent } from './components/header/header.component'
import { HomeComponent } from './components/home/home.component'
import { IntroComponent } from './components/intro/intro.component'
import { JobCardComponent } from './components/job/job-card/job-card.component'
import { JobDescriptionComponent } from './components/job/job-description/job-description.component'
import { JobComponent } from './components/job/job.component'
import { TechTagComponent } from './components/job/tech-tag/tech-tag.component'
import { JobsComponent } from './components/jobs/jobs.component'
import { LoadingComponent } from './components/loading/loading.component'
import { NewsItemComponent } from './components/news/news-item/news-item.component'
import { NewsComponent } from './components/news/news.component'
import { SideprojectDetailsComponent } from './components/sideproject/sideproject-details/sideproject-details.component'
import { SideprojectComponent } from './components/sideproject/sideproject.component'
import { SideprojectsComponent } from './components/sideprojects/sideprojects.component'
import { SocialIconComponent } from './components/social-icon/social-icon.component'
import { SocialComponent } from './components/social/social.component'
import { UsesComponent } from './components/uses/uses.component';
import { ResumeComponent } from './components/resume/resume.component'

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomeComponent,
    HeaderComponent,
    SocialIconComponent,
    SocialComponent,
    ArticleComponent,
    ArticlesComponent,
    IntroComponent,
    JobComponent,
    JobsComponent,
    HeaderMenuItemComponent,
    JobCardComponent,
    JobDescriptionComponent,
    TechTagComponent,
    ContactComponent,
    SideprojectComponent,
    SideprojectsComponent,
    NewsComponent,
    NewsItemComponent,
    UsesComponent,
    BooksComponent,
    BookComponent,
    AboutComponent,
    ArtComponent,
    ArtItemComponent,
    SideprojectDetailsComponent,
    ResumeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    AppRoutingModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.integration || environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
