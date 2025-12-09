import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesCategories from "@/components/ServicesCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <ServicesCategories />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
