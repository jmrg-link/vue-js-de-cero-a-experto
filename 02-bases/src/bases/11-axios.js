import axios from 'axios'

const apiKey  = 'NMNTG1CQqPFfZe6LyU5kHtpBgCXA9Xe3hgQDS91KLZxv53'
const url     = 'https://api.giphy.com/v1/gifs'


const giphyApi = axios.create({
    baseURL:url,
    params: {
        apiKey,
    }
})

export default giphyApi

//giphyApi.get('/random')
//    .then(resp => {
//        //console.log(resp.data.data.images.original.url);
//        const {data} = resp.data
//        const {url} = data.images.original
//        const img = document.createElement('img')
//        img.src = url
//        document.body.append(img)
//        //const url = resp.data.data.images.original.url
//        //
//        //const img = document.createElement('img')
//        //img.src = url
//        //
//        //document.body.append(img)
//        
//    })