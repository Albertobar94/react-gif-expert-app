
export const getGif = async (category) => {
        const url  = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=MZ3QtbwTABN5r7bp7oYc0x7lngj160Rh`;
        const resp = await fetch( url );
        const {data} = await resp.json();
        const gifs = data.map( data => {
                return {
                    id    : data.id,
                    title : data.title,
                    url   : data.images?.downsized_medium.url
                }
            }
        )
        return gifs;
    }