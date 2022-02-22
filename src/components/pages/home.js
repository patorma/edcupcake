import Banner from "../sections/Banner";
import Cupcakes from "./cupcakes";

const Home = () => (
  <>
  <Banner />
  <Cupcakes peticion="cupcakes?sabor_like=fresa"/></>
);

export default Home;
