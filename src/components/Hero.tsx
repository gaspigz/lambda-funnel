import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const scrollToCalendly = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
}

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Trust badge */}
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 px-4 py-2 rounded-full text-xs font-medium mb-6">
                        <span className="w-1.5 h-1.5 bg-terminal rounded-full animate-pulse" />
                        Trabajo 1 a 1 · Sin plantillas genéricas
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 max-w-[640px]">
                        Dejá de ser la secretaria de tu{' '}
                        <span className="text-accent">propio negocio.</span>
                    </h1>

                    <p className="text-lg text-white/60 mb-8 max-w-[540px] leading-relaxed">
                        Armamos el sistema que ordena tus turnos, clientes y comunicación.
                        Para que el negocio funcione <strong className="text-white/80">sin depender de vos.</strong>
                    </p>

                    <ul className="space-y-3 mb-10 max-w-[480px]">
                        {[
                            'Menos cancelaciones. Menos mensajes perdidos.',
                            'Más control diario. Menos dependencia de vos.',
                            'Tu operación ordenada en un solo lugar.',
                        ].map((bullet, i) => (
                            <li key={i} className="flex items-center gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <a
                            href="#diagnostico"
                            onClick={scrollToCalendly}
                            className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent/90 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group min-h-[44px]"
                        >
                            Agendar diagnóstico gratuito
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#solucion"
                            className="text-white/50 hover:text-white transition-colors text-sm border-b border-transparent hover:border-white/20 pb-0.5 min-h-[44px] flex items-center"
                        >
                            Ver si aplica a mi caso →
                        </a>
                    </div>

                    <p className="mt-5 text-xs text-white/30 italic">
                        30 min · Sin presión · Si no aplica, te lo decimos.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative perspective-1000"
                >
                    {/* Main Card Container with 3D Tilt */}
                    <motion.div
                        whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative z-10 aspect-video bg-gradient-to-br from-white/15 to-white/5 rounded-[2rem] border border-white/20 backdrop-blur-md p-8 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group"
                    >
                        {/* Terminal Header */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                            </div>
                            <div className="text-[10px] text-white/30 uppercase tracking-widest font-mono ml-4">lambda_engine_v1.0.4</div>
                        </div>

                        {/* Content Area */}
                        <div className="mt-12 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="space-y-3">
                                    <div className="h-6 w-48 bg-white/10 rounded-lg animate-pulse" />
                                    <div className="h-4 w-32 bg-white/5 rounded-lg" />
                                </div>
                                <div className="h-10 w-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                                    <div className="w-5 h-5 bg-accent rounded-full animate-ping" />
                                </div>
                            </div>

                            {/* Simulated Grid/Graph */}
                            <div className="grid grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-end p-3 gap-2">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${20 + i * 15}%` }}
                                            transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                                            className="w-full bg-gradient-to-t from-accent/40 to-accent rounded-t-md"
                                        />
                                        <div className="h-1.5 w-full bg-white/10 rounded-full" />
                                    </div>
                                ))}
                            </div>

                            <div className="h-24 w-full bg-white/5 rounded-2xl border border-white/5 p-4 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-terminal/20 flex items-center justify-center text-terminal">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                                    </motion.div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-3 w-32 bg-white/20 rounded-full" />
                                    <div className="h-2 w-24 bg-white/10 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Secondary Floating Card: Booking */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute -top-12 -left-12 z-20 w-56 p-4 bg-background/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl hidden md:block"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                                <p className="text-[10px] text-white/40 uppercase font-semibold">Nuevo Turno</p>
                                <p className="text-sm font-medium">Corte + Barba</p>
                            </div>
                        </div>
                        <div className="text-xs text-white/60">Confirmado automáticamente</div>
                    </motion.div>

                    {/* Floating Badge: Automation */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -right-6 z-20 bg-terminal text-black px-4 py-2 rounded-full font-mono text-xs font-bold shadow-lg flex items-center gap-2"
                    >
                        <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                        AUTOMATION_ACTIVE
                    </motion.div>

                    {/* Decorative Blur Glows */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-terminal/5 blur-[100px] rounded-full pointer-events-none" />
                </motion.div>
            </div>
        </section>
    )
}
