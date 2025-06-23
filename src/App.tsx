import { Route, Routes } from "react-router";
import ScrollOnTop from "./helpers/ScrollOnTop";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <ScrollOnTop />
      <Nav />
    <Routes>
      <Route path='/' element={<Hero />} /> 
      <Route path='/services' element={<Services />} /> 
      <Route path='/about' element={<About />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
