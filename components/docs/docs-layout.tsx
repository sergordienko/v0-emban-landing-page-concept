"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowLeft, Menu, X } from "lucide-react"
import { useState } from "react"

const sidebarSections = [
  {
    title: "Getting Started",
    items: [
      { href: "/docs", label: "Introduction" },
      { href: "/docs/quickstart", label: "Quickstart" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/configuration", label: "Configuration" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { href: "/docs/dashboards", label: "Dashboards" },
      { href: "/docs/templates", label: "Templates" },
      { href: "/docs/tenants", label: "Tenant Scoping" },
      { href: "/docs/embeds", label: "Embed Sessions" },
    ],
  },
  {
    title: "Integration",
    items: [
      { href: "/docs/go-sdk", label: "Go Server SDK" },
      { href: "/docs/react-sdk", label: "React SDK" },
      { href: "/docs/browser-sdk", label: "Browser SDK" },
      { href: "/docs/clickhouse", label: "ClickHouse Setup" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { href: "/docs/query-planner", label: "Query Planner" },
      { href: "/docs/percentiles", label: "Percentile Metrics" },
      { href: "/docs/security", label: "Security" },
      { href: "/docs/self-hosting", label: "Self-Hosting" },
    ],
  },
  {
    title: "Reference",
    items: [
      { href: "/docs/api", label: "API Reference" },
      { href: "/docs/changelog", label: "Changelog" },
    ],
  },
]

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center border border-foreground">
                  <span className="text-xs font-semibold">E</span>
                </div>
                <span className="text-sm font-semibold tracking-tight">EMBAN</span>
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Docs</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-4 md:flex">
              <Button variant="ghost" size="sm" className="text-xs uppercase tracking-wider" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-1 h-3 w-3" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="text-xs uppercase tracking-wider" asChild>
                <Link href="https://github.com/emban" target="_blank">
                  GitHub
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="flex h-8 w-8 items-center justify-center md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl pt-14">
        <div className="flex">
          {/* Sidebar */}
          <aside
            className={`
              fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-background pt-14 transition-transform duration-200 ease-in-out
              md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] md:translate-x-0
              ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <nav className="h-full overflow-y-auto p-4">
              {sidebarSections.map((section) => (
                <div key={section.title} className="mb-6">
                  <h3 className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setSidebarOpen(false)}
                          className={`
                            block px-2 py-1.5 text-xs transition-colors
                            ${pathname === item.href
                              ? "border-l-2 border-foreground bg-secondary pl-[calc(0.5rem-2px)] font-medium text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                            }
                          `}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 md:px-8 lg:px-12">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
