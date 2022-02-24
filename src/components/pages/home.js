import Banner from "../sections/Banner";
import Servicios from "../sections/Servicios";
import Cupcakes from "./cupcakes";

const Home = () => (
  <>
  <Banner />
  <Cupcakes peticion="cupcakes?sabor_like=fresa"/>
  <Servicios peticion="servicios"/>
  
  </>
);

export default Home;
