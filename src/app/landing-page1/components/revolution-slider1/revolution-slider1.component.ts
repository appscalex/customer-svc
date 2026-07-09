import { Component, OnInit, AfterViewInit, OnDestroy, NgZone } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-revolution-slider1',
  templateUrl: './revolution-slider1.component.html'
})
export class RevolutionSlider1Component implements OnInit, AfterViewInit, OnDestroy {

  imgSrc = '#/assets/revslider/assets';
  currentSlide = 0;

  private carousel: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      const el = document.getElementById('heroCarousel');
      if (!el) { return; }

      if (typeof bootstrap !== 'undefined') {
        // Bootstrap 5
        this.carousel = new bootstrap.Carousel(el, { interval: 4000, ride: true, pause: false });
        el.addEventListener('slid.bs.carousel', (e: any) => {
          this.ngZone.run(() => { this.currentSlide = e.to; });
        });
      } else {
        // Bootstrap 4 / jQuery fallback
        const jq = (window as any).$;
        if (jq) {
          jq(el).carousel({ interval: 4000, ride: 'carousel', pause: false });
          jq(el).on('slid.bs.carousel', (e: any) => {
            this.ngZone.run(() => { this.currentSlide = e.to; });
          });
          this.carousel = 'jquery';
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.carousel && this.carousel !== 'jquery') {
      this.carousel.dispose();
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    if (this.carousel && this.carousel !== 'jquery') {
      this.carousel.to(index);
    } else {
      const jq = (window as any).$;
      if (jq) { jq('#heroCarousel').carousel(index); }
    }
  }

  prevSlide() {
    if (this.carousel && this.carousel !== 'jquery') {
      this.carousel.prev();
    } else {
      const jq = (window as any).$;
      if (jq) { jq('#heroCarousel').carousel('prev'); }
    }
  }

  nextSlide() {
    if (this.carousel && this.carousel !== 'jquery') {
      this.carousel.next();
    } else {
      const jq = (window as any).$;
      if (jq) { jq('#heroCarousel').carousel('next'); }
    }
  }
}
