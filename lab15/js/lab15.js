/**
 * Author:    Tatum Going
 * Created:   11.20.2021
 *
 * License: Public Domain.
 **/


var myUrl= "https://dinosaur-facts-api.shultzlab.com/dinosaurs/random";
 // Using the core $.ajax() method
function callAjax(){
  console.log("click");

   $.ajax({
       // The URL for the request (from the api docs)
       url: myUrl,
       type: "GET",
       dataType: "json",
  })


  .done(function(data) {
    console.log("Success:", data);
    $("#output").html(JSON.stringify(data));
  })

  .fail(function(request, error) {
    console.log(request, error);
  })

}

$("#activate").click(callAjax);
