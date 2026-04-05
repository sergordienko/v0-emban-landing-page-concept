"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What databases does Emban support?",
    answer: "Emban is built exclusively for ClickHouse. We don't abstract your database or support multiple backends. This focus allows us to leverage ClickHouse-specific features: pre-aggregated rollups, materialized views, approximate functions, and the columnar query engine."
  },
  {
    question: "How does tenant isolation work?",
    answer: "Each embed session is cryptographically signed with the tenant ID baked into the token. The Emban backend validates the signature and automatically injects tenant filters into every query. There's no way for a customer to access another tenant's data, even if they inspect the frontend code."
  },
  {
    question: "What's the deployment footprint?",
    answer: "Emban runs as a single Go binary. Typical production deployments use 2-4 instances behind a load balancer. Memory usage is ~100MB per instance at rest. The binary connects directly to your ClickHouse cluster—no additional databases or caches required."
  },
  {
    question: "Can I customize the dashboard appearance?",
    answer: "Yes. The React component accepts theme configuration for colors, typography, and spacing. You can also inject custom CSS. For deeper customization, the browser SDK exposes the underlying chart components for full control."
  },
  {
    question: "How do you handle high-cardinality data?",
    answer: "Emban's query planner uses ClickHouse's native sampling, HyperLogLog for unique counts, and materialized views for pre-aggregation. We don't load unbounded datasets into memory. For time-series, we automatically apply appropriate rollup granularity."
  },
  {
    question: "Is there a hosted option?",
    answer: "No. Emban is self-hosted only. Your ClickHouse data stays in your infrastructure. We don't want access to your customer data, and many teams prefer not to send analytics data to third parties."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border bg-muted/20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Header + CTA */}
          <div>
            <span className="mb-4 inline-block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              FAQ
            </span>
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl text-balance">
              Common questions
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Technical answers for technical teams. No marketing fluff.
            </p>

            {/* CTA Card */}
            <div className="border border-border bg-card p-6">
              <h3 className="mb-2 text-sm font-semibold">Ready to ship?</h3>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                Get Emban running in your infrastructure in under an hour. 
                Full documentation, example dashboards, and SDK references included.
              </p>
              <Button size="sm" className="text-xs uppercase tracking-wider">
                Get Started
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Right: FAQ Items */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="pr-4 text-sm font-medium">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform",
                      openIndex === index && "rotate-180"
                    )} 
                  />
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-200",
                    openIndex === index ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
