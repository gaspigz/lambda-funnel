import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export const SuccessVideo = () => {

    return (
        <div className="pt-24 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-12"
            >
                <div className="inline-flex items-center gap-2 bg-terminal/10 border border-terminal/20 text-terminal px-4 py-2 rounded-full text-sm font-medium mb-8">
                    <CheckCircle2 className="w-4 h-4" />
                    ¡Reserva confirmada!
                </div>

                <h2 className="text-4xl font-bold mb-6">Antes de la llamada, mirá esto (90 segundos).</h2>

                <div className="aspect-video w-full bg-black rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl mb-12">
                    {/* Video Placeholder */}
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                        title="Lambda Works Intro"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl text-left space-y-6">
                    <h3 className="text-2xl font-bold text-accent">Gracias por agendar. Soy Gaspar, fundador de Lambda Works.</h3>
                    <div className="space-y-4 text-white/70 leading-relaxed">
                        <p>
                            Esta llamada no es para venderte a presión. Es para entender tu operación y decirte con honestidad si un sistema tiene sentido para vos.
                        </p>
                        <p>
                            Si avanzamos, la idea es simple: sacar tu negocio del WhatsApp y del Excel y llevarlo a un flujo claro, donde los turnos, los clientes y los recordatorios trabajen solos.
                        </p>
                        <p className="font-semibold text-white">
                            Para aprovechar la llamada, traé 2 ejemplos concretos de tu caos: cancelaciones, mensajes perdidos o cobros desordenados. Nos vemos.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
