import React, { useState, useEffect } from 'react';

import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    /* es como un didmount. get gifs se va a ejecutar una vez */
    useEffect(() => {
        getGifs( category )
            /* .then( imgs => setImages( imgs )) */
            /* forma simple */
            .then( setImages )
    }, [ category ]);
    /* category es la dependencia, useeffect lo pide por si la category cambia, volver a hacer el useffect */

    return (
        <>
            <h3>{ category }</h3>

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    );
}
 
export default GifGrid;