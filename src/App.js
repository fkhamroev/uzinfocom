import "./App.css";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
// import { HeaderSlider } from "./Components/HeaderSlider/HeaderSlider";
import { News } from "./Components/News/News";
import { Gallery } from "./Components/Gallery/Gallery";
import { Events } from "./Components/Events/Events";
import { Companies } from "./Components/Companies/Companies";
import { SliderSwiper } from "./Components/SliderSwiper/SliderSwiper";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <SliderSwiper />
      <News />
      <Gallery />
      <Events />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
