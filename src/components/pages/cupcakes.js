import { useEffect, useState } from "react";
import Cupcake from "../cards/Cupcake";

const Cupcakes = ({peticion,title}) => {
  // se coloca por defecto el valor de vacio
  const [cupcakes, setCupcakes] = useState();

  //permite declarar una funcion y cuando se va ejecutar esta funcion de forma repetitiva con [] vacio se ejecuta una vez
  useEffect(() => {
    // se le dice a useEffect la primera vez que se carge la pagina cupcake conectate a la api y traeme todos los cupcake
    fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
      .then((response) => response.json())
      .then((data) => setCupcakes(data))
      .catch(e => console.log(e))
  }, [peticion]);
  return (
    <div className="ed-grip">
      {title && <h1>Página de cupcakes</h1>}
      {cupcakes ? (
        <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
          {
            cupcakes.map(({
              id,
              descripcion,
              imagen,
              sabor,
              color,
              precio 
            })=> (
              <Cupcake 
                key ={id}
                imagen={imagen}
                descripcion={descripcion}
                sabor={sabor}
                color={color}
                precio={precio}
              />
            ))
          }
        </section>
      ) : (
        <span>Cargando...</span>
      )}
    </div>
  );
};

export default Cupcakes;
