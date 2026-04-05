import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function DocsContent() {
  return (
    <div className="max-w-3xl">
      {/* Breadcrumb */}
      <div className="mb-6">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Getting Started
        </span>
      </div>

      {/* Title */}
      <h1 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        Introduction
      </h1>

      <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
        Emban is a self-hosted customer-facing analytics layer for SaaS products built on ClickHouse. 
        Build dashboards internally, publish live versions, and create signed tenant-scoped embed sessions 
        for your customers.
      </p>

      {/* Quick Links */}
      <div className="mb-12 grid gap-3 sm:grid-cols-2">
        <Link
          href="/docs/quickstart"
          className="group flex items-center justify-between border border-border bg-card p-4 transition-colors hover:border-foreground/30"
        >
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider">Quickstart</h3>
            <p className="mt-1 text-xs text-muted-foreground">Get up and running in 5 minutes</p>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="/docs/installation"
          className="group flex items-center justify-between border border-border bg-card p-4 transition-colors hover:border-foreground/30"
        >
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider">Installation</h3>
            <p className="mt-1 text-xs text-muted-foreground">Deploy Emban to your infrastructure</p>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* What is Emban */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">What is Emban?</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Emban sits between your ClickHouse database and your customers. It provides a secure, 
          tenant-aware analytics layer that lets you:
        </p>
        <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-accent" />
            <span>Build dashboards with a visual builder or SQL</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-accent" />
            <span>Publish dashboards with automatic tenant scoping</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-accent" />
            <span>Embed analytics in your product with signed sessions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-accent" />
            <span>Optimize queries with the built-in ClickHouse planner</span>
          </li>
        </ul>
      </section>

      {/* Architecture */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Architecture</h2>
        <div className="mb-4 border border-border bg-muted/30 p-4">
          <pre className="overflow-x-auto text-xs leading-relaxed">
{`┌─────────────────────────────────────────────────────┐
│                   Your SaaS App                     │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐       │
│  │  React    │  │  Browser  │  │  Server   │       │
│  │  SDK      │  │  SDK      │  │  SDK (Go) │       │
│  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘       │
└────────┼──────────────┼──────────────┼─────────────┘
         │              │              │
         └──────────────┼──────────────┘
                        ▼
              ┌─────────────────┐
              │     Emban       │
              │  ┌───────────┐  │
              │  │ Dashboard │  │
              │  │ Builder   │  │
              │  ├───────────┤  │
              │  │ Query     │  │
              │  │ Planner   │  │
              │  ├───────────┤  │
              │  │ Tenant    │  │
              │  │ Scoping   │  │
              │  └───────────┘  │
              └────────┬────────┘
                       ▼
              ┌─────────────────┐
              │   ClickHouse    │
              │    Database     │
              └─────────────────┘`}
          </pre>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Emban acts as a secure proxy between your application and ClickHouse, automatically 
          injecting tenant filters and optimizing queries for performance.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Key Features</h2>
        <div className="space-y-4">
          <div className="border-l-2 border-border pl-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider">Tenant-Scoped Embeds</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Generate signed embed tokens that automatically filter data to the current tenant. 
              No data leakage, no complex permission systems.
            </p>
          </div>
          <div className="border-l-2 border-border pl-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider">ClickHouse Query Planner</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Automatically optimizes queries for ClickHouse, leveraging partition pruning, 
              materialized views, and projection selection.
            </p>
          </div>
          <div className="border-l-2 border-border pl-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider">Self-Hosted</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Deploy on your own infrastructure. Your data never leaves your environment. 
              Docker, Kubernetes, or bare metal.
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Quick Example</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Create a signed embed session in your backend:
        </p>
        <div className="mb-4 border border-border bg-foreground/[0.02]">
          <div className="flex items-center justify-between border-b border-border px-3 py-2">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Go</span>
          </div>
          <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
            <code>{`session, err := emban.CreateSession(ctx, emban.SessionConfig{
    TenantID:    user.OrganizationID,
    DashboardID: "dash_api_usage",
    ExpiresIn:   time.Hour,
})

// Return session.Token to your frontend`}</code>
          </pre>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          Then render the dashboard in your React app:
        </p>
        <div className="border border-border bg-foreground/[0.02]">
          <div className="flex items-center justify-between border-b border-border px-3 py-2">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">React</span>
          </div>
          <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
            <code>{`import { EmbanDashboard } from '@emban/react'

export function AnalyticsPage({ sessionToken }) {
  return (
    <EmbanDashboard
      token={sessionToken}
      theme="light"
    />
  )
}`}</code>
          </pre>
        </div>
      </section>

      {/* Next Steps */}
      <section className="border-t border-border pt-8">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Next Steps</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="text-xs uppercase tracking-wider" asChild>
            <Link href="/docs/quickstart">
              Quickstart Guide
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="text-xs uppercase tracking-wider" asChild>
            <Link href="/docs/go-sdk">
              Go SDK Reference
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="text-xs uppercase tracking-wider" asChild>
            <Link href="/docs/react-sdk">
              React SDK
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
