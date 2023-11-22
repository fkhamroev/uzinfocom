import "./App.css";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { News } from "./Components/News/News";
import { Gallery } from "./Components/Gallery/Gallery";
import { Events } from "./Components/Events/Events";
import { Companies } from "./Components/Companies/Companies";
import { SliderSwiper } from "./Components/SliderSwiper/SliderSwiper";
import { Footer } from "./Components/Footer/Footer";
import { Tab } from "./Components/Tab/Tab";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <SliderSwiper />
      <News />
      <Gallery />
      <Events />
      <Tab />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
