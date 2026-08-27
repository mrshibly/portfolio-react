import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Stats from '../components/Stats'
import Competencies from '../components/Competencies'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Leadership from '../components/Leadership'
import Education from '../components/Education'
import Manifesto from '../components/Manifesto'
import Contact from '../components/Contact'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
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
      <Stats />
      <Competencies />
      <Projects />
      <TechStack />
      <Experience />
      <Certifications />
      <Leadership />
      <Education />
      <Manifesto />
      <Contact />
    </>
  )
}

export default Home
