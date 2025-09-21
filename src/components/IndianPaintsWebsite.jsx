"use client"

import { useRef } from "react"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Products from "./components/Products"
import Network from "./components/Network"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function IndianPaintsWebsite() {
  // Optional: Use ref to scroll to sections from navbar
  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    products: useRef(null),
    network: useRef(null),
    contact: useRef(null),
  }

  function scrollToSection(section) {
    sectionsRef[section]?.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />

      <main className="pt-16">
        <section ref={sectionsRef.home} id="home" className="h-screen flex items-center justify-center bg-primary text-white text-5xl font-bold">
          Welcome to Indian Paints
        </section>

        <div ref={sectionsRef.about}>
          <About />
        </div>

        <div ref={sectionsRef.products}>
          <Products />
        </div>

        <div ref={sectionsRef.network}>
          <Network />
        </div>

        <div ref={sectionsRef.contact}>
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  )
}
