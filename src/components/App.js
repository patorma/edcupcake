import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcakes from "./pages/cupcakes";
import "../styles/styles.scss";

const App = () => (
  <>
    <Header />
    {window.location.pathname === "/" && <Home />}
    {window.location.pathname === "/cupcakes" && <Cupcakes />}
  </>
);

export default App;
