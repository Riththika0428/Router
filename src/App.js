import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Home from "./pages/home"
import "./assets/css/animate.css"
import "./assets/css/flex-slider.css"
import "./assets/css/fontawesome.css"
import "./assets/css/owl.css"
import "./assets/css/templatemo-tale-seo-agency.css"
import { Routes,Route } from 'react-router-dom';
import About from './pages/aboutus'
import Faq from './pages/faq'
import Contact from "./pages/contact"
import Footer from "./components/footer";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
