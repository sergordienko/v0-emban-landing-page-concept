import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center border border-foreground">
                <span className="text-xs font-semibold">E</span>
              </div>
              <span className="text-sm font-semibold tracking-tight">EMBAN</span>
            </Link>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
              Self-hosted customer analytics layer for SaaS products on ClickHouse.
            </p>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[10px] text-muted-foreground">MIT License</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <span className="mb-4 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Product
            </span>
            <ul className="space-y-3">
              {["Features", "Integration", "Use Cases", "Pricing"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <span className="mb-4 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Resources
            </span>
            <ul className="space-y-3">
              {[
                { label: "Documentation", external: true },
                { label: "API Reference", external: true },
                { label: "Examples", external: true },
                { label: "Changelog", external: false }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    href="#"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                    {item.external && <ArrowUpRight className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <span className="mb-4 block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Community
            </span>
            <ul className="space-y-3">
              {[
                { label: "GitHub", href: "https://github.com/emban" },
                { label: "Discord", href: "#" },
                { label: "Twitter", href: "#" }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <span className="text-[10px] text-muted-foreground">
            © 2025 Emban. Self-hosted analytics for ClickHouse.
          </span>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[10px] text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-[10px] text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
