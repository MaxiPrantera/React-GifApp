import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    console.log(id, title, url);

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
//animate.css de ahi saco todos los efectos para las imagenes