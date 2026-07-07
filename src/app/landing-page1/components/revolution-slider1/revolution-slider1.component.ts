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
      if (el && typeof bootstrap !== 'undefined') {
        this.carousel = new bootstrap.Carousel(el, { interval: 5000, ride: true, pause: false });
        el.addEventListener('slid.bs.carousel', (e: any) => {
          this.ngZone.run(() => { this.currentSlide = e.to; });
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.carousel) {
      this.carousel.dispose();
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    if (this.carousel) {
      this.carousel.to(index);
    }
  }
}
