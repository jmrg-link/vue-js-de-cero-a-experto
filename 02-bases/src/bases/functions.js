const nombre = 'Jesus'
const apellido = 'Rico'
const edad = 37
const itsLive = true
const heroes = [
    {
        id:1,
        hero:'Batman',
        poder:true
    },
    {
        id:2,
        hero:'Superman',
        poder:true
    },
    {
        id:3,
        hero:'Wonderwoman',
        poder:true
    }
]

function saludar(nombre) {
    return nombre
}

const miApellido = function (apellido) {
    return apellido
}

const miEdad = () => {
    return edad
}

const vida = () => itsLive 

const getUser = () => {
    return {
        uuid: 'abc123',
        username: 'jesus'
    }
}

const existSome = heroes.some((e) => e.id === 1)
const { hero } = heroes.find((e) => e.id === 1)

console.log(saludar(nombre));
console.log(miApellido(apellido));
console.log(miEdad(edad));
console.log(vida(itsLive));
console.log(getUser());
console.log(existSome)
console.log(hero)
