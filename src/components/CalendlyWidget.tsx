import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Clock, Sparkles, ShieldCheck } from 'lucide-react'

interface CalendlyWidgetProps {
    url: string
    onEventScheduled: () => void
}

declare global {
    interface Window {
        Calendly: any
    }
}

const CalendlySkeleton = () => (
    <div className="w-full h-[700px] rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
        {/* Header skeleton */}
        <div className="p-6 border-b border-white/5">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
                <div className="space-y-2">
                    <div className="h-4 w-32 bg-white/10 rounded-full animate-pulse" />
                    <div className="h-3 w-24 bg-white/5 rounded-full animate-pulse" />
                </div>
            </div>
            <div className="h-3 w-48 bg-white/5 rounded-full animate-pulse" />
        </div>
        {/* Month navigation skeleton */}
        <div className="p-6">
            <div className="flex justify-between items-center mb-5">
                <div className="h-5 w-28 bg-white/10 rounded-full animate-pulse" />
                <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 animate-pulse" />
                    <div className="w-8 h-8 rounded-full bg-white/5 animate-pulse" />
                </div>
            </div>
            {/* Day names */}
            <div className="grid grid-cols-7 gap-2 mb-3">
                {['D', 'L', 'M', 'X', 'J', 'V', 'S'].map(d => (
                    <div key={d} className="h-3 rounded-full bg-white/5" />
                ))}
            </div>
            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }).map((_, i) => (
                    <div
                        key={i}
                        className={`h-9 rounded-xl animate-pulse ${i % 3 === 0 ? 'bg-accent/10' : 'bg-white/[0.04]'
                            }`}
                    />
                ))}
            </div>
        </div>
        {/* Time slots skeleton */}
        <div className="px-6">
            <div className="h-3 w-32 bg-white/5 rounded-full mb-4 animate-pulse" />
            <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-10 rounded-xl bg-white/5 animate-pulse" />
                ))}
            </div>
        </div>
    </div>
)

const bullets = [
    { icon: Sparkles, text: 'Diagnóstico real de tu operación' },
    { icon: Clock, text: 'Qué automatizar primero' },
    { icon: ShieldCheck, text: 'Sin compromiso de ningún tipo' },
]

export const CalendlyWidget = ({ url, onEventScheduled }: CalendlyWidgetProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const handleCalendlyEvent = (e: MessageEvent) => {
            if (e.data?.event === 'calendly.event_scheduled') {
                onEventScheduled()
            }
            // Calendly emits 'calendly.page_height' when the widget is ready/rendered
            if (e.data?.event === 'calendly.page_height' || e.data?.event === 'calendly.profile_page_viewed') {
                setLoaded(true)
            }
        }

        window.addEventListener('message', handleCalendlyEvent)

        let checkInterval: ReturnType<typeof setInterval>

        const initWidget = () => {
            if (window.Calendly && containerRef.current) {
                containerRef.current.innerHTML = ''

                window.Calendly.initInlineWidget({
                    url: `${url}?hide_landing_page=1&hide_gdpr_banner=1`,
                    parentElement: containerRef.current,
                    prefill: {},
                    utm: {}
                })
                if (checkInterval) clearInterval(checkInterval)

                // Fallback: mark as loaded after 4s even if no event received
                setTimeout(() => setLoaded(true), 4000)
            }
        }

        if (window.Calendly) {
            initWidget()
        } else {
            checkInterval = setInterval(initWidget, 100)
        }

        return () => {
            window.removeEventListener('message', handleCalendlyEvent)
            if (checkInterval) clearInterval(checkInterval)
        }
    }, [url, onEventScheduled])

    return (
        <div>
            {/* Context bullets */}
            <div className="mb-6 space-y-3">
                {bullets.map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70 text-sm">
                        <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-accent" />
                        </div>
                        <span>{text}</span>
                    </div>
                ))}
            </div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-2 rounded-full text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                30 min · Gratis · Sin humo
            </div>

            {/* Widget wrapper: skeleton on top of the hidden iframe until loaded */}
            <div className="relative w-full h-[700px]" style={{ minWidth: '320px' }}>
                {/* Skeleton visible while not loaded */}
                <AnimatePresence>
                    {!loaded && (
                        <motion.div
                            key="skeleton"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.5 } }}
                            className="absolute inset-0 z-10"
                        >
                            <CalendlySkeleton />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Calendly container — always rendered but invisible under skeleton */}
                <div
                    ref={containerRef}
                    className="w-full h-full"
                    style={{ position: 'absolute', inset: 0 }}
                />
            </div>
        </div>
    )
}
