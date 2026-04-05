import { LayoutGrid, FileCode, Users, Gauge, BarChart3, Code2 } from "lucide-react"

const features = [
  {
    icon: LayoutGrid,
    title: "Visual Builder",
    description: "Drag-and-drop dashboard creation with real-time preview. Configure charts, filters, and layouts without writing code.",
    tag: "BUILDER"
  },
  {
    icon: FileCode,
    title: "Dashboard Templates",
    description: "Start from pre-built templates for common use cases: API usage, activity feeds, billing metrics. Customize as needed.",
    tag: "TEMPLATES"
  },
  {
    icon: Users,
    title: "Tenant-Scoped Embeds",
    description: "Cryptographic session tokens ensure each customer only sees their data. No row-level security configuration needed.",
    tag: "ISOLATION"
  },
  {
    icon: Gauge,
    title: "ClickHouse Planner",
    description: "Query planner understands ClickHouse-specific optimizations: pre-aggregated rollups, materialized views, sampling.",
    tag: "PERFORMANCE"
  },
  {
    icon: BarChart3,
    title: "Percentile Metrics",
    description: "Native support for p50, p95, p99 calculations using ClickHouse quantile functions. No approximation overhead.",
    tag: "ANALYTICS"
  },
  {
    icon: Code2,
    title: "React / Browser SDK",
    description: "Drop-in React component or vanilla JS embed. Handles session management, loading states, and responsive layouts.",
    tag: "INTEGRATION"
  }
]

export function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="mb-4 inline-block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Capabilities
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl text-balance">
            Built for production
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Everything you need to ship customer-facing analytics, nothing you don&apos;t.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group border border-border bg-card p-5 transition-colors hover:border-foreground/20"
            >
              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center border border-border bg-background transition-colors group-hover:border-foreground/20">
                  <feature.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <span className="text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
                  {feature.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-sm font-semibold">{feature.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
