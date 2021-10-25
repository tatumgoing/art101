/**
 * Author:    Tatum Going
 * Created:   10.25.2021
 *
 * License: Public Domain.
 **/
var name= window.prompt("May I have your name?");

 function sortUser(name){
   var userName= name;
   console.log("userName =", userName);
   //split string into array
   var nameArray= userName.split('');
   console.log("nameArray =", nameArray);
   //sort array
   var nameArraySort= nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   //array to string
   var nameSorted= nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   return nameSorted;
 }

document.writeln("Your name is mine! Here's a new one for you:", sortUser(name), "</br>");
