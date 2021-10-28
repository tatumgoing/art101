/**
 * Author:    Tatum Going
 * Created:   10.25.2021
 *
 * License: Public Domain.
 **/
 myArray= [5,10,16,20,25,30];
 console.log("MyArray: ", myArray);
  //feclare function
 function doubleArray(x){
 var results = x*2;
 return results;
 }
//test function
 console.log("Double 12:", doubleArray(12));
 console.log("Double 15", doubleArray(15));

 var result= myArray.map(doubleArray);

 console.log("Test of doubling Array: ", result);

 var result2= myArray.map(function tripleArray(x){
 var results= x*3;
 return results;
             })
//should return trippled arrays
console.log("Test of tripling Array: ", result2);

var outputEl = document.getElementById("output");
outputEl.innerHTML = result;
