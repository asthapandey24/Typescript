
const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2')as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

//const numResults: number[] = [];// its a shortcut way of defining array 
const numResults: Array<number> = []; // long form as array is generic type so here the val inside array is number
const textResults: string[] = [];

type  numOrstring = number|string
type Result = {val: number; timestamp: Date} // object type k liye use kar scate hai

interface Resultobj {
  val: number; 
  timestamp: Date
}
//function add(num1: number| string, num2: number | string){ (befor using type)
  function add(num1: numOrstring , num2: numOrstring){   // (after using type)
    if(typeof num1=== 'number' && typeof num2 === 'number'){
       return num1+num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
      return num1 + ''+ num2
    }
    else
{   
     return +num1 + +num2;
}
}
//console.log(add(1,6))
//console.log(add('1','6'))
//function printResult(resultobj: {val: number; timestamp: Date}){ // befor using type
  //function printResult(resultobj: Result){ // after using type
    function printResult(resultobj: Resultobj){ // AFTER USING INTERFACE
  console.log(resultobj.val)
}




buttonElement.addEventListener('click',() =>{
 const num1 = num1Element.value // this value returns string 
 const num2 = num2Element.value
 const result = add(+num1, +num2) // we are forced to write cleaner code as when we specifiy + then this takes as number otherwise its taking that as string
 numResults.push(result as number )
 const stringResult = add(num1, num2)
 textResults.push(stringResult as string)
// console.log(stringResult)
 //console.log(result)
 printResult({val: result as number, timestamp: new Date()})
})



//const myPromise = new Promise((resolve, reject) =>{ // without specifiying the type of resolve value 
  const myPromise = new Promise<string>((resolve, reject) =>{ // promise with generic

  setTimeout(() =>{
  resolve('It worked')
  }, 1000)
})

myPromise.then((result)=>{
console.log(result.split('w'))
}).catch((err)=>{
  console.log(err)
})











