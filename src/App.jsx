import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/sections/Gallery";
import Introduction from "./components/sections/Introduction";
import Mission from "./components/sections/Mission";
import Testimonials from "./components/sections/Testimonials";
import News from "./components/sections/News";
import Opportunity from "./components/sections/Opportunity";
import Learn_more from "./components/sections/Learn_more";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="bg-[#CBD7DB] h-auto min-h-screen w-full dark:bg-black dark:text-white">
      <Navbar />
      <Hero/>
      <Introduction/>
      <Gallery/>
      <Mission/>
      <Testimonials/>
      <News/>
      <Opportunity/>
      <Learn_more/>
      <Footer/>
    </div>
  );
}

export default App;
