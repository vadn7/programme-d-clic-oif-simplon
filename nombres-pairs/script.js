let numbers = [1,2,3,4,5,6,7,8, 9 , 10 , 11, 12 ,13, 14, 15, 16, 17 ,18, 19, 20]

let nombresPairs = [];

while(numbers.length !== 0)
{

let number = numbers.shift()

if(number%2 === 0)
nombresPairs.push(number)

}

alert(`Les nombres pairs allant de 1 a 20 sont ${nombresPairs}`)