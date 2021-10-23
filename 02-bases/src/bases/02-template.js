const nombre = 'jesus'
const apellido = 'Rico'

const nombreCompleto = nombre + apellido

console.log('Mi nombre y apellido son : ' + nombre + apellido );
console.log('Mi nombre completo es: ' + nombreCompleto);
console.log(`Mi nombes es ${nombre} ${apellido}`);

getSaludo= (nombre) => {
    return 'Hola ' + nombre
}

console.log(`Es es un texto : ${getSaludo(nombre)}`);