import { useState } from 'react'
import { Hero } from './components/Hero'
import { PainPoints } from './components/PainPoints'
import { Solution } from './components/Solution'
import { Process } from './components/Process'
import { FAQ } from './components/FAQ'
import { CalendlyWidget } from './components/CalendlyWidget'
import { SuccessVideo } from './components/SuccessVideo'

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleBookingSuccess = () => {
    // Mock sending email information
    console.log("Sending booking confirmation details via email...")
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent/30">
      {!formSubmitted ? (
        <>
          <nav className="fixed top-0 w-full z-50 py-6 px-10 flex justify-between items-center backdrop-blur-sm">
            <div className="text-xl font-bold tracking-tighter">LAMBDA<span className="text-accent">WORKS</span></div>
            <a href="#diagnostico" className="text-sm font-medium hover:text-accent transition-colors">Agendar Diagnóstico</a>
          </nav>

          <main>
            <Hero />
            <PainPoints />
            <Solution />
            <Process />
            <FAQ />
            <section id="diagnostico" className="py-24 px-6 md:px-12 bg-white/5">
              <div className="max-w-3xl mx-auto">
                <CalendlyWidget
                  url="https://calendly.com/gaspar-gimenez8/30min"
                  onEventScheduled={handleBookingSuccess}
                />
              </div>
            </section>
          </main>

          <footer className="py-12 border-t border-white/10 px-6 md:px-12 opacity-50 text-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div>© {new Date().getFullYear()} Lambda Works. Lean & Robust.</div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <SuccessVideo />
      )}
    </div>
  )
}

export default App
