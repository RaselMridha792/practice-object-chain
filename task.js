// task-1: convert an odd number array into a even number array using for loop and Map()

const numbers = [1, 3, 5, 7, 9];
const evenNumber = [];
for(number of numbers){
    number +=1;
    evenNumber.push(number);
}
console.log(evenNumber);


// using Map()
const evenNumber2 = [];
const even = numbers.map(x =>{
    x+=1;
    evenNumber2.push(x);
})
console.log(evenNumber2);