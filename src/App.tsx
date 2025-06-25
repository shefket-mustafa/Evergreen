import { Route, Routes } from "react-router";
import ScrollOnTop from "./helpers/ScrollOnTop";
import Footer from "./components/Footer";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Nav from "./components/Nav";
import Services from "./pages/Services";
import ServiceItemDetails from "./components/ServiceItemDetails";
import Contact from "./pages/Contacts";
import Treatments from "./pages/Treatments";

function App() {

  return (
    <>
      <ScrollOnTop />
      <Nav />
    <Routes>
      <Route path='/' element={<Hero />} /> 
      <Route path='/services' element={<Services />} /> 
      <Route path='/about' element={<About />} /> 
      <Route path='/contact' element={<Contact />} /> 
      <Route path='/treatments' element={<Treatments />} /> 
      <Route path='/services/:id/details' element={ <ServiceItemDetails /> } /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
