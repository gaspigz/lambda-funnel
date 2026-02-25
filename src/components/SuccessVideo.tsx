import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Users, Target } from 'lucide-react'

const whatToExpect = [
    { icon: Target, text: 'Diagnóstico real de tu operación actual' },
    { icon: Clock, text: 'Qué automatizar primero para ganar tiempo' },
    { icon: Users, text: 'Plan concreto, sin vender humo' },
]

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

                <h2 className="text-4xl font-bold mb-2">Qué esperar de la llamada</h2>
                <p className="text-white/50 mb-10 text-lg">90 segundos que vale la pena mirar antes de que nos veamos.</p>

                {/* 3 bullets before video */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    {whatToExpect.map(({ icon: Icon, text }, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-left">
                            <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                                <Icon className="w-4 h-4 text-accent" />
                            </div>
                            <span className="text-sm text-white/70">{text}</span>
                        </div>
                    ))}
                </div>

                {/* Video thumbnail */}
                <div className="aspect-video w-full bg-black rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl mb-12 group cursor-pointer">
                    {/* Thumbnail overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background/80 to-background/95 z-10 flex flex-col items-center justify-center gap-4 group-hover:from-accent/15 transition-all">
                        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-[16px] border-l-white ml-1" />
                        </div>
                        <p className="text-white/60 text-sm">Ver en YouTube</p>
                    </div>
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                        title="Lambda Works - Qué esperar de la llamada"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl text-left space-y-6">
                    <h3 className="text-2xl font-bold text-accent">Gracias por agendar. Soy Gaspar, fundador de Lambda Works.</h3>
                    <div className="space-y-4 text-white/70 leading-relaxed">
                        <p>
                            Esta llamada no es para venderte a presión. Es para entender tu operación y decirte con honestidad si un sistema tiene sentido para vos.
                        </p>
                        <p>
                            Si avanzamos: sacamos tu negocio del WhatsApp y del Excel y lo llevamos a un flujo claro. Turnos, clientes y recordatorios que trabajan solos.
                        </p>
                        <p className="font-semibold text-white">
                            Para aprovechar la llamada, traé 2 ejemplos concretos de tu caos: cancelaciones, mensajes perdidos o cobros desordenados.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
