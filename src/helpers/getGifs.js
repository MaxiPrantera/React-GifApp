export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (category) }&limit=10&api_key=Sz6sun8FViGaY1dQgow5VIJ0BfEaEMKo`;
    const resp = await fetch(url);
    const {data} = await resp.json();
//el encodeURL saca los espacios
    const gifs = data.map(img => {
        return{
            //retorno un nuevo objeto con la info que a mi me interesa
            //en esta caso el id
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}