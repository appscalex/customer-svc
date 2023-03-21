import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
})
export class CareersComponent implements OnInit {
  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-7349081267',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  data: any = {
    title: 'Careers',
    img: '04.png'
  };

  List: any[] = [
    {
      title: 'Technical Staff - 2 Posts',
      job: ['Create and maintain relevant technical documentation.',
        'Directing the work of a technical team, overseeing day-to-day and long-term works.',
        'Building highly-available and secure API based services.',
        'Work with software testing teams and assisting them in maintaining robust test scripts and test environments.'],
      qualification: ['Bachelor’s degree with Computer Science or related fields.',
        'Good knowledge of programming languages like Java or Python.',
        'Good understanding of Data Structures and related concepts.',
        'Experience designing, developing and consuming the REST Web services.',
        'Experience with microservices, containerized applications, Docker/Kubernetes, cloud technologies.',
        'Experience using CI/CD automation building tools.']
    },

    {
      title: 'Marketing Manager - 1 Post',
      job: ['Live Core Values – Every day and all the time.',
        'Market intelligence - be the expert on our buyers, who are they, how they buy and their key buying criteria.',
        'Understand the competitive landscape - be an expert on our competition and how they are positioned.',
        'Write and socialize the following product-level documents: marketing plan, sales enablement plan, launch plan, solution playbook.',
        'Act as the primary thought leader for the products you support externally, including speaking engagements and written works.',
        'Manage launch planning and orchestrate execution of the commercial release of a product.'],
      qualification: ['Strong leadership skills: Effectively lead and interact with staff, colleagues, cross-functional teams and third parties.',
        'Metrics oriented: Effectively sets goals, manages projects and project teams, and analyzes results.',
        'Proficient in Microsoft Office.',
        'Familiar with marketing automation tools and business intelligence tools.',
        'Ability to translate technical information into written customer-facing content and messaging.',
        'Professional, clear, and concise written and verbal communication skills, including strong presentation skills.']
    }
  ];

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
