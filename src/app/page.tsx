'use client';

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProblemSolution from "@/components/ProblemSolution"
import Process from "@/components/Process"
import ImplementationTimeline from "@/components/ImplementationTimeline"
import AIChatDemo from "@/components/AIChatDemo"
import Pricing from "@/components/Pricing"
import HomepageFAQ from "@/components/HomepageFAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import PullToRefresh from "@/components/PullToRefresh"

export default function Home() {
  const handleRefresh = async () => {
    // Simulate a refresh action - could reload data, reset states, etc.
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Optional: Add haptic feedback for supported devices
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <ProblemSolution />
        <Process />
        <ImplementationTimeline />
        <AIChatDemo />
        <Pricing />
        <HomepageFAQ />
        <Contact />
        <Footer />
      </main>
    </PullToRefresh>
  )
}