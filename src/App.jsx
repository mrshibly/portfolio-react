import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Archive from './pages/Archive'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'

import ProjectDetails from './pages/ProjectDetails'
import NotFound from './pages/NotFound'
import AIAssistant from './components/AIAssistant'
function App() {
  const [loading, setLoading] = useState(true)

  return (
    <Router>
      <div className="relative min-h-screen">
        {loading && <Loader onComplete={() => setLoading(false)} />}
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  )
}

export default App
