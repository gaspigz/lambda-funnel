import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { SuccessPage } from './pages/SuccessPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-white selection:bg-accent/30 font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/success" element={<SuccessPage />} />
          {/* Fallback to landing */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
