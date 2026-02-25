import { motion } from 'framer-motion'
import { ArrowRight, X, Check } from 'lucide-react'

const examples = [
    {
        category: 'Gimnasio',
        before: [
            'Turnos por WhatsApp',
            'Cancelaciones sin registro',
            'Pagos manuales',
            'Dueño trabajando 12h/día',
        ],
        after: [
            'Agenda online 24/7',
            'Confirmaciones automáticas',
            'Recordatorios sin esfuerzo',
            'Panel claro y ordenado',
        ],
        accentColor: '#615FFF',
    },
    {
        category: 'Consultorio',
        before: [
            'Recepción saturada',
            'Mensajes fuera de horario',
            'Reprogramaciones manuales',
        ],
        after: [
            'Agenda autogestionada',
            'Recordatorios automáticos',
            'Mejor organización interna',
        ],
        accentColor: '#615FFF',
    },
    {
        category: 'Centro de Estética',
        before: [
            'Excel + papel',
            'Seguimiento manual',
            'Pérdida silenciosa de clientes',
        ],
        after: [
            'Sistema centralizado',
            'Historial de clientes',
            'Flujo ordenado y claro',
        ],
        accentColor: '#615FFF',
    },
]

const scrollToCalendly = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
}

export const Transformation = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#0a1120]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent text-sm font-semibold uppercase tracking-widest mb-3"
                    >
                        Transformación Real
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold leading-tight"
                    >
                        Antes y Después:<br />
                        <span className="text-accent">lo que cambia cuando hay sistema</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-white/50 max-w-lg mx-auto"
                    >
                        Sin prometer milagros. Solo estructura donde antes había caos.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {examples.map((example, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]"
                        >
                            {/* Header */}
                            <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span className="text-sm font-semibold uppercase tracking-widest text-white/60">{example.category}</span>
                            </div>

                            {/* Split layout */}
                            <div className="grid grid-cols-2 divide-x divide-white/10">
                                {/* ANTES */}
                                <div className="p-5 bg-red-950/20 relative overflow-hidden">
                                    <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">Antes</div>
                                    {/* Blur overlay for "chaos" feel */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-950/10 pointer-events-none" />
                                    <ul className="space-y-3 relative">
                                        {example.before.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-white/50">
                                                <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                                                <span className="blur-[0.4px]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* DESPUÉS */}
                                <div className="p-5 relative overflow-hidden">
                                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Después</div>
                                    {/* Glow for "system" feel */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
                                    {/* Dashboard-like dot decoration */}
                                    <div className="absolute top-3 right-3 w-16 h-16 bg-accent/10 rounded-full blur-2xl" />
                                    <ul className="space-y-3 relative">
                                        {example.after.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-white/90">
                                                <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA after section */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-14 text-center"
                >
                    <a
                        href="#diagnostico"
                        onClick={scrollToCalendly}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 rounded-full font-semibold transition-all group min-h-[44px]"
                    >
                        Ver si aplica a mi caso
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="mt-3 text-sm text-white/30">Si no aplica, te lo decimos. Sin rodeos.</p>
                </motion.div>
            </div>
        </section>
    )
}
