import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ArticlesComponent } from './components/articles/articles.component'
import { HomeComponent } from './components/home/home.component'
import { JobsComponent } from './components/jobs/jobs.component'
import { SideprojectsComponent } from './components/sideprojects/sideprojects.component'
import { UsesComponent } from './components/uses/uses.component'
import { Route } from './constants/route.enum'

const routes: Routes = [
  {
    path: Route.HOME,
    component: HomeComponent,
  },
  {
    path: Route.EXPERIENCE,
    component: JobsComponent,
  },
  {
    path: Route.BLOG,
    component: ArticlesComponent,
  },
  {
    path: Route.SIDEPROJECTS,
    component: SideprojectsComponent,
  },
  {
    path: Route.USES,
    component: UsesComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
