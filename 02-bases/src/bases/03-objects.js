const persona = {
    nombre:'Tony',
    apellidos: 'Stark',
    edad:45,
    direccion: {
        ciudad:'NY',
        zip:523123,
        lat:14.3232,
        lng:34.456842
    }
}

const persona2 = {...persona}
persona2.nombre = 'peter'


console.log(persona);
console.log(persona2);