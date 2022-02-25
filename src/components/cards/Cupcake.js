import PropTypes from 'prop-types'

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
  precio: PropTypes.number,
  color: PropTypes.string,
  descripcion: PropTypes.string,
  sabor: PropTypes.string,
  imagen: PropTypes.string
}
export default Cupcake;
