"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center border border-foreground">
              <span className="text-xs font-semibold">E</span>
            </div>
            <span className="text-sm font-semibold tracking-tight">EMBAN</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#integration" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
              Integration
            </Link>
            <Link href="#use-cases" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
              Use Cases
            </Link>
            <Link href="#pricing" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link href="#faq" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm" className="text-xs uppercase tracking-wider" asChild>
              <Link href="https://github.com/emban" target="_blank">
                GitHub
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
            <Button size="sm" className="text-xs uppercase tracking-wider">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-8 w-8 items-center justify-center md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              <Link 
                href="#features" 
                className="text-xs uppercase tracking-wider text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#integration" 
                className="text-xs uppercase tracking-wider text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Integration
              </Link>
              <Link 
                href="#use-cases" 
                className="text-xs uppercase tracking-wider text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Use Cases
              </Link>
              <Link 
                href="#pricing" 
                className="text-xs uppercase tracking-wider text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#faq" 
                className="text-xs uppercase tracking-wider text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="mt-3 flex flex-col gap-2">
                <Button variant="outline" size="sm" className="w-full text-xs uppercase tracking-wider" asChild>
                  <Link href="https://github.com/emban" target="_blank">
                    GitHub
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
                <Button size="sm" className="w-full text-xs uppercase tracking-wider">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
