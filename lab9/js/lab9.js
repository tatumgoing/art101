/**
 * Author:    Tatum Going
 * Created:   10.31.2021
 *
 * License: Public Domain.
 **/

outputEl = document.getElementById("output");
//new element
new1El = document.createElement("p");
new1El.innerHTML= "This text has a nifty font.";
new1El.setAttribute("style", "font-family: Impact");

new2El = document.createElement("p");
new2El.innerHTML= "This text is big.";
new2El.setAttribute("style", "font-size: 150%");

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
