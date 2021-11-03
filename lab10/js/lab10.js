/**
 * Author:    Tatum Going
 * Created:   11.3.2021
 *
 * License: Public Domain.
 **/

function sortUser(name){
  var userName= name;
  var nameArray= userName.split('');
  var nameArraySort= nameArray.sort();
  var nameSorted= nameArraySort.join('');
  return nameSorted;
}

var buttonEl= document.getElementById("mybutton");
var sillyEl= document.getElementById("sillybutton");
var quietEl= document.getElementById("quietbutton");
var sillyDiv= document.getElementById("silly");
var outputEl = document.getElementById("output");

function buttonPress(){
  var textEl= document.getElementById("user-name").value; //get value of textbox
  sorted= sortUser(textEl); //sort
  outputEl.innerHTML = sorted;
}

function sillybuttonPress(){
  sillyDiv.setAttribute("style", "text-transform: uppercase");
}
function quietbuttonPress(){
  sillyDiv.setAttribute("style", "text-transform: lowercase");
}

buttonEl.addEventListener("click", buttonPress);
sillyEl.addEventListener("click", sillybuttonPress);
quietEl.addEventListener("click", quietbuttonPress);
