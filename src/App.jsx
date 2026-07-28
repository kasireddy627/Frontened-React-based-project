import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/WhyChooseUs";
import Enroll from "./components/Enroll";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Enroll />
      <FAQ />
      <Footer />
      <FloatingWhatsapp />
      <ScrollTop />
    </>
  );
}

export default App;