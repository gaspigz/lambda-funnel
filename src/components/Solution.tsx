import { motion } from 'framer-motion'
import { Calendar, Users, Zap, LayoutDashboard } from 'lucide-react'

const cards = [
    {
        title: "Turnos / Reservas",
        icon: Calendar,
        items: ["Agenda online", "Confirmaciones", "Reprogramaciones"]
    },
    {
        title: "Clientes",
        icon: Users,
        items: ["Fichas", "Historial", "Notas internas"]
    },
    {
        title: "Automatizaciones",
        icon: Zap,
        items: ["Recordatorios", "Mensajes post-visita", "Alertas internas"]
    },
    {
        title: "Panel de control",
        icon: LayoutDashboard,
        items: ["Estado del día", "Pendientes", "Métricas básicas"]
    }
]

export const Solution = () => {
    return (
        <section id="solucion" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Un sistema simple que trabaja por vos.</h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Diseñamos e implementamos una plataforma a medida para que turnos, clientes y comunicación dejen de depender de tu memoria y tu WhatsApp.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all"
                        >
                            <card.icon className="w-10 h-10 text-accent mb-6" />
                            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                            <ul className="space-y-3">
                                {card.items.map((item, j) => (
                                    <li key={j} className="text-white/50 text-sm flex items-center gap-2">
                                        <div className="w-1 h-1 bg-accent rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-white/40 italic">No es un “software genérico”. Es tu operación, digitalizada.</p>
                </div>
            </div>
        </section>
    )
}
