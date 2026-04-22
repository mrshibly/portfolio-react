import React, { useState, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import AIAssistant from './components/AIAssistant'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const Archive = lazy(() => import('./pages/Archive'))
const Admin = lazy(() => import('./pages/Admin'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))

const PageFallback = () => (
  <div className="min-h-screen bg-obsidian flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-electric border-t-transparent rounded-full animate-spin" />
  </div>
)

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageTransition}>
        <Suspense fallback={<PageFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <Router>
      <div className="relative min-h-screen">
        {loading && <Loader onComplete={() => setLoading(false)} />}
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  )
}

export default App
