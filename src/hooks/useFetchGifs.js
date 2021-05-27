//TODOS LOS HOOKS EMPIEZAN CON use
//no son mas que funciones

import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    });

    
    useEffect(() => {
        //aca voy a traer las imagenes
        getGifs( category )
            .then(imgs => {
                setState({
                    data:imgs,
                    loading: false
                }); 
        })
    }, [category])
//le mando un arreglo de dependencias ([]) y el codigo se va a ejecutar solo una vez
//sin que se refresquen y carguen mas imagenes cada vez que apreto el boton

    return state; //es la info que se encuentra en useState
}
//los customs hooks funcionan como si fueran funcional components
