import { Cpu, Activity, Users } from "lucide-react"

const useCases = [
  {
    icon: Cpu,
    title: "AI Usage Analytics",
    description: "Show customers their token consumption, model usage distribution, and cost breakdowns. Track requests per minute, latency percentiles, and error rates.",
    metrics: ["Tokens consumed", "Cost per model", "P99 latency", "Error rate"],
    example: "AI/LLM platforms"
  },
  {
    icon: Activity,
    title: "API Usage Dashboards",
    description: "Give developers visibility into their API consumption. Endpoint-level metrics, rate limit status, and historical trends for capacity planning.",
    metrics: ["Requests/minute", "Bandwidth", "Rate limits", "Response times"],
    example: "Developer platforms"
  },
  {
    icon: Users,
    title: "Customer Activity",
    description: "Help customers understand how their users engage with the product. Session counts, feature adoption, and retention cohorts.",
    metrics: ["Active users", "Feature usage", "Session duration", "Retention"],
    example: "B2B SaaS products"
  }
]

export function UseCases() {
  return (
    <section id="use-cases" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="mb-4 inline-block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Use Cases
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl text-balance">
            Analytics your customers expect
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every SaaS product needs customer-facing analytics. Here&apos;s what teams ship with Emban.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div key={index} className="group border border-border bg-card">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center border border-border bg-background">
                    <useCase.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-sm font-semibold">{useCase.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="mb-5 text-xs leading-relaxed text-muted-foreground">
                  {useCase.description}
                </p>

                {/* Metrics Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {useCase.metrics.map((metric, mIndex) => (
                    <span 
                      key={mIndex}
                      className="border border-border bg-muted/50 px-2 py-1 text-[9px] font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Example */}
                <div className="flex items-center gap-2 border-t border-border pt-4">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[10px] text-muted-foreground">{useCase.example}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
