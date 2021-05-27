//rafc tab...
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //esto para que la pagina no se refresque cada vez que escribo algo

        if (inputValue.trim().length > 2){
            setCategorias(cats => [ inputValue, ...cats]);
            setInputValue('');
        }

        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} //se dispara cada ve que la caja de texto cambie

            />
        </form>
    )
}
//el inputValue siempre va a ser el ultimo valor que yo escribo en la pag

AddCategory.prototype = {
    setCategorias: PropTypes.func.isRequired
} //para que los demas usen mi codigo...