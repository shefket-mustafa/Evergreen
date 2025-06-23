import { Route, Routes } from "react-router";
import ScrollOnTop from "./helpers/ScrollOnTop";
import Footer from "./components/Footer";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Nav from "./components/Nav";
import Services from "./pages/Services";
import ServiceItemDetails from "./components/ServiceItemDetails";
import { useState } from "react";

interface ItemDetailsProps  {
  id: string;
  backgroundImg: string;
  serviceTitle: string;
  serviceDescription: string;
  priceRange: string;
}


function App() {

  const [itemDetails, setItemDetails] = useState<ItemDetailsProps | null>(null);

  const itemDetailsHandler = (data: ItemDetailsProps) => {
    setItemDetails(data);
  };
  return (
    <>
      <ScrollOnTop />
      <Nav />
    <Routes>
      <Route path='/' element={<Hero />} /> 
      <Route path='/services' element={<Services detailsHandler={itemDetailsHandler}/>} /> 
      <Route path='/about' element={<About />} /> 
      <Route path='/services/:id/details' element={ itemDetails ? <ServiceItemDetails {...itemDetails}/> : <div>Loading...</div>} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
