import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SignalStrip } from "@/components/signal-strip"
import { ProductPosition } from "@/components/product-position"
import { FlowSection } from "@/components/flow-section"
import { FeatureGrid } from "@/components/feature-grid"
import { IntegrationSection } from "@/components/integration-section"
import { UseCases } from "@/components/use-cases"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SignalStrip />
      <ProductPosition />
      <FlowSection />
      <FeatureGrid />
      <IntegrationSection />
      <UseCases />
      <FAQ />
      <Footer />
    </main>
  )
}
