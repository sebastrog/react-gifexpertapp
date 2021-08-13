import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* const AddCategory = ({ categories, setCategories }) => { */
/* como no hay referencia de categories, hacemos el callback de setcategories para obtenerlas */
const AddCategory = ({ setCategories }) => {

    /* el usestate es undefined si lo dejamos vacio. Entonces inputvalue es undefined y genera errores. */
    /* const [inputValue, setInputValue] = useState(  ); */
    /* por si si se necesita vacio */
    const [inputValue, setInputValue] = useState( '' );
    /* const [inputValue, setInputValue] = useState( 'Add Category' ); */

    const handleInputChange = ( e ) => setInputValue( e.target.value );
    
    const handleSubmit = ( e ) => {
        e.preventDefault();

        /* if( !categories.includes(inputValue) ) {
            setCategories([...categories, inputValue]);
        } */

        if( inputValue.trim().length > 1 ) setCategories( cats => [ inputValue, ...cats ]);
        setInputValue('');

    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}
 
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;