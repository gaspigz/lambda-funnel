import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export const StickyCTA = () => {
    const [showDesktop, setShowDesktop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            setShowDesktop(scrollPercent > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Mobile sticky bottom bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/90 border-t border-white/10 backdrop-blur-md shadow-[0_-4px_32px_rgba(0,0,0,0.4)]">
                <a
                    href="#diagnostico"
                    className="flex flex-col items-center justify-center w-full bg-accent hover:bg-accent/90 text-white font-semibold rounded-2xl py-3 transition-all active:scale-95"
                    onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                >
                    <span className="flex items-center gap-2 text-[15px]">
                        <Calendar className="w-4 h-4" />
                        Agendar diagnóstico gratuito
                    </span>
                    <span className="text-xs text-white/70 font-normal mt-0.5">30 min · Sin presión</span>
                </a>
            </div>

            {/* Desktop sticky CTA */}
            <AnimatePresence>
                {showDesktop && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25 }}
                        className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-between items-center px-10 py-3 bg-background/95 border-b border-white/10 backdrop-blur-md shadow-lg"
                    >
                        <div className="text-xl font-bold tracking-tighter">LAMBDA<span className="text-accent">WORKS</span></div>
                        <a
                            href="#diagnostico"
                            className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 rounded-full font-semibold text-sm transition-all group min-h-[44px]"
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            Agendar diagnóstico gratuito
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
