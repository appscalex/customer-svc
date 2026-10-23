import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './landing-page1/landing-page1.module#LandingPage1Module' },

  // Solutions & Platform
  { path: 'platform', loadChildren: './solutions/solutions.module#SolutionsModule' },
  { path: 'solutions', loadChildren: './solutions/solutions.module#SolutionsModule' },

  // Commercial & Supporting Pages
  { path: 'features', loadChildren: './features-page/features-page.module#FeaturesPageModule' },
  { path: 'pricing', loadChildren: './pricing-page/pricing-page.module#PricingPageModule' },
  { path: 'integrations', loadChildren: './integrations-page/integrations-page.module#IntegrationsPageModule' },
  { path: 'security', loadChildren: './security-page/security-page.module#SecurityPageModule' },
  { path: 'resources', loadChildren: './resources-page/resources-page.module#ResourcesPageModule' },
  { path: 'faq', loadChildren: './faq-page/faq-page.module#FaqPageModule' },
  { path: 'contact', loadChildren: './contact-page/contact-page.module#ContactPageModule' },
  { path: 'privacy', redirectTo: 'company/privacy', pathMatch: 'full' },
  { path: 'careers', redirectTo: 'company/career', pathMatch: 'full' },
  { path: 'career', redirectTo: 'company/career', pathMatch: 'full' },
  { path: 'terms', redirectTo: 'company/terms', pathMatch: 'full' },

  // Preserved & Backward Compatible Routes
  { path: 'about', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'about-us', loadChildren: './about/about.module#AboutModule' },
  { path: 'services', loadChildren: './landing-page5/landing-page5.module#LandingPage5Module' },
  { path: 'our-cases', loadChildren: './our-cases/our-cases.module#OurCasesModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'company', loadChildren: './pages/pages.module#PagesModule' },

  // Fallback
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
