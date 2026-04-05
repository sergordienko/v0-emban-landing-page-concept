"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const tabs = [
  {
    id: "server",
    label: "Server SDK",
    language: "go",
    code: `package main

import (
    "time"
    "github.com/emban/emban-go"
)

func main() {
    client := emban.NewClient(emban.Config{
        APIKey:       os.Getenv("EMBAN_API_KEY"),
        ClickHouseURL: os.Getenv("CLICKHOUSE_URL"),
    })

    // Create a tenant-scoped embed session
    session, err := client.CreateSession(emban.SessionParams{
        TenantID:    "org_k8x9m2nv",
        DashboardID: "dash_analytics_v2",
        Scopes:      []string{"read:metrics", "read:events"},
        Filters: map[string]any{
            "date_range": "last_30d",
            "workspace":  "production",
        },
        ExpiresIn: 1 * time.Hour,
    })

    if err != nil {
        log.Fatal(err)
    }

    // Return session.Token to your frontend
    fmt.Println(session.Token)
}`
  },
  {
    id: "react",
    label: "React",
    language: "tsx",
    code: `import { EmbanDashboard } from '@emban/react'

interface AnalyticsProps {
  sessionToken: string
}

export function CustomerAnalytics({ sessionToken }: AnalyticsProps) {
  return (
    <EmbanDashboard
      token={sessionToken}
      theme="light"
      onError={(error) => {
        console.error('Dashboard error:', error)
      }}
      onLoad={() => {
        console.log('Dashboard loaded')
      }}
      className="w-full h-[600px]"
    />
  )
}

// Usage in your page
export default function DashboardPage() {
  const { data: session } = useSWR('/api/emban-session')
  
  if (!session) return <LoadingState />
  
  return (
    <div className="container mx-auto py-8">
      <h1>Your Analytics</h1>
      <CustomerAnalytics sessionToken={session.token} />
    </div>
  )
}`
  },
  {
    id: "browser",
    label: "Browser",
    language: "js",
    code: `// Vanilla JavaScript embed
import { createEmbanEmbed } from '@emban/browser'

async function initDashboard() {
  // Fetch session token from your backend
  const response = await fetch('/api/emban-session')
  const { token } = await response.json()

  // Create the embed
  const embed = createEmbanEmbed({
    container: document.getElementById('dashboard-container'),
    token: token,
    theme: 'light',
    responsive: true,
  })

  // Event listeners
  embed.on('load', () => {
    console.log('Dashboard ready')
  })

  embed.on('error', (error) => {
    console.error('Embed error:', error)
  })

  embed.on('filter:change', (filters) => {
    console.log('Filters updated:', filters)
  })

  // Cleanup on unmount
  return () => embed.destroy()
}

initDashboard()`
  }
]

export function IntegrationSection() {
  const [activeTab, setActiveTab] = useState("server")

  const activeContent = tabs.find(tab => tab.id === activeTab)

  return (
    <section id="integration" className="border-y border-border bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <span className="mb-4 inline-block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Integration
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl text-balance">
            Ship in minutes, not weeks
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Create sessions server-side, embed client-side. Real code from production deployments.
          </p>
        </div>

        {/* Code Tabs */}
        <div className="border border-border bg-background">
          {/* Tab Header */}
          <div className="flex border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-5 py-3 text-[11px] font-medium uppercase tracking-wider transition-colors",
                  activeTab === tab.id 
                    ? "border-b-2 border-foreground text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code Content */}
          <div className="tech-grid-dense relative">
            {/* Language Badge */}
            <div className="absolute right-4 top-4 border border-border bg-card px-2 py-1">
              <span className="text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
                {activeContent?.language}
              </span>
            </div>

            <pre className="overflow-x-auto p-6 text-[11px] leading-relaxed">
              <code>{activeContent?.code}</code>
            </pre>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[10px] text-muted-foreground">Go, Node.js, Python SDKs</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[10px] text-muted-foreground">TypeScript definitions included</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[10px] text-muted-foreground">SSR compatible</span>
          </div>
        </div>
      </div>
    </section>
  )
}
