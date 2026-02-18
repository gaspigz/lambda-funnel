import { motion } from 'framer-motion'

const steps = [
    {
        title: "Diagnóstico (30 min)",
        desc: "Entendemos tu operación y definimos qué te está costando tiempo y dinero."
    },
    {
        title: "Sprint Zero (setup serio)",
        desc: "Dejamos lista la base: estructura, seguridad y despliegue. Sin improvisación."
    },
    {
        title: "Implementación por entregas",
        desc: "Avances visibles y testeables. Si no se puede probar, no cuenta como hecho."
    },
    {
        title: "Puesta en marcha y soporte",
        desc: "Te acompañamos en el uso real para que el sistema se adopte, no quede “tirado”."
    }
]

export const Process = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-accent/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center">Lean & Robust: rápido, pero bien hecho.</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative"
                        >
                            <div className="text-5xl font-black text-accent/20 mb-4">{i + 1}</div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {step.desc}
                            </p>
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-6 -right-6 w-12 h-px bg-accent/20" />
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-3xl border border-white/10 bg-white/5 text-center">
                    <p className="text-white/80">
                        <strong>Transparencia total:</strong> alcance, tiempos y prioridades claras desde el día 1.
                    </p>
                </div>
            </div>
        </section>
    )
}
