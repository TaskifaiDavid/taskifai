import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProblemSolution from "@/components/ProblemSolution"
import Process from "@/components/Process"
import AIChatDemo from "@/components/AIChatDemo"
import Pricing from "@/components/Pricing"
import HomepageFAQ from "@/components/HomepageFAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemSolution />
      <Process />
      <AIChatDemo />
      <Pricing />
      <HomepageFAQ />
      <Contact />
      <Footer />
    </main>
  )
}