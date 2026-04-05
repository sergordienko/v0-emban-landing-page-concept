import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Ingest Events",
    description: "Stream events from your application to ClickHouse. Emban works with your existing event schema.",
    code: `INSERT INTO events (
  tenant_id, event_type, 
  timestamp, properties
) VALUES (?, ?, ?, ?)`
  },
  {
    number: "02",
    title: "Build Dashboards",
    description: "Use the visual builder to create charts, metrics, and layouts. Configure tenant-aware filters.",
    code: `dashboard.addChart({
  type: "timeseries",
  query: "metrics.api_calls",
  groupBy: "endpoint"
})`
  },
  {
    number: "03",
    title: "Publish Version",
    description: "Draft/publish workflow ensures safe iterations. Lock a version for production use.",
    code: `emban publish \\
  --dashboard dash_analytics \\
  --version v2.1.0 \\
  --env production`
  },
  {
    number: "04",
    title: "Create Sessions",
    description: "Generate signed embed sessions scoped to a specific tenant with time-limited access.",
    code: `session := emban.CreateSession(
  tenantID: "org_k8x9m2nv",
  dashboardID: "dash_analytics",
  expiresIn: 1 * time.Hour,
)`
  }
]

export function FlowSection() {
  return (
    <section className="border-y border-border bg-muted/20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="mb-4 inline-block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Workflow
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl text-balance">
            From events to embedded analytics
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Four steps to ship customer-facing dashboards. No black-box abstractions, 
            no vendor lock-in, no surprises.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div key={index} className="group relative border border-border bg-card">
              {/* Step Header */}
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-muted-foreground/50">{step.number}</span>
                  <div className="h-6 w-px bg-border" />
                  <h3 className="text-sm font-semibold">{step.title}</h3>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block" />
                )}
              </div>

              {/* Step Content */}
              <div className="p-5">
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Code Preview */}
                <div className="tech-grid-dense overflow-hidden border border-border">
                  <pre className="overflow-x-auto p-3 text-[10px] leading-relaxed">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
