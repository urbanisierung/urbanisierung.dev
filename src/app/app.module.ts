import { ScrollingModule } from '@angular/cdk/scrolling'
import { CommonModule } from '@angular/common'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { ClickOutsideModule } from 'ng-click-outside'
import { HighlightModule } from 'ngx-highlightjs'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';
import { SocialComponent } from './components/social/social.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { IntroComponent } from './components/intro/intro.component';
import { JobComponent } from './components/job/job.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { HeaderMenuItemComponent } from './components/header-menu-item/header-menu-item.component';
import { JobCardComponent } from './components/job/job-card/job-card.component';
import { JobDescriptionComponent } from './components/job/job-description/job-description.component';
import { TechTagComponent } from './components/job/tech-tag/tech-tag.component';
import { ContactComponent } from './components/contact/contact.component';
import { SideprojectComponent } from './components/sideproject/sideproject.component';
import { SideprojectsComponent } from './components/sideprojects/sideprojects.component';
import { NewsComponent } from './components/news/news.component';
import { NewsItemComponent } from './components/news/news-item/news-item.component';
import { UsesComponent } from './components/uses/uses.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/books/book/book.component';
import { AboutComponent } from './components/about/about.component';
import { ArtComponent } from './components/art/art.component';
import { ArtItemComponent } from './components/art/art-item/art-item.component'

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [AppComponent, LoadingComponent, HomeComponent, HeaderComponent, SocialIconComponent, SocialComponent, ArticleComponent, ArticlesComponent, IntroComponent, JobComponent, JobsComponent, HeaderMenuItemComponent, JobCardComponent, JobDescriptionComponent, TechTagComponent, ContactComponent, SideprojectComponent, SideprojectsComponent, NewsComponent, NewsItemComponent, UsesComponent, BooksComponent, BookComponent, AboutComponent, ArtComponent, ArtItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    HighlightModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    AppRoutingModule,
    FontAwesomeModule,
    ClickOutsideModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.integration || environment.production,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
