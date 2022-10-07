import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"
import Navigation from "./Components/Navigation/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


    </div>
  );
}

export default App;
