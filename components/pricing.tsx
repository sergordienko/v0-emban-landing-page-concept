import { Button } from "@/components/ui/button"
import { Check, ArrowUpRight } from "lucide-react"

const plans = [
  {
    name: "STARTER",
    price: "Free",
    period: "",
    description: "For evaluating Emban on your ClickHouse instance",
    features: [
      "Up to 3 dashboards",
      "1 tenant workspace",
      "Community support",
      "Basic chart types",
      "7-day data retention on cached views",
      "Self-hosted only",
    ],
    cta: "Deploy Now",
    variant: "outline" as const,
    highlight: false,
  },
  {
    name: "PRO",
    price: "$49",
    period: "/mo",
    description: "For production SaaS products with customer-facing analytics",
    features: [
      "Unlimited dashboards",
      "Unlimited tenants",
      "Signed embed sessions",
      "Priority query planner",
      "90-day data retention",
      "Email support",
      "Custom chart templates",
      "React + Browser SDK",
    ],
    cta: "Start Free Trial",
    variant: "default" as const,
    highlight: true,
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    period: "",
    description: "For teams with compliance, scale, or integration requirements",
    features: [
      "Everything in Pro",
      "SSO / SAML authentication",
      "Dedicated support channel",
      "SLA guarantees",
      "Custom integrations",
      "On-prem deployment assistance",
      "Audit logging",
      "White-labeling",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block border border-border bg-muted px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
            Pricing
          </span>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            Self-host Emban for free, or unlock advanced features with Pro.
            All plans include full access to your ClickHouse data.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col border bg-card p-6 transition-colors ${
                plan.highlight
                  ? "border-foreground"
                  : "border-border hover:border-muted-foreground/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-6 bg-foreground px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    <span className="text-xs leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.variant}
                className="w-full text-xs uppercase tracking-wider"
              >
                {plan.cta}
                {plan.name === "ENTERPRISE" && (
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            All plans include self-hosting on your infrastructure.{" "}
            <span className="border-b border-dashed border-muted-foreground/50">
              No data leaves your network.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
