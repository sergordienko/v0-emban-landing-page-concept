import { Database, Lock, Server, Layers } from "lucide-react"

const signals = [
  {
    icon: Layers,
    label: "USE CASE",
    title: "Customer-Facing",
    description: "Analytics for your end users, not internal analysts"
  },
  {
    icon: Lock,
    label: "AUTH MODEL",
    title: "Signed Sessions",
    description: "Tenant-scoped embeds with cryptographic isolation"
  },
  {
    icon: Database,
    label: "CLICKHOUSE",
    title: "Native Layer",
    description: "HLL, rollups, p95/p99 aware query planning"
  },
  {
    icon: Server,
    label: "DEPLOYMENT",
    title: "Self-Hosted",
    description: "Go binary, your infrastructure, full control"
  }
]

export function SignalStrip() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, index) => (
            <div key={index} className="group relative">
              {/* Connector line (desktop) */}
              {index < signals.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-border lg:block" />
              )}
              
              <div className="flex flex-col gap-3">
                {/* Icon + Label */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center border border-border bg-background">
                    <signal.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {signal.label}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold">{signal.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {signal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
