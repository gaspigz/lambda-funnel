import { motion } from 'framer-motion'
import { Calendar, Users, Zap, LayoutDashboard, ArrowRight } from 'lucide-react'

const cards = [
    {
        title: "Turnos / Reservas",
        icon: Calendar,
        benefit: "Menos cancelaciones",
        items: ["Agenda online 24/7", "Confirmaciones automáticas", "Reprogramaciones sin vos"]
    },
    {
        title: "Clientes",
        icon: Users,
        benefit: "Menos mensajes perdidos",
        items: ["Fichas completas", "Historial de visitas", "Seguimiento automático"]
    },
    {
        title: "Automatizaciones",
        icon: Zap,
        benefit: "Más tiempo libre",
        items: ["Recordatorios", "Mensajes post-visita", "Alertas internas"]
    },
    {
        title: "Panel de control",
        icon: LayoutDashboard,
        benefit: "Más control diario",
        items: ["Estado del día", "Pendientes claros", "Métricas simples"]
    }
]

const scrollToCalendly = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
}

export const Solution = () => {
    return (
        <section id="solucion" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-14 max-w-[640px]">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accent text-sm font-semibold uppercase tracking-widest mb-3"
                    >
                        La solución
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold leading-tight"
                    >
                        Un sistema simple<br />
                        <span className="text-accent">que trabaja por vos.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-white/50 leading-relaxed max-w-[500px]"
                    >
                        No es un software genérico. Es tu operación, digitalizada.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-accent/20 transition-all group"
                        >
                            <card.icon className="w-9 h-9 text-accent mb-5 group-hover:scale-110 transition-transform" />
                            <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                                {card.benefit}
                            </div>
                            <h3 className="text-lg font-bold mb-4">{card.title}</h3>
                            <ul className="space-y-2">
                                {card.items.map((item, j) => (
                                    <li key={j} className="text-white/40 text-sm flex items-center gap-2">
                                        <div className="w-1 h-1 bg-accent rounded-full shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA after benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                    <a
                        href="#diagnostico"
                        onClick={scrollToCalendly}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 rounded-full font-semibold transition-all group min-h-[44px]"
                    >
                        Agendar diagnóstico gratuito
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-sm text-white/30 italic">Sin soluciones genéricas. Sin presión.</p>
                </motion.div>
            </div>
        </section>
    )
}
