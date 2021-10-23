
const arr = [0,1,2,3]
arr.push (5)

const arr2 = [...arr ]
arr2.push(6)

const arr3 = arr2.map((n) => {
    return n *2
})
arr3.push(14)

console.log(arr);
console.log(arr2);
console.log(arr3);