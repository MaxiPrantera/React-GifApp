import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(['MortalKombat']);

    //const handleAdd = () =>{

     //   setCategorias([...categorias, 'MortalKombat']);

        //setCategorias( cats => [...cats, 'MortalKombat']); de otra manera

        //uso el setCategorias para cambiar las propiedades
        //y el ...categorias para mantener las categorias anteriores
        //y agregar una nueva
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr/>

            

            <ol>
                { 
                    categorias.map(category =>
                        <GifGrid 
                        key={category}
                        category = {category}/>)
                }
            </ol>
        </>
    )
}
//el profe dejó dos enlaces para leer sobre react(69)
//el map me va a servir para tranformar cada uno de los elementos
//que estan dentro de su arreglo