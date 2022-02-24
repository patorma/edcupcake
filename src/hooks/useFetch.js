import { useEffect, useState } from "react"
import {get} from "axios"
const useFetch = (endpoint) =>{
    const [data, setData] = useState()
    //manejo de errores
    const [error, setError] = useState()

    useEffect(() => {
        // se le dice a useEffect la primera vez que se carge la pagina cupcake conectate a la api y traeme todos los cupcake
          get(`${process.env.REACT_APP_URL_API}${endpoint}`)
          .then(({data}) => setData(data))
          .catch(err => setError(err))// se guarda en error el valor
      }, [endpoint]);

      return [data,error];
}

export default useFetch;