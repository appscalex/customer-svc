import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-partner',
  templateUrl: './our-partner.component.html'
})
export class OurPartnerComponent implements OnInit {

  List : any[] = [
    { img: '1.png'  },
    { img: '2.png'  },
    { img: '3.png'  },
    { img: '4.png'  },
    { img: '1.png'  },
    { img: '2.png'  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
