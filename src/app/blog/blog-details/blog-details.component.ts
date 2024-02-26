import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';
import { ActivatedRoute } from '@angular/router';
import { BLOG_DETAILS } from '../blogs';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html'
})
export class BlogDetailsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435187656',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  data: any = {
    title: 'Blogs',
    img: '04.png'
  };
  id: string = "";
  details: any;

  grid = '12';
  constructor(private plugins: PluginsService, private route: ActivatedRoute) {

   this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.fetchDetails();
   });


  }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  fetchDetails() : void {
    BLOG_DETAILS.forEach(blog => {
       if (this.id == blog.id) {
          this.details = blog;
       }
        
    });

  }

}
