const apiKey = 'NMNTG1CQqPFfZe6LyU5kHtpBgCXA9Xe3hgQDS91KLZxv53'
// https://media0.giphy.com/media/ftdU5sHcShoXH6eKZe/giphy.gif?cid=efb82a52fe2e44e7d107166dbc5b871e45a4160192044e82&rid=giphy.gif&ct=g

const uri = 'https://api.giphy.com/v1/gifs/random?api_key='
fetch( `${uri}${apiKey}` )
    //.then(resp => {
    //    resp.json().then(resp => console.log(resp))
    //})

    .then( resp => resp.json() )
    .then( ({data}) => {
        console.log(data)
        const { url } = data.images.original
        console.log(url);
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(e => console.log(e))