import cloudinaryImage from '@/api/cloudinaryImage'

const uploadImage = async ( file ) => {
    if ( !file ) return
    try {
        const formData = new FormData()
        formData.append( 'upload_preset' , 'vue-fh' )
        formData.append( 'file' , file )
        const { data } = await cloudinaryImage.post( cloudinaryImage.baseURL , formData )
        console.log( data )
        return data.secure_url
    } catch ( e ) {
        console.error( 'Error al cargar la Imagen' , e )
        return null
    }
}

export default uploadImage