let firstName
let lastName = 'Rico'

console.log(`${ firstName || 'No fisrtName ' }  ${ lastName || 'No lastName '} `);

const isActive = false

let msg = (isActive) 
    ? 'Activo' 
    : 'Inactivo'


//if (isActive) {
//    msg  = 'Activo'
//}else{
//    msg = 'Inactivo'
//}
console.log(msg);