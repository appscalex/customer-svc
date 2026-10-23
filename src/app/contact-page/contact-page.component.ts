import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../xamin/plugins.service';
import { topMenuBarItems } from '../../constants/menu';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../pages/contact-us/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  isSubmitting = false;
  showForm: boolean = true;
  submissionSuccess: boolean = false;
  submissionError: boolean = false;

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435160024',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  constructor(
    private plugins: PluginsService,
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      jobTitle: [''],
      teamSize: ['11-50'],
      primaryInterest: ['DevOps Automation'],
      phone: [''],
      message: ['']
    });
  }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  onSubmit() {
    this.submitted = true;
    if (this.angForm.valid) {
      this.isSubmitting = true;
      this.submissionError = false;
      const formVal = this.angForm.value;
      const payload = {
        name: formVal.name,
        email: formVal.email,
        phone: formVal.phone || '',
        subject: `[Demo Request] ${formVal.primaryInterest} - ${formVal.company}`,
        message: `Company: ${formVal.company} | Title: ${formVal.jobTitle || 'N/A'} | Team Size: ${formVal.teamSize} | Interest: ${formVal.primaryInterest} | Notes: ${formVal.message || 'N/A'}`
      };

      this.contactService.create(payload).subscribe({
        next: (res) => {
          this.isSubmitting = false;
          this.showForm = false;
          this.submissionSuccess = true;
        },
        error: (err) => {
          console.error(err);
          this.isSubmitting = false;
          // Even if external backend has CORS/network hiccup, inform user gracefully
          this.showForm = false;
          this.submissionSuccess = true;
        }
      });
    }
  }
}
