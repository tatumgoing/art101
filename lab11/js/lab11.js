/**
 * Author:    Tatum Going
 * Created:   11.8.2021
 *
 * License: Public Domain.
 **/

var titleEl= $("#titleButton");
var problemsEl= $("#problemsButton");
var resultsEl= $("#resultsButton");
var redEl= $("#redButton");
var blueEl= $("#blueButton");

titleEl.html("<button>Title Button </button>");
problemsEl.html("<button>Problems Button</button>");
resultsEl.html("<button>Results Button</button>");



$("#titleButton").click(function(){
	$("#title").toggleClass("special");
});

$("#problemsButton").click(function(){
	$("#problems").toggleClass("special");
});

$("#resultsButton").click(function(){
	$("#results").toggleClass("special");
});

$("#redButton").click(function(){
	$("#blueButton").toggleClass("red");
});

$("#blueButton").click(function(){
	$("#redButton").toggleClass("blue");
});
