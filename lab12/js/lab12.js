/**
 * Author:    Tatum Going
 * Created:   11.8.2021
 *
 * License: Public Domain.
 **/

function sortingHat(str){
  var length= str.length;
  var mod= length % 4;
  var houses= ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"]
  return houses[mod];
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var inputEl= document.getElementById('input').value;
  var house = sortingHat(inputEl);
  newText= "<p> The Sorting Hat has sorted you into "+ house + "!</p>";
  document.getElementById("output").innerHTML= newText;
});
