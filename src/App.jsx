import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIAssistant from './components/AIAssistant'
import { ThemeProvider } from './context/ThemeContext'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const Archive = lazy(() => import('./pages/Archive'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))

const PageFallback = () => (
  <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
)

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
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
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <AIAssistant />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
