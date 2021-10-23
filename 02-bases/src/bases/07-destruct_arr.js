const dbz = ['Goku','Vegeta','Trunks','Krilin',]

const [ g ,  ,  , k , goten= 'no tiene valor' ] = dbz

console.log( goten );

const returnArray = ([letras, numeros]) => {
    return [letras, numeros]
}

const [letras , numeros] = returnArray(['abz',123])

console.log(letras , numeros);