import { Hero } from '../components/Hero'
import { PainPoints } from '../components/PainPoints'
import { Solution } from '../components/Solution'
import { Process } from '../components/Process'
import { FAQ } from '../components/FAQ'
import { CalendlyWidget } from '../components/CalendlyWidget'
import { StickyCTA } from '../components/StickyCTA'
import { Transformation } from '../components/Transformation'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'
import { trackStandardEvent } from '../utils/pixel'

const scrollToCalendly = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
}

export const LandingPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        trackStandardEvent('ViewContent', {
            content_name: 'Landing Page',
            content_category: 'Service'
        })
    }, [])

    const handleBookingSuccess = () => {
        console.log("Sending booking confirmation details via email...")
        navigate('/success')
    }

    return (
        <>
            {/* Static nav (always visible until sticky kicks in) */}
            <nav className="fixed top-0 w-full z-40 py-5 px-10 flex justify-between items-center backdrop-blur-sm">
                <div className="text-xl font-bold tracking-tighter">LAMBDA<span className="text-accent">WORKS</span></div>
                <a
                    href="#diagnostico"
                    onClick={scrollToCalendly}
                    className="hidden md:flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/5 hover:border-accent/40 hover:text-accent transition-all min-h-[44px]"
                >
                    Agendar Diagnóstico
                </a>
            </nav>

            {/* Sticky CTA (mobile bottom bar + desktop scroll reveal) */}
            <StickyCTA />

            <main>
                <Hero />

                <PainPoints />

                <Solution />

                {/* CTA between Solution and Transformation */}
                <div className="py-12 px-6 md:px-12 text-center bg-[#0a1120]">
                    <a
                        href="#diagnostico"
                        onClick={(e) => {
                            scrollToCalendly(e)
                            trackStandardEvent('InitiateCheckout', { content_name: 'Mid-Page CTA' })
                        }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 rounded-full font-semibold transition-all group min-h-[44px]"
                    >
                        Agendar diagnóstico gratuito
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="mt-3 text-sm text-white/30">Trabajo 1 a 1 · Sin plantillas genéricas</p>
                </div>

                <Transformation />

                <Process />

                <FAQ />

                {/* CTA before Calendly */}
                <div className="pt-12 pb-2 px-6 md:px-12 text-center">
                    <p className="text-white/40 text-sm uppercase tracking-widest font-semibold mb-3">El primer paso es gratis</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-[560px] mx-auto leading-tight">
                        Agendá tu diagnóstico y<br />
                        <span className="text-accent">salí con un plan claro.</span>
                    </h2>
                    <p className="text-white/40 text-sm max-w-[400px] mx-auto">
                        Sin presión. Sin compromiso. Si no aplica, te lo decimos igual.
                    </p>
                </div>

                {/* Calendly section */}
                <section id="diagnostico" className="py-10 px-6 md:px-12 bg-white/[0.02]">
                    <div className="max-w-3xl mx-auto">
                        <CalendlyWidget
                            url="https://calendly.com/gaspar-gimenez8/30min"
                            onEventScheduled={handleBookingSuccess}
                        />
                    </div>
                </section>

                {/* Final CTA after Calendly */}
                <div className="py-16 px-6 md:px-12 text-center">
                    <p className="text-white/30 text-sm mb-4">¿Todavía dudando?</p>
                    <a
                        href="#diagnostico"
                        onClick={(e) => {
                            scrollToCalendly(e)
                            trackStandardEvent('InitiateCheckout', { content_name: 'Final CTA' })
                        }}
                        className="inline-flex items-center gap-2 px-8 py-4 border border-accent/30 hover:bg-accent hover:border-accent rounded-full font-semibold text-accent hover:text-white transition-all group min-h-[44px]"
                    >
                        Ver si aplica a mi caso
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="mt-3 text-xs text-white/20">30 min · Gratis · Sin humo</p>
                </div>
            </main>

            <footer className="py-12 border-t border-white/10 px-6 md:px-12 opacity-50 text-sm pb-20 md:pb-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div>© {new Date().getFullYear()} Lambda Works. Lean & Robust.</div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
