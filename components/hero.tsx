import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14">
      <div className="tech-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            {/* Tag */}
            <div className="mb-6 inline-flex w-fit items-center border border-border bg-card px-3 py-1.5">
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Self-hosted • ClickHouse • Go
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Customer Analytics
              <br />
              <span className="text-muted-foreground">for ClickHouse</span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Build customer-facing dashboards for your SaaS product. Publish live versions. 
              Create signed tenant-scoped embed sessions. Self-hosted Go backend with ClickHouse-aware query planning.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="text-xs uppercase tracking-wider">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-xs uppercase tracking-wider" asChild>
                <Link href="https://github.com/emban" target="_blank">
                  View on GitHub
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Micro-stats */}
            <div className="mt-10 flex items-center gap-6 border-t border-border pt-6">
              <div>
                <div className="text-lg font-semibold">{"<"}10ms</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">P95 Query</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-lg font-semibold">Self-host</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Your Infra</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-lg font-semibold">Go + React</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Stack</div>
              </div>
            </div>
          </div>

          {/* Right: Technical Proof Panel */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md border border-border bg-card">
              {/* Panel Header */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Session Payload
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-[10px] text-muted-foreground">signed</span>
                </div>
              </div>

              {/* Code Block */}
              <div className="tech-grid-dense p-4">
                <pre className="overflow-x-auto text-[11px] leading-relaxed text-foreground">
                  <code>{`{
  "tenant_id": "org_k8x9m2nv",
  "dashboard_id": "dash_analytics_v2",
  "scopes": ["read:metrics", "read:events"],
  "filters": {
    "date_range": "last_30d",
    "workspace": "production"
  },
  "expires_at": "2025-04-06T00:00:00Z",
  "signature": "hs256.eyJ..."
}`}</code>
                </pre>
              </div>

              {/* Panel Footer */}
              <div className="flex items-center justify-between border-t border-border px-4 py-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-[10px] text-muted-foreground">tenant-scoped</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-[10px] text-muted-foreground">time-limited</span>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-muted-foreground">HS256</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
