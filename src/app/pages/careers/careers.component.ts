import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../../xamin/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

export interface CareerJob {
  id: string;
  title: string;
  department: string;
  deptKey: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  badgeColor: string;
  tags: string[];
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
})
export class CareersComponent implements OnInit {
  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435160024',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  data: any = {
    title: 'Careers',
    img: '04.png'
  };

  currentDepartment: string = 'all';

  // Modal application state
  selectedJobForModal: CareerJob | null = null;
  showApplyModal: boolean = false;
  applicationSubmitted: boolean = false;
  isSubmitting: boolean = false;

  applicant: any = {
    fullName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    portfolioUrl: '',
    experienceYears: '3-5 years',
    coverNote: ''
  };

  jobList: CareerJob[] = [
    {
      id: 'staff-sre',
      title: 'Staff Site Reliability Engineer (Platform & Kubernetes)',
      department: 'Platform Engineering',
      deptKey: 'engineering',
      location: 'Remote (Worldwide)',
      type: 'Full-Time',
      experience: 'Staff / Principal',
      salary: '$160,000 - $210,000 + Meaningful Equity',
      badgeColor: 'blue',
      tags: ['Kubernetes', 'Go', 'Terraform', 'eBPF', 'Prometheus', 'Multi-Cloud'],
      summary: 'Architect and scale the core distributed control plane of AppScaleX, powering automated self-healing, multi-cluster Kubernetes orchestration, and real-time telemetry streaming for high-scale enterprise workloads.',
      responsibilities: [
        'Design, build, and operate multi-tenant Kubernetes control planes across AWS, Azure, and GCP.',
        'Implement automated SLO/SLI tracking, dynamic error budget burn alerts, and 1-click safe rollback mechanisms.',
        'Author custom Kubernetes operators and CRDs in Go to manage distributed workflow lifecycles.',
        'Partner with AI engineering teams to integrate real-time eBPF kernel telemetry into neural incident triage models.',
        'Champion infrastructure-as-code best practices with Terraform, Helm, and GitOps workflows.'
      ],
      qualifications: [
        '6+ years of production experience in SRE, DevOps, or distributed systems infrastructure.',
        'Deep hands-on proficiency with Go and the Kubernetes API / client-go architecture.',
        'Extensive experience managing production multi-cluster container platforms across AWS/Azure/GCP.',
        'Solid mastery of observability tools (Prometheus, OpenTelemetry, Grafana, Thanos/Cortex).',
        'Proven track record of designing high-availability systems with 99.99% reliability targets.'
      ],
      benefits: [
        '100% remote-first asynchronous work with flexible hours.',
        'Meaningful early equity grant in a high-growth developer platform.',
        '$2,500 annual conference, certification, and learning stipend.',
        '$1,500 home office workstation allowance (MacBook Pro M-Series or ThinkPad Linux).'
      ]
    },
    {
      id: 'sr-devops-engineer',
      title: 'Senior DevOps Automation Engineer (CI/CD Pipelines)',
      department: 'Platform Engineering',
      deptKey: 'engineering',
      location: 'Remote (Worldwide)',
      type: 'Full-Time',
      experience: 'Senior',
      salary: '$140,000 - $185,000 + Meaningful Equity',
      badgeColor: 'cyan',
      tags: ['Docker', 'Helm', 'ArgoCD', 'GitHub Actions', 'AWS / GCP', 'Python / Bash'],
      summary: 'Build high-velocity, zero-downtime continuous delivery pipelines and artifact management engines that eliminate manual deployment friction and cut release runtimes by up to 70%.',
      responsibilities: [
        'Build and maintain resilient continuous delivery matrices supporting parallel runners, artifact caching, and multi-cloud OCI container packaging.',
        'Implement canary, blue/green, and progressive cutover release orchestration using ArgoCD and custom webhooks.',
        'Standardize security policy gates including dual-key approvals, commit signing, and SBOM verification.',
        'Collaborate with developers to eliminate CI pipeline bottlenecks and achieve sub-5-minute release cycles.',
        'Maintain automated deployment verification hooks and automated rollback triggers.'
      ],
      qualifications: [
        '5+ years architecting enterprise CI/CD workflows (GitHub Actions, GitLab CI, ArgoCD, or Tekton).',
        'Deep expertise in containerization (Docker, containerd, Podman) and Kubernetes deployment topologies.',
        'Proficient scripting and automation capability in Python, Go, or Bash.',
        'Experience with cloud infrastructure (AWS EKS, GCP GKE, Azure AKS) and IAM access policies.',
        'Strong belief in GitOps, infrastructure-as-code, and reproducible build systems.'
      ],
      benefits: [
        'Remote-first asynchronous culture with minimal synchronous meetings.',
        'Comprehensive health, dental, and vision insurance with dependent coverage.',
        'Flexible PTO policy with mandatory 4-week annual recharge minimum.'
      ]
    },
    {
      id: 'fullstack-cloud-engineer',
      title: 'Senior Full-Stack Cloud Engineer (TypeScript / Angular & Go)',
      department: 'Platform Engineering',
      deptKey: 'engineering',
      location: 'Remote (Worldwide)',
      type: 'Full-Time',
      experience: 'Senior',
      salary: '$135,000 - $175,000 + Meaningful Equity',
      badgeColor: 'purple',
      tags: ['Angular', 'TypeScript', 'Go / Node.js', 'RxJS', 'PostgreSQL', 'WebSockets'],
      summary: 'Craft responsive, intuitive, and lightning-fast developer interfaces for pipeline visualization, real-time observability telemetry, and multi-cloud cost analytics across the AppScaleX console.',
      responsibilities: [
        'Architect high-performance client-side applications in Angular and TypeScript with responsive, accessible UI components.',
        'Build real-time pipeline visualization graphs, interactive metrics dashboards, and live incident correlation trees.',
        'Design and consume scalable REST and WebSocket APIs powered by Go and Node.js microservices.',
        'Optimize client-side bundle sizes, DOM rendering, and memory usage for smooth 60fps data visualizations.',
        'Collaborate closely with product designers and engineering users to iterate on developer experience (DX).'
      ],
      qualifications: [
        '4+ years developing complex web applications with Angular, TypeScript, and modern state management (RxJS / NgRx).',
        'Strong command of modern CSS/SCSS, responsive design, data visualization libraries (D3, Chart.js, or SVG canvases).',
        'Backend service experience in Go, Node.js, or Python with relational databases (PostgreSQL).',
        'Solid understanding of HTTP/2, WebSockets, client-side caching, and asynchronous workflows.',
        'Strong empathy for developer workflows, terminal tooling, and enterprise console design.'
      ],
      benefits: [
        'Work from anywhere in the world with flexible hours.',
        'Generous PTO with dedicated wellness shutdown days.',
        'Annual worldwide team summit in scenic international destinations.'
      ]
    },
    {
      id: 'ai-ml-engineer',
      title: 'AI / ML Systems Engineer (LLM Reasoning & Diagnostics)',
      department: 'AI & Data Intelligence',
      deptKey: 'ai',
      location: 'Remote (Worldwide)',
      type: 'Full-Time',
      experience: 'Senior / Lead',
      salary: '$160,000 - $215,000 + Meaningful Equity',
      badgeColor: 'purple',
      tags: ['Python', 'PyTorch', 'LangChain', 'LlamaIndex', 'Vector DBs', 'OpenTelemetry'],
      summary: 'Develop explainable neural reasoning engines and autonomous AI agents that correlate distributed telemetry traces, Git commit history, and system anomalies to synthesize 1-click root-cause remediations.',
      responsibilities: [
        'Design multi-step agentic reasoning pipelines that ingest terabytes of operational logs and identify failure root-causes in seconds.',
        'Implement semantic retrieval, RAG architectures, and hybrid search across Git history, runbooks, and telemetry.',
        'Train, fine-tune, and evaluate specialized open-weight and frontier LLMs for operational systems diagnosis.',
        'Ensure 100% auditability, confidence scoring, and guardrailed human-in-the-loop validation for all AI recommendations.',
        'Benchmark inference latencies and optimize agent execution loops for near-instantaneous incident triage.'
      ],
      qualifications: [
        '4+ years working on production ML/AI systems, NLP, or LLM-powered applications.',
        'Proficiency in Python and frameworks like PyTorch, Hugging Face, LangChain, or vLLM.',
        'Practical experience with vector databases (Qdrant, Milvus, Pinecone, pgvector) and hybrid search.',
        'Background or strong interest in systems observability, distributed tracing, and Linux operations.',
        'Track record of building reliable, hallucination-resistant LLM workflows.'
      ],
      benefits: [
        'Work on cutting-edge production AI solving tangible, high-stakes engineering problems.',
        'Generous cloud computing & model inference budget for experimentation.',
        'Comprehensive health benefits and wellness stipend.'
      ]
    },
    {
      id: 'lead-quality-architect',
      title: 'Lead Quality & Security Engineering Architect (DevSecOps)',
      department: 'Security & Quality',
      deptKey: 'security',
      location: 'Remote (Worldwide)',
      type: 'Full-Time',
      experience: 'Lead / Principal',
      salary: '$145,000 - $190,000 + Meaningful Equity',
      badgeColor: 'emerald',
      tags: ['k6', 'OWASP ZAP', 'Semgrep', 'SonarQube', 'Python / Go', 'Playwright'],
      summary: 'Lead the automated verification strategy for AppScaleX, building automated SAST/DAST security gates, distributed load testing frameworks, and zero-defect policy enforcement into continuous delivery lifecycles.',
      responsibilities: [
        'Architect end-to-end automated verification gates integrating unit, API, SAST, DAST, and performance testing into CI/CD.',
        'Implement automated k6 distributed load testing to validate P95 latency targets and throughput thresholds under peak traffic.',
        'Integrate OWASP ZAP and Semgrep rule policies into dual-key gate triggers to catch vulnerabilities prior to deployment.',
        'Build synthetic monitoring and chaos engineering experiments to test platform resilience.',
        'Drive security compliance standards (ISO 27001, GDPR) into engineering patterns.'
      ],
      qualifications: [
        '6+ years in quality engineering, performance engineering, or application security (AppSec).',
        'Hands-on expertise with load testing tools (k6, Locust, JMeter) and automated security tools (OWASP ZAP, SonarQube, Semgrep, Snyk).',
        'Strong scripting skills in Python, Go, or JavaScript/TypeScript.',
        'In-depth knowledge of web security vulnerabilities, OWASP Top 10, and container security best practices.',
        'Experience building shift-left automated quality gates in enterprise pipelines.'
      ],
      benefits: [
        'Direct leadership influence across platform security and release quality.',
        'Competitive equity compensation package.',
        '$2,500 annual training, certification, and conference budget.'
      ]
    },
    {
      id: 'product-marketing-manager',
      title: 'Product Marketing Manager (DevOps, FinOps & Cloud)',
      department: 'Product & Growth',
      deptKey: 'product',
      location: 'Remote (US / EMEA / APAC)',
      type: 'Full-Time',
      experience: 'Mid-Senior',
      salary: '$125,000 - $165,000 + Meaningful Equity',
      badgeColor: 'amber',
      tags: ['GTM Strategy', 'Technical Messaging', 'DevOps & FinOps', 'Content', 'Product Launches'],
      summary: 'Shape the positioning, messaging, and go-to-market execution for AppScaleX. Translate deep technical capabilities into compelling stories that resonate with VP of Engineering, SRE leads, and FinOps practitioners.',
      responsibilities: [
        'Define product messaging, value propositions, and battle cards for AppScaleX solutions across DevOps, FinOps, and SRE.',
        'Author high-impact technical whitepapers, architectural blueprints, case studies, and blog posts.',
        'Orchestrate major commercial product releases, coordinate launch collateral, and partner with growth marketing.',
        'Conduct buyer persona research and competitive intelligence across the cloud management landscape.',
        'Represent AppScaleX at industry conferences, webinars, and developer community forums.'
      ],
      qualifications: [
        '3+ years of B2B product marketing experience in developer tools, cloud infrastructure, or enterprise SaaS.',
        'Demonstrated ability to understand and articulate complex DevOps, FinOps, or Kubernetes technical concepts.',
        'Exceptional written and oral communication skills with a portfolio of high-quality technical content.',
        'Experience working directly with cross-functional engineering, sales, and executive leadership teams.',
        'Data-driven mindset with experience tracking pipeline influence and launch engagement.'
      ],
      benefits: [
        'High-visibility strategic role shaping the company narrative from day one.',
        'Generous equity package and competitive base salary.',
        'Flexible remote-first working environment with travel to customer summits.'
      ]
    }
  ];

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  setDepartment(dept: string) {
    this.currentDepartment = dept;
  }

  get filteredJobs(): CareerJob[] {
    if (this.currentDepartment === 'all') {
      return this.jobList;
    }
    return this.jobList.filter(j => j.deptKey === this.currentDepartment);
  }

  toggleJobDetails(job: CareerJob) {
    job.isExpanded = !job.isExpanded;
  }

  openApplyModal(job: CareerJob) {
    this.selectedJobForModal = job;
    this.showApplyModal = true;
    this.applicationSubmitted = false;
    this.isSubmitting = false;
  }

  closeApplyModal() {
    this.showApplyModal = false;
    this.selectedJobForModal = null;
  }

  submitApplication() {
    if (!this.applicant.fullName || !this.applicant.email) {
      alert('Please fill in your name and email address to proceed.');
      return;
    }
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.applicationSubmitted = true;
    }, 800);
  }
}
