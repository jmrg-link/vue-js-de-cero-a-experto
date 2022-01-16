import cloudinary from 'cloudinary'
import uploadImage from '@/modules/daybook/helpers/uploadImage'
import axios from 'axios'

cloudinary.config({
    cloud_name:'dqhfairbx',
    api_key:458837274886781,
    api_secret:'zYaSWDHhm5CZkmEisABb9URybN0'
})

describe('Pruebas en el uploadImage', () => {
    test('debe e cargar un archivo y retornar el url', async ( done ) => {
    const { data } = await axios.get('https://res.cloudinary.com/dqhfairbx/image/upload/v1639051499/sample.jpg',{
        responseType: 'arraybuffer'
    })
    const file = new File ([data], 'foto.jpg')
    const url = await uploadImage(file)
    expect(typeof url ).toBe('string')

    // Tomar el :ID
    // console.log(url)
    const segm = url.split('/')
    const imgId = segm[segm.length -1].replace('.jpg' || '.png' || '.jpeg',"")
    console.log({imgId})
        cloudinary.v2.api.delete_resources( imgId, {}, ()=>{
            done()
        })
    })
})

