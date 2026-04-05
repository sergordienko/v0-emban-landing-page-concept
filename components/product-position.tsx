import { X, Check } from "lucide-react"

export function ProductPosition() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="mb-4 inline-block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Position
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl text-balance">
            Not another BI tool
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Enterprise embedded analytics vendors sell complexity. Emban is purpose-built for SaaS teams 
            who need customer-facing dashboards without the overhead.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Generic BI / Hosted Vendors */}
          <div className="border border-border bg-muted/30 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center border border-border bg-background">
                <X className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Generic BI / Hosted Vendors
              </span>
            </div>

            <ul className="space-y-4">
              {[
                "Multi-purpose tool for analysts and business users",
                "Hosted SaaS with per-seat or usage-based pricing",
                "Proprietary query layer abstracts your database",
                "Complex permissioning and white-labeling setup",
                "Vendor controls your data access patterns"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-border bg-background">
                    <X className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <span className="text-xs leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emban */}
          <div className="border border-foreground/20 bg-card p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center border border-foreground bg-foreground">
                <Check className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider">
                Emban
              </span>
            </div>

            <ul className="space-y-4">
              {[
                "Purpose-built for customer-facing analytics in SaaS",
                "Self-hosted Go binary with your ClickHouse cluster",
                "Native ClickHouse layer: HLL, rollups, percentiles",
                "Cryptographic tenant isolation via signed sessions",
                "You own the stack, the data, and the access patterns"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-foreground bg-foreground">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-xs leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
