import { Component, OnInit, OnDestroy, AfterViewInit, HostListener, ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [`
    .ax-hero-wrapper {
      padding: 130px 0 80px 0;
      position: relative;
    }
    .ax-tab-fade {
      animation: fadeIn 0.3s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit, AfterViewInit, OnDestroy {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435160024',
    email: 'support@appscalex.com'
  };

  public navItems: any = topMenuBarItems;

  // Hero Interactive Tabs
  activeHeroTab: string = 'pipeline';

  // Customer Testimonials Infinite Carousel
  testimonials = [
    {
      company: 'Borgos Technologies',
      logo: 'assets/images/clients/borgos.png',
      name: 'Rajesh K. Sharma',
      designation: 'Founder & Chief Executive Officer (CEO)',
      metric: '68% Faster Release Velocity',
      metricIcon: 'fa fa-bolt',
      metricClass: 'cyan',
      quote: 'AppScaleX fundamentally transformed our engineering pace. Coordinating multi-service releases across our staging and production clusters used to take days of manual approvals and brittle scripts. With AppScaleX\'s automated delivery pipelines and continuous quality gates, our release cycle dropped from 3 weeks to under 45 minutes. Our developers now ship to production daily with complete confidence.',
      initials: 'RS',
      avatarClass: 'gradient-1'
    },
    {
      company: 'VWork Solutions',
      logo: 'assets/images/clients/vwork.png',
      name: 'Priya Sundaram',
      designation: 'Managing Director & COO',
      metric: '42% Cloud Spend Reduction',
      metricIcon: 'fa fa-dollar',
      metricClass: 'emerald',
      quote: 'Managing multi-cloud Kubernetes clusters was bleeding our budget due to unchecked over-provisioning and idle node sprawl. AppScaleX gave us real-time, service-level FinOps visibility and automated resource rightsizing right out of the box. Within 90 days, we slashed our AWS and Azure infrastructure costs by over 42% without degrading an ounce of performance.',
      initials: 'PS',
      avatarClass: 'gradient-2'
    },
    {
      company: 'AntraHQ',
      logo: 'assets/images/clients/antrahq.png',
      name: 'Arunav Sengupta',
      designation: 'Chief Technology Officer (CTO)',
      metric: '85% Faster Infra Issue MTTR',
      metricIcon: 'fa fa-shield',
      metricClass: 'purple',
      quote: 'When critical cluster disruptions or pod throttles happen, every minute of downtime counts. AppScaleX\'s automated SRE observability correlates alerts instantly and diagnoses root causes in seconds instead of hours. What used to take our senior architects half a day of triaging logs is now detected, mitigated, and resolved before our enterprise users even notice.',
      initials: 'AS',
      avatarClass: 'gradient-3'
    },
    {
      company: 'HRGenX',
      logo: 'assets/images/clients/hrgenx.png',
      name: 'Amitabh Mukherjee',
      designation: 'Vice President of Engineering',
      metric: '99.99% Deployment Uptime',
      metricIcon: 'fa fa-rocket',
      metricClass: 'blue',
      quote: 'Scaling our cloud HCM software across hundreds of enterprise tenants demands absolute deployment reliability. With AppScaleX\'s automated canary rollouts, strict quality thresholds, and instant rollback protection, deployment fire-fighting has become a thing of the past. Our engineers release multiple zero-downtime microservice updates daily with zero operational friction.',
      initials: 'AM',
      avatarClass: 'gradient-4'
    },
    {
      company: 'octoberai',
      logo: 'assets/images/clients/octoberai.png',
      name: 'Dr. Ananya Deshmukh',
      designation: 'Co-Founder & Chief Executive Officer (CEO)',
      metric: '3.5x Faster ML Pipeline Delivery',
      metricIcon: 'fa fa-cogs',
      metricClass: 'amber',
      quote: 'Deploying heavy AI models and GPU inference workloads used to be our biggest infrastructure hurdle. AppScaleX unified our container builds, cluster provisioning, and live telemetry into one intelligent control plane. It cut our time-to-production by 75% and ensures our dynamic AI services scale effortlessly without exploding compute bills.',
      initials: 'AD',
      avatarClass: 'gradient-5'
    }
  ];

  // Triplicate array (15 items) for seamless infinite looping without visible jumps
  displayTestimonials: any[] = [];

  // Carousel Animation State
  private animFrameId: any = null;
  private trackEl: HTMLElement | null = null;
  isTestimonialPaused: boolean = false;
  isManualScrolling: boolean = false;
  testimonialCurrentX: number = 0;
  testimonialSpeed: number = 0.7; // Pixels per frame (smooth continuous glide)
  singleSetWidth: number = 0;
  cardStep: number = 0;

  constructor(private plugins: PluginsService) {
    // Populate 3 full copies to ensure continuous infinite loop
    this.displayTestimonials = [
      ...this.testimonials,
      ...this.testimonials,
      ...this.testimonials
    ];
  }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initTestimonialsCarousel();
    }, 150);
  }

  ngOnDestroy() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  setHeroTab(tab: string) {
    this.activeHeroTab = tab;
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.recalculateDimensions();
  }

  // Initialize Carousel Dimensions & Continuous Smooth Scrolling Loop
  initTestimonialsCarousel() {
    this.trackEl = document.getElementById('axTestimonialTrack');
    this.recalculateDimensions();
    this.startContinuousAutoScroll();
  }

  // Recalculates cardStep and singleSetWidth dynamically for current viewport
  recalculateDimensions() {
    if (!this.trackEl) {
      this.trackEl = document.getElementById('axTestimonialTrack');
    }
    if (!this.trackEl || !this.trackEl.children || this.trackEl.children.length < 2) {
      return;
    }

    const first = this.trackEl.children[0] as HTMLElement;
    const second = this.trackEl.children[1] as HTMLElement;
    const calculatedStep = second.offsetLeft - first.offsetLeft;

    if (calculatedStep > 0) {
      this.cardStep = calculatedStep;
    } else {
      this.cardStep = first.offsetWidth + 24; // Fallback to card width + standard gap
    }

    this.singleSetWidth = this.cardStep * this.testimonials.length;
  }

  // Main continuous auto-scrolling loop using GPU-accelerated requestAnimationFrame
  startContinuousAutoScroll() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }

    const scrollLoop = () => {
      if (!this.isTestimonialPaused && !this.isManualScrolling) {
        this.testimonialCurrentX += this.testimonialSpeed;

        // Seamless wrap: when full single set has scrolled, subtract set width with 0px jump
        if (this.singleSetWidth > 0 && this.testimonialCurrentX >= this.singleSetWidth) {
          this.testimonialCurrentX -= this.singleSetWidth;
        }

        this.applyTestimonialTransform();
      }

      this.animFrameId = requestAnimationFrame(scrollLoop);
    };

    this.animFrameId = requestAnimationFrame(scrollLoop);
  }

  // Pauses continuous scrolling immediately on hover / touch
  pauseTestimonials() {
    this.isTestimonialPaused = true;
  }

  // Resumes continuous scrolling automatically on mouseleave
  resumeTestimonials() {
    this.isTestimonialPaused = false;
  }

  // Manual Previous Navigation Button (<)
  scrollTestimonialPrev() {
    this.manualScrollStep(-1);
  }

  // Manual Next Navigation Button (>)
  scrollTestimonialNext() {
    this.manualScrollStep(1);
  }

  // Smooth animated manual step with cubic ease-out
  manualScrollStep(direction: number) {
    if (this.isManualScrolling) {
      return;
    }

    if (this.cardStep <= 0) {
      this.recalculateDimensions();
    }
    if (this.cardStep <= 0) {
      return;
    }

    this.isManualScrolling = true;
    const startX = this.testimonialCurrentX;
    const delta = direction * this.cardStep;
    const duration = 400; // 400ms smooth slide
    let startTime: number | null = null;

    const animateStep = (currentTime: number) => {
      if (!startTime) {
        startTime = currentTime;
      }
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);

      let nextX = startX + delta * ease;

      // Wrap around seamlessly
      if (this.singleSetWidth > 0) {
        if (nextX >= this.singleSetWidth) {
          nextX -= this.singleSetWidth;
        } else if (nextX < 0) {
          nextX += this.singleSetWidth;
        }
      }

      this.testimonialCurrentX = nextX;
      this.applyTestimonialTransform();

      if (progress < 1) {
        requestAnimationFrame(animateStep);
      } else {
        this.isManualScrolling = false;
      }
    };

    requestAnimationFrame(animateStep);
  }

  // Applies GPU-accelerated translate3d to track
  applyTestimonialTransform() {
    if (!this.trackEl) {
      this.trackEl = document.getElementById('axTestimonialTrack');
    }
    if (this.trackEl) {
      this.trackEl.style.transform = `translate3d(-${this.testimonialCurrentX}px, 0, 0)`;
    }
  }
}
