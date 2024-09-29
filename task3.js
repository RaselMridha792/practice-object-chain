const instructor = [
    {
        name: 'nodi',
        age: 28,
        position: 'senior'
    },
    {
        name: 'akil',
        age: 26,
        position: 'junior'
    },
    {
        name: 'shobuj',
        age: 30,
        position: 'senior'
    }
]

// find the senior person of an array object 
// const result = instructor.filter(x =>(x.position === 'senior'))
// console.log(result);


// sum of age from an array object 
let sumOfAge = 0;
for(ageSum of instructor){
    const ages = ageSum.age;
    sumOfAge += ages;
}
console.log(sumOfAge);