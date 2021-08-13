export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=OCHO8lvGSN8IGASKNVI9IPfV1hd4QJSp&q=${ encodeURI( category ) }&limit=10`;
    const resp = await fetch( url );
    /* const data = await resp.json(); */
    /* usemos desestructarion */
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            /* signo de interrogacion por si vienen imagenes o no */
            url: img.images?.downsized_medium.url
        }
    });

    /* setImages(gifs); */
    return gifs;
}