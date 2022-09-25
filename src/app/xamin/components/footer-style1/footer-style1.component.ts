import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-style1',
  templateUrl: './footer-style1.component.html'
})
export class FooterStyle1Component implements OnInit {

  @Input() footerProp: any;
  @Input() contactInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
