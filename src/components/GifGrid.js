import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//el useEfect me va a permitir poder ejecutar cierto codigo de manera condicional
export const GifGrid = ({category}) => {

    const {data:imagenes, loading} = useFetchGifs(category);

//al data:iamgenes es como que le cambio el nombre de data por imagenes

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className ="animate__animated animate__flash">loading...</p>}

            <div className="card-grid">
            
                {
                    imagenes.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img }
                        />
                    ))
                }
        </div> 
        </>
    )
}


//Los custom Hooks son para extraer logica de algun componente
//de manera que sea sencillo utilizarla nuevamente

//el ? es si hace esto... y el : es caso contrario al ?