//================================================== task 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 == 0) {
    sum += numbers[index];
  }
}
console.log(sum);

//================================================== task 1
function myCompare(a,b){
    return (a==100)||(b==100)||(a+b==100)
}
console.log(myCompare(32,68))
console.log(myCompare(100,67))
console.log(myCompare(23,64))

// =================================================task 4
function myNumber(n,m){
  let c=100-n;
  let d=100-m;
  if (d>c)
  {
    return n +' Nearest'
  }
  else if(d<c)
  {
    return m +' Nearest'
  }
  else{
    return "draw"
  }
}
console.log(myNumber(61,78));