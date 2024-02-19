import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'app/home', loadChildren: './landing-page1/landing-page1.module#LandingPage1Module' },
  { path: 'app/services', loadChildren: './landing-page5/landing-page5.module#LandingPage5Module' },
  { path: 'app/our-cases', loadChildren: './our-cases/our-cases.module#OurCasesModule' },
  { path: 'app/blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'app/about-us', loadChildren: './about/about.module#AboutModule' },
  { path: 'app/services', loadChildren: './service/service.module#ServiceModule' },
  { path: 'company', loadChildren: './pages/pages.module#PagesModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
