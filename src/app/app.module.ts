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
import { LoadingComponent } from './components/loading/loading.component'

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [AppComponent, LoadingComponent, HomeComponent],
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
