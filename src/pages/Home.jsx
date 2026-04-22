import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Competencies from '../components/Competencies'
import Manifesto from '../components/Manifesto'
import Projects from '../components/Projects'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import Affiliations from '../components/Affiliations'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // Small timeout to ensure components are mounted
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <Hero />
      <Ticker />
      <Competencies />
      <Manifesto />
      <Projects />
      <Stats />
      <Affiliations />
      <Contact />
    </>
  )
}

export default Home
