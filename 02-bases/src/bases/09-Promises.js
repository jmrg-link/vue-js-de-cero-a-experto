import  {getHeroById} from './bases/08-imp-exp'
//console.log('inicio');
//
//new Promise( (resolve,reject)  => {
//    console.log('cuerpo de la promesa');
//    reject('Promesa resuelta con error')
//    
//})
//.then ( console.log )
//.catch( console.log )
//
//
//console.log('fin');

const getHeroByIdAsync = (id) => {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            const hero = getHeroById(id)
            if (hero) {
                resolve
            } else {
                reject('Heroe no existe')
            }
            resolve(hero)
        },1000)
    })

}

getHeroByIdAsync(2)
    .then(h => console.log(`El Heroe es : ${h.name}`))
    .catch(console.log())
