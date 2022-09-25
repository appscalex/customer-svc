import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Template} from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {

  @Input() navList: any[];
  @Input() titleSectionProp: any;

  constructor() { }

  ngOnInit() {
  }
}
