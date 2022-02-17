import { Route, Routes } from "react-router-dom";
import AboutUs from "./aboutUs";
import Cupcakes from "./cupcakes";
import Home from "./home";

const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="cupcakes" element={<Cupcakes />} />
    <Route path="nosotros" element={<AboutUs />} />
  </Routes>
);

export default Pages;
