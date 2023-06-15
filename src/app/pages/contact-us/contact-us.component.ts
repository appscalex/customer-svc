import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {

  angForm: FormGroup;
  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-8638386533',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  data: any = {
    title: 'Contact us',
    img: '04.png'
  };

  List: any[] = [
    // {
    //   title: 'USA Office',
    //   address: '10231 Redwood Blvd 100, Oakland, CA 94605, USA'
    // },
    {
      title: 'India Office',
      address: '12th Cross Rd, Koramangala, Bengaluru, Karnataka 560085, India'
    },

  ];

  constructor(private plugins: PluginsService, private fb: FormBuilder) {

    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      phone: ['' ],
      subject: ['', Validators.required ],
      message: ['', Validators.required ]
   });

   }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  onSubmit() {

    if (this.angForm.valid) {
        console.log('form submitted');
    }
}

}
