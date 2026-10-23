import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PluginsService } from '../xamin/plugins.service';
import { topMenuBarItems } from '../../constants/menu';

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  badgeClass: string;
  readTime: string;
  publishedDate: string;
  author: string;
  summary: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    content: string;
    codeSnippet?: string;
    bulletPoints?: string[];
    callout?: string;
  }[];
}

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html'
})
export class ResourcesPageComponent implements OnInit {
  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+91-9435160024',
    email: 'support@appscalex.com'
  };
  public navItems: any = topMenuBarItems;

  selectedArticle: ResourceArticle | null = null;

  articles: ResourceArticle[] = [
    {
      id: '1',
      slug: 'reduce-cicd-pipeline-time',
      title: 'How to Reduce CI/CD Pipeline Execution Time',
      category: 'DevOps Automation',
      badgeClass: 'badge-primary',
      readTime: '6 min read',
      publishedDate: 'October 2026',
      author: 'AppScaleX DevOps Engineering Team',
      summary: 'Explore proven architectural strategies including remote Docker layer caching, parallel runner matrix orchestration, and dependency pre-heating that cut deployment cycles by over 60%.',
      keyTakeaways: [
        'Container layer caching eliminates redundant rebuilds of untouched packages and layers.',
        'Splitting monolith test runners into parallel ephemeral workers converts serial wait times into sub-minute runs.',
        'Dependency mounting across build stages prevents pulling libraries from public registries repeatedly.',
        'Automated flaky test quarantining stops false-positive pipeline failures before they halt code promotion.'
      ],
      sections: [
        {
          heading: '1. The Real Cost of Slow Pipelines',
          content: 'In modern cloud-native engineering, slow delivery pipelines are more than an inconvenience; they directly decrease engineering velocity and increase cloud runner expenditure. When pipeline feedback exceeds 10 minutes, developers switch contexts, lose focus, and queue bottlenecks compound across teams.',
          callout: 'Teams adopting pipeline concurrency and layer caching reduce their mean deployment lead time by an average of 64% within 30 days.'
        },
        {
          heading: '2. Remote Docker Layer Caching (BuildKit)',
          content: 'Most time in containerized workflows is spent pulling base layers and running package managers like apt, pip, or npm. By persisting intermediate stage caches into your cloud registry (such as AWS ECR, Azure ACR, or Google Artifact Registry), identical build instructions execute in sub-second intervals.',
          codeSnippet: `# syntax=docker/dockerfile:1.4
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
# Mount cache directory across parallel build executions
RUN --mount=type=cache,target=/root/.npm npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build`
        },
        {
          heading: '3. Matrix Runner Parallelization',
          content: 'Instead of running linting, unit tests, security scans, and database migrations in a single serial container, split tasks into matrix configurations across lightweight Kubernetes runners.',
          bulletPoints: [
            'Separate unit tests from integration suites to fail fast on simple regressions.',
            'Group tests by runtime duration to achieve balanced worker completion times.',
            'Leverage Spot / Preemptible runner instances for non-blocking parallel tasks.'
          ]
        },
        {
          heading: '4. Continuous Measurement & Regression Alerts',
          content: 'Track step-by-step telemetry over time. AppScaleX continuously monitors duration trends for every stage and triggers alerts when a dependency update inflates runner build time.'
        }
      ]
    },
    {
      id: '2',
      slug: 'cloud-cost-optimization-guide',
      title: 'A Practical Guide to Cloud Cost Optimization',
      category: 'FinOps & Cost',
      badgeClass: 'badge-success',
      readTime: '8 min read',
      publishedDate: 'October 2026',
      author: 'AppScaleX FinOps Center of Excellence',
      summary: 'Learn how to detect orphaned storage volumes, eliminate over-provisioned staging clusters, and establish engineering-led cloud cost guardrails without slowing release velocity.',
      keyTakeaways: [
        'Orphaned block storage volumes and idle NAT Gateways constitute up to 22% of wasted cloud expenditure.',
        'Right-sizing compute instances based on 95th percentile utilization yields immediate savings without performance degradation.',
        'Automated non-production environment shutdown schedules recover up to 65% of staging cluster costs.',
        'Tag attribution down to the repository and engineer level transforms cloud costs from an accounting shock into an engineering metric.'
      ],
      sections: [
        {
          heading: '1. The Shift to Engineering-Led FinOps',
          content: 'Traditional cloud financial management relied on monthly retrospective bills scrutinized by finance teams with zero context on code changes. Modern FinOps bridges this disconnect by providing instant cost telemetry directly within engineering workflows.',
          callout: 'Infrastructure decisions made in code dictate cloud spend. Providing cost diffs on pull requests prevents accidental over-provisioning before merge.'
        },
        {
          heading: '2. Eliminating Ghost Cloud Resources',
          content: 'Orphaned resources silently drain engineering budgets. Automated cleanup policies should continuously sweep for:',
          bulletPoints: [
            'Unattached AWS EBS volumes or Azure Managed Disks from deleted containers.',
            'Idle NAT Gateways and unassociated Elastic IPs.',
            'Dormant dev/test namespaces that have had no active deployment for 14+ days.',
            'Outdated container images retained without lifecycle expiration policies.'
          ]
        },
        {
          heading: '3. Automated Non-Production Scheduling',
          content: 'Staging, preview, and QA environments typically sit idle for over 120 hours per week outside normal business hours. Applying dynamic scale-to-zero policies via Kubernetes operators automatically recovers substantial infrastructure budget.',
          codeSnippet: `apiVersion: finops.appscalex.io/v1
kind: ClusterSchedulePolicy
metadata:
  name: staging-weekend-idle
spec:
  targetNamespace: staging-apps
  schedule:
    sleepTime: "19:00"
    wakeTime: "07:30"
    timeZone: "UTC"
    weekendsOff: true
  minReplicasWhenSleeping: 0`
        },
        {
          heading: '4. Granular Unit Cost Metrics',
          content: 'Rather than looking solely at total cloud spend, measure cost per build, cost per active customer, and cost per microservice. This transparency fosters a culture of sustainable engineering velocity.'
        }
      ]
    },
    {
      id: '3',
      slug: 'devops-and-finops-collaboration',
      title: 'How DevOps and FinOps Teams Can Work Together',
      category: 'DevOps + FinOps',
      badgeClass: 'badge-info',
      readTime: '7 min read',
      publishedDate: 'October 2026',
      author: 'AppScaleX Platform Architecture Group',
      summary: 'Bridge the cultural gap between delivery speed and financial accountability with continuous infrastructure spending feedback loops embedded in CI/CD.',
      keyTakeaways: [
        'Velocity and cost efficiency are complementary goals when governed by automated platform policies.',
        'Pull request cost diffs inform engineers of monthly price impacts before Terraform changes apply.',
        'Dual-approval gates prevent accidental deployment of GPU or multi-thousand-dollar instance types.',
        'Shared observability dashboards align engineering leads and financial stakeholders around unified unit economics.'
      ],
      sections: [
        {
          heading: '1. The Tension Between Speed and Budget',
          content: 'DevOps engineers are measured on deployment frequency and lead time for changes, while finance teams focus on burn rate and budget forecasts. Without automated platform integration, this dichotomy creates organizational friction.',
          callout: 'When cost estimation is shifted left into pull requests, engineers proactively optimize infrastructure code 92% of the time before merging.'
        },
        {
          heading: '2. Shift-Left Infrastructure Cost Guardrails',
          content: 'By integrating tools like Infracost into AppScaleX automated pipelines, every infrastructure PR calculates its projected monthly delta against historical baseline spending.',
          codeSnippet: `# AppScaleX Policy Gate: Block PRs increasing spend by > $500/mo without lead approval
policy:
  name: budget-guardrail
  rule: delta_monthly_cost <= 500
  on_violation:
    require_approval:
      role: engineering-director`
        },
        {
          heading: '3. Shared Metrics & Shared Success',
          content: 'Define common key performance indicators such as Cost Per Deployment (CPD) and Resource Utilization Efficiency (RUE). This aligns both disciplines around shared operational excellence.'
        }
      ]
    },
    {
      id: '4',
      slug: 'incident-management-workflow-best-practices',
      title: 'Building an Effective Incident Management Workflow',
      category: 'SRE & Incident Ops',
      badgeClass: 'badge-warning',
      readTime: '9 min read',
      publishedDate: 'October 2026',
      author: 'AppScaleX SRE Engineering',
      summary: 'From anomaly detection to root-cause correlation and blameless postmortems: best practices for reducing mean time to recovery (MTTR) by 75%.',
      keyTakeaways: [
        'SLO burn rate alerts detect real customer-impacting degradation while eliminating noise from transient spikes.',
        'Automated incident war rooms coordinate Slack channels, video bridges, and on-call rosters within seconds of alert trigger.',
        'Automated canary rollbacks mitigate regressions before human engineers even open an incident bridge.',
        'Blameless retrospectives focus on systemic vulnerabilities rather than human error.'
      ],
      sections: [
        {
          heading: '1. Moving from Reactive Chaos to Predictable Response',
          content: 'High-severity incidents are unpredictable, but your response workflow should not be. A well-defined incident pipeline defines explicit roles, automated triage channels, and clear escalation thresholds.',
          callout: 'The fastest resolution is the one that happens automatically: automated canary rollback policies resolve 80% of deployment-induced outages in under 60 seconds.'
        },
        {
          heading: '2. Defining Incident Severity Tiers',
          content: 'Clear incident triage prevents team panic. Categorize incidents by customer impact rather than component failure:',
          bulletPoints: [
            'SEV-1 (Critical Outage): Primary business transactions impacted for > 5% of users. Immediate auto-page of command staff.',
            'SEV-2 (Degraded Performance): Core flows functional but P99 latency degraded or non-critical features down.',
            'SEV-3 (Minor Defect): Internal tooling issues or isolated edge cases with immediate workaround.'
          ]
        },
        {
          heading: '3. The Blameless Postmortem Playbook',
          content: 'True resilience comes from continuous learning. Document timeline events, contributing factors, detection gaps, and assign tracked follow-up remediation tasks with target SLA dates.'
        }
      ]
    },
    {
      id: '5',
      slug: 'using-ai-to-accelerate-root-cause-analysis',
      title: 'Using AI to Accelerate Root Cause Analysis',
      category: 'AI Engineering',
      badgeClass: 'badge-purple',
      readTime: '5 min read',
      publishedDate: 'October 2026',
      author: 'AppScaleX AI Intelligence Labs',
      summary: 'How operational intelligence models summarize millions of log lines and match anomalies to commits without sacrificing human oversight.',
      keyTakeaways: [
        'AI models correlate distributed trace anomalies with recent Git commits in milliseconds.',
        'Semantic log clustering groups millions of repetitive errors into concise incident root-cause summaries.',
        'Guardrailed remediation suggestions allow engineers to review and approve 1-click mitigation commands.',
        'Zero sensitive telemetry leaks: local embedding extraction ensures code and credentials never leave security boundaries.'
      ],
      sections: [
        {
          heading: '1. Tackling the Microservice Signal-to-Noise Problem',
          content: 'Modern distributed architectures generate gigabytes of log telemetry every second. When an outage occurs, on-call engineers are inundated with cascading failure symptoms across downstream services, masking the true root cause.',
          callout: 'AppScaleX AI isolates the originating anomaly by traversing service dependency graphs backwards from customer-facing errors.'
        },
        {
          heading: '2. Linking Anomalies Directly to Code Diffs',
          content: 'By correlating exception stack traces with git commit histories across recent release pipelines, AI agents immediately pinpoint the exact commit and line of code that triggered the regression.'
        },
        {
          heading: '3. Human-in-the-Loop Autonomous Remediation',
          content: 'Rather than executing risky blind interventions, AI presents structured remediation runbooks: traffic reroutes, canary rollbacks, or rate limit adjustments—awaiting single-click engineer confirmation.'
        }
      ]
    },
    {
      id: '6',
      slug: 'automating-performance-and-security-quality-gates',
      title: 'Automating Performance & Security Quality Gates',
      category: 'Quality Engineering',
      badgeClass: 'badge-dark',
      readTime: '6 min read',
      publishedDate: 'October 2026',
      author: 'AppScaleX Quality Engineering Team',
      summary: 'Integrate k6 latency thresholds and OWASP vulnerability scans directly into pull request checks to prevent production regressions.',
      keyTakeaways: [
        'Shift-left performance verification catches latency regressions before code reaches staging.',
        'OWASP ZAP DAST audits detect API authentication and header vulnerabilities in ephemeral environments.',
        'Automated gate policies enforce 100% compliance without relying on manual test checklist signoffs.',
        'Continuous quality metrics provide real-time assurance to engineering and compliance stakeholders.'
      ],
      sections: [
        {
          heading: '1. Why Manual Testing Gates Fail at Scale',
          content: 'Manual QA verification creates multi-day deployment bottlenecks and inevitably allows regressions to escape into production. Automated quality gates evaluate every pull request against rigorous performance and security budgets.',
          callout: 'Automated 4-stage quality gates block 99.4% of high-severity vulnerabilities and latency regressions prior to production deployment.'
        },
        {
          heading: '2. k6 Performance Thresholds in PR Pipelines',
          content: 'Embed load budgets into your delivery continuum. If a code change degrades P95 latency beyond 200ms or causes HTTP errors, the gate fails automatically.',
          codeSnippet: `import http from 'k6/http';
import { check } from 'k6';

export const options = {
  thresholds: {
    http_req_duration: ['p(95)<200'], // 95% of requests must complete < 200ms
    http_req_failed: ['rate<0.01']     // Error rate must remain under 1%
  }
};`
        },
        {
          heading: '3. Automated DAST & Container Image Scanning',
          content: 'Spin up ephemeral review environments to run active OWASP ZAP API scans and container vulnerability audits before promoting artifacts to production registries.'
        }
      ]
    }
  ];

  constructor(
    private plugins: PluginsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['article']) {
        const found = this.articles.find(a => a.slug === params['article'] || a.id === params['article']);
        if (found) {
          this.selectedArticle = found;
          window.scrollTo(0, 0);
        }
      }
    });

    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

  openArticle(article: ResourceArticle): void {
    this.selectedArticle = article;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { article: article.slug },
      queryParamsHandling: 'merge'
    });
  }

  closeArticle(): void {
    this.selectedArticle = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { article: null },
      queryParamsHandling: 'merge'
    });
  }
}
