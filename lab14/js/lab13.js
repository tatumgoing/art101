/**
 * Author:    Tatum Going
 * Created:   11.20.2021
 *
 * License: Public Domain.
 **/


function FizzBuzz(){
  oneLongString= "";
  for(var num=1; num<=200; num++){
    words= "";
    if(num%3==0){
      words = words + "Fizz";
    }
    if(num%5==0){
      words = words + "Buzz";
    }
    if(num%7==0){
      words = words + "Boom";
    }
    if(num%3==0 || num %5==0 || num%7==0){
      words= words+ "!";
    }
    oneLongString+= num+ ": "+ words+ "<br>";
  }
  $("#output").html(oneLongString);
}

FizzBuzz();
