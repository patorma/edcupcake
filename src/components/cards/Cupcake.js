import {number,string} from 'prop-types'

const Cupcake = ({ descripcion, imagen, sabor, color, precio }) => {
  //se retorna la estructura de nuestro cupcake
  return (
  
    <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
      <img src={imagen} alt={sabor} className="imagen" />

      <p>{descripcion}</p>

      <span className="s-pxy-2">Color: {color}</span>
      <span className="s-pxy-2">Precio: {precio}</span>
      </div>
    
  );
};

Cupcake.propTypes = {
  precio: number,
  color: string.isRequired,
  descripcion: string.isRequired,
  sabor: string.isRequired,
  imagen: string
}

Cupcake.defaultProps = {
  imagen: "https://c8.alamy.com/compes/2hgegk2/ilustracion-vectorial-de-cupcake-blanco-y-negro-con-cereza-en-la-parte-superior-diseno-para-colorear-libro-2hgegk2.jpg",
  precio: 0
}
export default Cupcake;
