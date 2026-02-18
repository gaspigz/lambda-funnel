import { motion } from 'framer-motion'
import { AlertCircle, Ban, Clock, Layers, MessageSquare, Wallet } from 'lucide-react'

const pains = [
    {
        icon: MessageSquare,
        text: "Se te pierden mensajes y clientes en WhatsApp"
    },
    {
        icon: Clock,
        text: "Tenés turnos anotados en cuaderno o en un Excel que nadie entiende"
    },
    {
        icon: Ban,
        text: "Cancelaciones de último minuto y horarios mal coordinados"
    },
    {
        icon: Wallet,
        text: "Cobros, señas y estados de pago desordenados"
    },
    {
        icon: AlertCircle,
        text: "Dependés de vos para todo: si no respondés, el negocio se frena"
    }
]

export const PainPoints = () => {
    return (
        <section id="dolores" className="py-24 px-6 md:px-12 bg-[#0d131f]">
            <div className="w-full mx-auto">
                <div className="mb-16 w-full">
                    <h2 className="text-4xl font-bold mb-6 text-center">
                        El caos operativo no es “parte del negocio”. <br /> <span className="text-red-400">Es un problema caro.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pains.map((pain, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors group"
                        >
                            <pain.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
                            <p className="text-lg text-white/90 leading-relaxed">
                                {pain.text}
                            </p>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-accent/10 border border-accent/20 flex flex-col justify-center items-center text-center"
                    >
                        <p className="text-xl font-semibold mb-2">Si marcaste 2 o más...</p>
                        <p className="text-white/70 mb-6">No necesitás “más ganas”. Necesitás un sistema.</p>
                        <Layers className="w-12 h-12 text-accent opacity-50" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
