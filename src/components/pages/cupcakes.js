import { useEffect, useState } from "react";
import Cupcake from "../cards/Cupcake";

const Cupcakes = () => {

  // se coloca por defecto el valor de vacio
  const [cupcakes,setCupcakes] = useState()

  //permite declarar una funcion y cuando se va ejecutar esta funcion de forma repetitiva con [] vacio se ejecuta una vez 
  useEffect(() =>{
    // se le dice a useEffect la primera vez que se carge la pagina cupcake conectate a la api y traeme todos los cupcake
  }, [])
  return (
    <div className="ed-grip">
    <h1>Página de cupcakes</h1>
    <section>
      <Cupcake />
    </section>
  </div>
  )
};

export default Cupcakes;
