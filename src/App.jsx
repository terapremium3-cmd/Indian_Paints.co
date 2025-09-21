import { useCallback } from "react"
import Navbar from "./components/Navbar"
import SectionHome from "./components/SectionHome"
import SectionAbout from "./components/SectionAbout"
import SectionProducts from "./components/SectionProducts"
import SectionNetwork from "./components/SectionNetwork"
import SectionContact from "./components/SectionContact"
import Footer from "./components/Footer"
import ImageSlider from "./components/ImageSlider";
import PaintCardList from './components/PaintCardList';


function App() {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
  
      <h1 >Image Slider</h1>
      <ImageSlider />
      

      <Navbar scrollToSection={scrollToSection} />
      <SectionHome scrollToSection={scrollToSection} />
      <SectionAbout />
       <div className="App">
      <PaintCardList />
    </div>
      <SectionNetwork />
      <SectionContact />
      <Footer />
    </div>
  )
}

export default App;


