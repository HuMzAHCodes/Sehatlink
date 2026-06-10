import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import Specialties from "./components/Specialties";
import Conditions from "./components/Conditions";
import Partners from "./components/Partners";
import NewsCarousel from "./components/NewsCarousel";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureCards />
      <Specialties />
      <Conditions />
      <Partners />
      <NewsCarousel />
      <Reviews />
    </div>
  );
}

export default App;
