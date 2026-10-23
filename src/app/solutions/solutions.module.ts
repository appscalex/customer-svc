import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { XaminModule } from '../xamin/xamin.module';

import { PlatformOverviewComponent } from './platform-overview/platform-overview.component';
import { DevopsAutomationComponent } from './devops-automation/devops-automation.component';
import { QualityEngineeringComponent } from './quality-engineering/quality-engineering.component';
import { FinopsComponent } from './finops/finops.component';
import { SreComponent } from './sre/sre.component';
import { AiComponent } from './ai/ai.component';

const routes: Routes = [
  { path: '', component: PlatformOverviewComponent },
  { path: 'platform', component: PlatformOverviewComponent },
  { path: 'devops-automation', component: DevopsAutomationComponent },
  { path: 'quality-engineering', component: QualityEngineeringComponent },
  { path: 'finops', component: FinopsComponent },
  { path: 'sre', component: SreComponent },
  { path: 'ai', component: AiComponent }
];

@NgModule({
  declarations: [
    PlatformOverviewComponent,
    DevopsAutomationComponent,
    QualityEngineeringComponent,
    FinopsComponent,
    SreComponent,
    AiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule
  ]
})
export class SolutionsModule { }
