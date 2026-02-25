import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const steps = [
    {
        title: "Diagnóstico (30 min)",
        desc: "Entendemos tu operación. Te decimos qué te está costando tiempo y plata.",
        highlight: "Gratis. Sin compromiso."
    },
    {
        title: "Sprint Zero",
        desc: "Base sólida: estructura, seguridad y despliegue. Sin improvisación.",
        highlight: "Setup serio desde el día 1."
    },
    {
        title: "Implementación",
        desc: "Avances visibles y testeables. Si no se puede probar, no cuenta.",
        highlight: "Entregas reales, no promesas."
    },
    {
        title: "Puesta en marcha",
        desc: "Te acompañamos en el uso real para que el sistema se adopte, no quede tirado.",
        highlight: "Soporte incluido."
    }
]

const scrollToCalendly = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
}

export const Process = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-accent/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-14 max-w-[640px]">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accent text-sm font-semibold uppercase tracking-widest mb-3"
                    >
                        Cómo trabajamos
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold leading-tight"
                    >
                        Rápido.<br />
                        <span className="text-accent">Pero bien hecho.</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative"
                        >
                            <div className="text-5xl font-black text-accent/15 mb-4">{i + 1}</div>
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed mb-3">{step.desc}</p>
                            <p className="text-accent text-xs font-semibold">{step.highlight}</p>
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-6 -right-4 w-8 h-px bg-accent/20" />
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl border border-white/10 bg-white/[0.03] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <p className="text-white/80 font-semibold mb-1">Transparencia total:</p>
                        <p className="text-white/50 text-sm">Alcance, tiempos y prioridades claras desde el día 1. Sin sorpresas.</p>
                    </div>
                    <a
                        href="#diagnostico"
                        onClick={scrollToCalendly}
                        className="shrink-0 inline-flex items-center gap-2 px-7 py-3 bg-accent hover:bg-accent/90 rounded-full font-semibold text-sm transition-all group min-h-[44px]"
                    >
                        Agendar diagnóstico
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}
