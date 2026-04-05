import { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { DocsContent } from "@/components/docs/docs-content"

export const metadata: Metadata = {
  title: "Documentation — Emban",
  description: "Learn how to integrate Emban into your SaaS product. Self-hosted customer-facing analytics for ClickHouse.",
}

export default function DocsPage() {
  return (
    <DocsLayout>
      <DocsContent />
    </DocsLayout>
  )
}
