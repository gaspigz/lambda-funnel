import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        q: "¿Esto es un software genérico?",
        a: "No. Se diseña en base a tu operación real. Si tu negocio es distinto, el sistema también."
    },
    {
        q: "¿Cuánto tarda?",
        a: "Depende del alcance. En la llamada definimos la primera versión (lo mínimo que te ordena el día) y el plan de crecimiento."
    },
    {
        q: "¿Necesito cambiar todo mi negocio?",
        a: "No. El objetivo es ordenar sin fricción: lo implementamos por etapas."
    },
    {
        q: "¿Qué pasa después de entregar?",
        a: "Podés mantenerlo con soporte mensual o por horas. Lo importante: que funcione en el mundo real."
    }
]

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Preguntas frecuentes</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                            >
                                <span className="font-semibold text-lg">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/10">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
