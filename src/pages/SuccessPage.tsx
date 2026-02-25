import { SuccessVideo } from '../components/SuccessVideo'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export const SuccessPage = () => {
    return (
        <div className="min-h-screen bg-background selection:bg-accent/30">
            <nav className="fixed top-0 w-full z-40 py-5 px-10 flex justify-between items-center backdrop-blur-sm">
                <Link to="/" className="text-xl font-bold tracking-tighter">LAMBDA<span className="text-accent">WORKS</span></Link>
                <Link
                    to="/"
                    className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                </Link>
            </nav>

            <main className="flex flex-col items-center justify-center min-h-[90vh]">
                <SuccessVideo />
            </main>

            <footer className="py-12 border-t border-white/10 px-6 md:px-12 opacity-50 text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
                    <div>© {new Date().getFullYear()} Lambda Works. Lean & Robust.</div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
