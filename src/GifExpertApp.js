import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    /* const categories = ['One Puch', 'Samurai X', 'Dragon Ball']; */

    const [categories, setCategories] = useState(['One Punch']);

    /* con add button
        const handleAdd = (item) => {
        if( !categories.includes(item) ) {
            setCategories([...categories, item]);
            console.log('added!');

            
            setCategories( cats => [...cats, item] );
            
        } else {
            console.log('ya existe!');
        }
    } */

    return ( 
        <>
            <h2>GifExpertApp</h2>

            <AddCategory 
                /* categories={categories} */
                setCategories={setCategories}
            />
            
            <hr />

            {/* <button onClick={e => handleAdd(e)} >Add</button> */}
            {/* forma simple */}
            {/* <button onClick={() => handleAdd('Full Metal Alchemist')} >Add</button> */}
            
            
            {/* <li key={ category }>{category}</li> */}
            {
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                ))
            }
        </>
    );
}
 
export default GifExpertApp;