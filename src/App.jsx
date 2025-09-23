import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCallback } from "react";
import Navbar from "./components/NavBar";
import SectionHome from "./components/SectionHome";
import SectionAbout from "./components/SectionAbout";
import SectionProducts from "./components/SectionProducts";
import SectionNetwork from "./components/SectionNetwork";
import SectionContact from "./components/SectionContact";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import PaintCardList from "./components/PaintCardList";

import ProductDetail from "./Pages/ProductDetails";
import ProductDetails2 from "./Pages/ProductDetails2";


function App() {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home route with all your sections */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-background">
              <h1>Image Slider</h1>
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
          }
        />
        {/* Detail page */}
        <Route path="/product/:productId" element={<ProductDetail />} />
         <Route path="/product-details2/:productId" element={<ProductDetails2 />} />
      </Routes>
    </Router>
  );
}

export default App;
