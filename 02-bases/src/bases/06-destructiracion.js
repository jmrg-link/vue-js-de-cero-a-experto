const people = {
    name : 'Jesus',
    age: 37,
    username: 'jmrg',
    power: 'perder el tiempo'
}

//console.log(name);
//console.log(age);
//console.log(username);
//console.log(power);

const createHero = ({ name , age , username , power='sin poder' }) => 
({ 
    id:123456789, 
    name, 
    age, 
    username, 
    power 
})


console.log(createHero(people))