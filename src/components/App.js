import Header from "./sections/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/styles.scss";
import Pages from "./pages/Pages";


const App = () => (
  <Router>
    <Header />
      <Pages />
  </Router>
);

export default App;
