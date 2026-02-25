import { motion } from 'framer-motion'
import { AlertCircle, Ban, Clock, MessageSquare, Wallet, ArrowRight } from 'lucide-react'

const pains = [
    {
        icon: MessageSquare,
        title: "Mensajes que se pierden",
        text: "Clientes que escriben y no obtienen respuesta. Ventas que se van sin que te des cuenta."
    },
    {
        icon: Clock,
        title: "Turnos en cuaderno o Excel",
        text: "Sistema frágil que colapsa con cualquier cambio o ausencia."
    },
    {
        icon: Ban,
        title: "Cancelaciones sin aviso",
        text: "Huecos en la agenda que no pudiste volver a vender. Plata que se fue."
    },
    {
        icon: Wallet,
        title: "Cobros desordenados",
        text: "Señas que no recordás, pagos que perseguís, estados que no están en ningún lado."
    },
    {
        icon: AlertCircle,
        title: "Todo depende de vos",
        text: "Si no estás, el negocio se frena. No hay sistema. Hay presencia constante."
    }
]

const scrollToCalendly = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
}

export const PainPoints = () => {
    return (
        <section id="dolores" className="py-24 px-6 md:px-12 bg-[#0d131f]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-14 max-w-[640px]">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3"
                    >
                        El costo real del caos
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold leading-tight"
                    >
                        El caos no es "parte del negocio".<br />
                        <span className="text-red-400">Es plata que se pierde.</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {pains.map((pain, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-400/20 transition-colors group"
                        >
                            <pain.icon className="w-7 h-7 text-red-400/70 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-semibold text-white mb-2">{pain.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed">{pain.text}</p>
                        </motion.div>
                    ))}

                    {/* CTA card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-accent/10 border border-accent/20 flex flex-col justify-center items-start"
                    >
                        <p className="text-lg font-semibold mb-2">¿Te identificás?</p>
                        <p className="text-white/60 text-sm mb-6 leading-relaxed">No necesitás "más ganas".<br />Necesitás un sistema.</p>
                        <a
                            href="#diagnostico"
                            onClick={scrollToCalendly}
                            className="inline-flex items-center gap-2 px-5 py-3 bg-accent hover:bg-accent/90 rounded-full font-semibold text-sm transition-all group min-h-[44px]"
                        >
                            Quiero ordenar mi negocio
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
