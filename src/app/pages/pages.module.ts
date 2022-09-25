import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from "@angular/router";
import { XaminModule } from "../xamin/xamin.module";
import { OurTeamComponent } from './our-team/our-team.component';
import { OurClientComponent } from './our-client/our-client.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {
    path: 'our-team',
    component: OurTeamComponent,
  },
  {
    path: 'client',
    component: OurClientComponent,
  },
  {
    path: 'career',
    component: CareersComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  ];
@NgModule({
  declarations: [OurTeamComponent, OurClientComponent, CareersComponent, ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule

  ]
})
export class PagesModule { }
