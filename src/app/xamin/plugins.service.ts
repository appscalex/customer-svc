import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  // @ts-ignore
  public $ = window.$;

  public slide: any;
  public slideTotal: any;
  public slideCurrent: any;

  constructor() {

  }

  public index(): void {
    this.loaderInit();
    this.toggleDropdown();
    this.wowInit();
    this.owlCarousalInit(this.$);
    this.accordion(this.$);
    this.magnific(this.$);
    this.progressBar(this.$);
    this.isotope(this.$);
    this.global_scroll(this.$);
    this.chartJs(this.$);
  }

  // Function for toggle page Loader...
  public loaderInit(): void {
    this.$('#load').fadeOut();
    this.$('#loading').delay(1000).fadeOut('slow');
  }

  public global_scroll($): void {
    $(window).on('scroll', function (e) {

      if ($(this).scrollTop() > 10) {
        $('header').addClass('menu-sticky');
      } else {
        $('header').removeClass('menu-sticky');
      }

      // Pill Tab
      const nav = $('#pills-tab');
      if (nav.length) {

        const contentNav = nav.offset().top - window.outerHeight;
        if ($(window).scrollTop() >= (contentNav)) {
          $('#pills-tab li a').removeClass('active');
          $('#pills-tab li a[aria-selected=true]').addClass('active');
        }
      }

      // Feature Tab
      const nav1 = $('#features');
      if (nav1.length) {
        const contentNav1 = nav1.offset().top - window.outerHeight;
        if ($(window).scrollTop() >= (contentNav1)) {
          $('#features .row li a').removeClass('active');
          $('#features .row li a[aria-selected=true]').addClass('active');
        }
      }
    });
  }
  
  public chartJs($): void {
    const elementExist = this.checkElement('id', 'canvas')
    if (elementExist) {
      if (this.checkElement('class', 'data-analytics-chart')) {
        const data = { datasets: [{ data: [60, 40, 40], backgroundColor: ['#f7be68', '#fe6c61', '#5471d2'] }], labels: ['One', 'Two', 'Three'] }
        const ctx = $('#canvas')
        // @ts-ignore
        const myPieChart = new Chart(ctx, { type: 'pie', data, options: { maintainAspectRatio: false, legend: { display: false } } })
        document.getElementById('js-legend').innerHTML = myPieChart.generateLegend()
      }
      if (this.checkElement('class', 'managed-analytics-chart')) {
        const data = { labels: ['JAN', ' FEB', ' MAR', ' APR', ' MAY', ' JUN', ' JUL', ' AUG'], datasets: [{ label: 'One', fillColor: 'rgba(84, 114, 210, 0.1)', strokeColor: '#5472d2', pointColor: '#5472d2', pointStrokeColor: '#5472d2', highlightFill: '#3c5ecc', highlightStroke: '#3c5ecc', pointHighlightFill: '#3c5ecc', pointHighlightStroke: '#3c5ecc', data: [10, 15, 20, 25, 27, 25, 23, 25], borderColor: '#5471d2', backgroundColor: 'rgba(84,113,210,0.2)', pointBackgroundColor: 'rgba(84,113,210,1)', pointRadius: 5 }, { label: 'Two', fill: true, fillColor: 'rgba(254,108,97,0.1)', strokeColor: '#fe6c61', pointColor: '#fe6c61', pointStrokeColor: '#fe6c61', highlightFill: '#fe5043', highlightStroke: '#fe5043', pointHighlightFill: '#fe5043', pointHighlightStroke: '#fe5043', data: [25, 18, 16, 17, 20, 25, 30, 35], borderColor: '#fe6c61', backgroundColor: 'rgba(254,108,97,0.2)', pointBackgroundColor: 'rgba(254,108,97,1)', pointRadius: 5 }] }
        const ctx = $('#canvas')
        // @ts-ignore
        const lineChart = new Chart(ctx, { type: 'line', data, options: { legend: { display: false } } })
        document.getElementById('js-legend').innerHTML = lineChart.generateLegend()
      }
      if (this.checkElement('class', 'artificial-intelligence-chart')) {
        const data = { labels: ['JAN', ' FEB', ' MAR', ' APR', ' MAY', ' JUN', ' JUL', ' AUG'], datasets: [{ label: 'One', backgroundColor: 'rgba(254,108,97,0.2)', borderColor: '#fe6c61', pointColor: '#fe6c61', pointStrokeColor: '#fe6c61', highlightFill: '#fe5043', highlightStroke: '#fe5043', pointHighlightFill: '#fe5043', pointHighlightStroke: '#fe5043', data: ['25', ' 18', ' 16', ' 17', ' 20', ' 25', ' 30', ' 35'] }, { label: 'Two', backgroundColor: 'rgba(84,114,210,0.2)', borderColor: '#5472d2', pointColor: '#5472d2', pointStrokeColor: '#5472d2', highlightFill: '#3c5ecc', highlightStroke: '#3c5ecc', pointHighlightFill: '#3c5ecc', pointHighlightStroke: '#3c5ecc', data: ['10', ' 15', ' 20', ' 25', ' 27', ' 25', ' 23', ' 25'] } ] }
        const ctx = $('#canvas')
        // @ts-ignore
        new Chart(ctx, { type: 'line', data })
      }
      if (this.checkElement('class', 'big-data-services-chart')) {
        const data = { datasets: [{ data: [60, 40], backgroundColor: [ '#fe6c61', '#5471d2'] }], labels: [ 'One', 'Two' ] }
        const ctx = $('#canvas')
        // @ts-ignore
        const myPieChart = new Chart(ctx, { type: 'pie', data, options: { maintainAspectRatio: false, legend: { display: false } } })
        document.getElementById('js-legend').innerHTML = myPieChart.generateLegend()
      }
      if (this.checkElement('class', 'data-science-consulting-chart')) {
        const data = { datasets: [{ data: [60, 40, 40], backgroundColor: ['#f7be68', '#fe6c61', '#5471d2'] }], labels: ['One', 'Two', 'Three'] }
        const ctx = $('#canvas')
        // @ts-ignore
        const myPieChart = new Chart(ctx, { type: 'doughnut', data, options: { maintainAspectRatio: false, legend: { display: false } } })
        document.getElementById('js-legend').innerHTML = myPieChart.generateLegend()
      }
      if (this.checkElement('class', 'data-visualization-chart')) {
        const data = { labels: ['JAN', ' FEB', ' MAR', ' APR', ' MAY', ' JUN', ' JUL', ' AUG'], datasets: [{ label: 'One', data: [20, 28, 20, 25, 27, 25, 23, 25], fillColor: '#5472d2', strokeColor: '#5472d2', pointColor: '#5472d2', pointStrokeColor: '#5472d2', highlightFill: '#3c5ecc', highlightStroke: '#3c5ecc', pointHighlightFill: '#3c5ecc', pointHighlightStroke: '#3c5ecc', backgroundColor: '#5471d2' }, { label: 'Two', data: [25, 18, 16, 17, 20, 25, 30, 38], fillColor: '#fe6c61', strokeColor: '#fe6c61', pointColor: '#fe6c61', pointStrokeColor: '#fe6c61', highlightFill: '#fe5043', highlightStroke: '#fe5043', pointHighlightFill: '#fe5043', pointHighlightStroke: '#fe5043', backgroundColor: '#fe6c61' }] }
        const ctx = $('#canvas')
        // @ts-ignore
        const myPieChart = new Chart(ctx, { type: 'bar', data, options: { scaleBeginAtZero: true, legend: { display: false } } })
        document.getElementById('js-legend').innerHTML = myPieChart.generateLegend()
      }
    }
  }
  
  // Function to toggle Navigation dropdown...
  public toggleDropdown(): void {
    this.$('#main-header .menu-item .toggledrop').off('click');
    if (this.$(window).width() < 992) {
      this.$('#main-header .menu-item .toggledrop').on('click', function(e) {
        e.preventDefault();
        // @ts-ignore
        window.$(this).closest('li').find('.sub-menu').toggle('d-block');
      });
    }

    // tslint:disable-next-line:only-arrow-functions
    this.$(window).on('resize', function() {
      'use strict';
      // @ts-ignore
      window.$('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function() {
        // @ts-ignore
        window.$(this).closest('li').find('.sub-menu').toggle('d-block');
      });
      // @ts-ignore
      window.$('#main-header .menu-item .toggledrop').off('click');
      // @ts-ignore
      if (window.$(window).width() < 992) {
        // @ts-ignore
        window.$('#main-header .menu-item .toggledrop').on('click', function(e) {
          e.preventDefault();
          // @ts-ignore
          window.$(this).closest('li').find('.sub-menu').toggle('d-block');
        });
      }
    });
  }

  public checkElement(type, element): boolean {
    let found = false;
    let elements;
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element);

        if (elements !== undefined && elements !== null && elements.length > 0) {
          found = true;
        }
        break;

      case 'id':
        elements = document.getElementById(element);

        if (elements !== undefined && elements !== null) {
          found = true;
        }
        break;
    }


    return found;
  }

  public wowInit(): void {

    const elementExist = this.checkElement('class', 'wow');

    // @ts-ignore
    if (elementExist) {
      // @ts-ignore
      const WOW = window.WOW;
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        live: false
      }).init();
    }
  }

  public owlCarousalInit($): void {

    const elementExist = this.checkElement('class', 'owl-carousel');
    if (elementExist) {
      this.$('.owl-carousel').each(function() {
        const $carousel = $(this);
        $carousel.owlCarousel({
          items: $carousel.data('items'),
          loop: $carousel.data('loop'),
          margin: $carousel.data('margin'),
          nav: $carousel.data('nav'),
          dots: $carousel.data('dots'),
          autoplay: $carousel.data('autoplay'),
          autoplayTimeout: $carousel.data('autoplay-timeout'),
          navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
          responsiveClass: true,
          responsive: {
            // breakpoint from 0 up
            0: {
              items: $carousel.data('items-mobile-sm')
            },
            // breakpoint from 480 up
            480: {
              items: $carousel.data('items-mobile')
            },
            // breakpoint from 786 up
            786: {
              items: $carousel.data('items-tab')
            },
            // breakpoint from 1023 up
            1023: {
              items: $carousel.data('items-laptop')
            },
            1199: {
              items: $carousel.data('items')
            }
          }
        });
      });
    }
  }

  public accordion($) {
    $('.iq-accordion .iq-accordion .accordion-details').hide();
    $('.iq-accordion .iq-accordion:first').addClass('accordion-active').children().slideDown('slow');
    $('.iq-accordion .iq-accordion').on('click', function() {
      if ($(this).children('div').is(':hidden')) {
        $('.iq-accordion .iq-accordion').removeClass('accordion-active').children('div').slideUp('slow');
        $(this).toggleClass('accordion-active').children('div').slideDown('slow');
      }
    });

    $('.iq-faq .iq-block .iq-details').hide();
		$('.iq-faq .iq-block:first').addClass('iq-active').children().slideDown('slow');
		$('.iq-faq .iq-block').on("click", function() {
			if ($(this).children('div').is(':hidden')) {
				$('.iq-faq .iq-block').removeClass('iq-active').children('div').slideUp('slow');
				$(this).toggleClass('iq-active').children('div').slideDown('slow');
			}
		});
  }

  public progressBar($): void {
    const elementExist = this.checkElement('class', 'iq-progress-bar');
    if (elementExist) {
      $('.iq-progress-bar > span').each(function() {
        const $this = $(this);
        const width = $this.data('percent');
        $this.css({
          transition: 'width 2s'
        });
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function() {
          // tslint:disable-next-line:only-arrow-functions
          $this.appear(function() {
            $this.css('width', width + '%');
          });
        }, 500);
      });
    }
  }

  public magnific($): void {
    $('.popup-gallery').magnificPopup({
      delegate: 'a.popup-img',
      tLoading: 'Loading image #%curr%...',
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        navigateByImgClick: true,
        enabled: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      disableOn: 700,
      mainClass: 'mfp-fade',
      preloader: false,
      removalDelay: 160,
      fixedContentPos: false
    });
  }

  public revolutionSlider() {
    // @ts-ignore
    window.jQuery('#rev_slider_0_1').show().revolution({
      jsFileLocation: 'js/',
      sliderLayout: 'fullwidth',
      visibilityLevels: '1240,1024,778,480',
      gridwidth: '1400,1024,767,479',
      gridheight: '600,600,800,600',
      minHeight: '',
      autoHeight: true,
      lazyType: 'smart',
      spinner: 'spinner0',
      editorheight: '600,600,800,600',
      responsiveLevels: '1240,1024,778,480',
      disableProgressBar: 'on',
      navigation: {
        mouseScrollNavigation: false,
        touch: {
          touchenabled: true
        }
      },
      parallax: {
        levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        type: 'mouse'
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      },
    });

    // @ts-ignore
    window.jQuery('#rev_slider_1_1').show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1240,1240,480",
      gridwidth:"1400,1400,1400,479",
      gridheight:"700,700,700,600",
      minHeight:"",
      autoHeight:true,
      lazyType:"smart",
      spinner:"spinner0",
      editorheight:"700,768,400,600",
      responsiveLevels:"1240,1240,1240,480",
      disableProgressBar:"on",
      navigation: {
          mouseScrollNavigation:false,
          touch: {
              touchenabled:true
          }
      },
      parallax: {
          levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],
          type:"mouse"
      },
      fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery('#rev_slider_3_1').show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:"1400,1024,767,479",
      gridheight:"700,600,800,600",
      minHeight:"",
      autoHeight:true,
      lazyType:"smart",
      spinner:"spinner0",
      editorheight:"700,600,800,600",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        mouseScrollNavigation:false,
        touch: {
          touchenabled:true
        }
      },
      parallax: {
        levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],
        type:"mouse"
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });

    // @ts-ignore
    window.jQuery('#rev_slider_4_1').show().revolution({
      jsFileLocation: 'js/',
      sliderLayout: 'fullwidth',
      visibilityLevels: '1240,1024,778,480',
      gridwidth: '1400,1024,778,479',
      gridheight: '800,768,600,600',
      minHeight: '',
      autoHeight: true,
      lazyType: 'smart',
      spinner: 'spinner0',
      editorheight: '800,768,600,600',
      responsiveLevels: '1240,1024,778,480',
      disableProgressBar: 'on',
      navigation: {
        mouseScrollNavigation: false,
        touch: {
          touchenabled: true
        }
      },
      parallax: {
        levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        type: 'mouse'
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      }
    })

    // @ts-ignore
    window.jQuery("#rev_slider_5_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:"1400,1024,778,479",
      gridheight:"900,900,600,600",
      minHeight:"",
      autoHeight:true,
      lazyType:"smart",
      spinner:"spinner0",
      editorheight:"900,900,600,600",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        mouseScrollNavigation:false,
        touch: {
          touchenabled:true
        }
      },
      parallax: {
        levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],
        type:"mouse"
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      }
    })

    // @ts-ignore
    window.jQuery("#rev_slider_6_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:"1400,1024,767,479",
      gridheight:"900,700,500,400",
      minHeight:"",
      autoHeight:true,
      lazyType:"smart",
      spinner:"spinner0",
      editorheight:"900,700,500,400",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        mouseScrollNavigation:false,
        touch: {
          touchenabled:true
        }
      },
      parallax: {
        levels:[1,2,3,4,5,30,35,40,45,46,47,48,49,50,51,55],
        type:"mouse"
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      }
    })

    // @ts-ignore
    window.jQuery("#rev_slider_7_1").show().revolution({
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:"1400,1024,778,480",
      gridheight:"800,650,650,500",
      minHeight:"",
      autoHeight:true,
      spinner:"spinner0",
      editorheight:"800,650,650,500",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      }
    })

    // @ts-ignore
    window.jQuery("#rev_slider_8_1").show().revolution({
      sliderType:"hero",
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:1600,
      gridheight:900,
      minHeight:"",
      spinner:"spinner0",
      editorheight:"900,768,960,720",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
      },
    })

    // @ts-ignore
    window.jQuery("#rev_slider_9_1").show().revolution({
      sliderType:"hero",
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:1600,
      gridheight:750,
      minHeight:"",
      spinner:"spinner0",
      editorheight:"750,768,960,720",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    })

    // @ts-ignore
    window.jQuery("#rev_slider_10_1").show().revolution({
      sliderType:"hero",
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:1600,
      gridheight:900,
      minHeight:"",
      spinner:"spinner0",
      editorheight:"900,768,960,720",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });
    
    // @ts-ignore
    window.jQuery("#rev_slider_11_1").show().revolution({
      sliderType:"hero",
      jsFileLocation:"js/",
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:1600,
      gridheight:800,
      minHeight:"",
      spinner:"spinner0",
      editorheight:"800,768,960,720",
      responsiveLevels:"1240,1024,778,480",
      disableProgressBar:"on",
      navigation: {
        onHoverStop:false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });
  }

  public isotope ($): void {
    /* ------------------------   2 Isotope   -------------------------- */
    const elementExist = this.checkElement('class', 'isotope');
    if (elementExist) {
      // eslint-disable-next-line no-undef
      $('.isotope').isotope({
        itemSelector: '.iq-grid-item'
      });

      // filter items on button click
      $('.isotope-filters').on('click', 'button', function () {
        const filterValue = $(this).attr('data-filter');
        $('.isotope').isotope({
          resizable: true,
          filter: filterValue,
          layoutMode: 'cellsByRow'
        });
        $('.isotope-filters button').removeClass('active')
        $(this).addClass('active')
      })
    }

    /* ------------------------   3 Masonry   -------------------------- */

    const elementExist1 = this.checkElement('class', 'iq-masonry-block');
    if (elementExist1) {
      const $msnry = $('.iq-masonry-block .iq-masonry');
      if ($msnry) {
        const $filter = $('.iq-masonry-block .isotope-filters');
        $msnry.isotope({
          percentPosition: true,
          resizable: true,
          itemSelector: '.iq-masonry-block .iq-masonry-item',
          masonry: {
            gutterWidth: 0
          }
        });

        // bind filter button click
        $filter.on('click', 'button', function () {
          const filterValue = $(this).attr('data-filter');
          $msnry.isotope({
            filter: filterValue
          })
        });

        $filter.each(function (i, buttonGroup) {
          const $buttonGroup = $(buttonGroup);
          $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active')
          })
        })
      }
    }
  }

}