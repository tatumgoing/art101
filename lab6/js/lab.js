/**
 * Author:    Tatum Going
 * Created:   10.18.2020
 *
 * License: Public Domain.
 **/

 //Define variables

 myTransport= ["car","bus","airplane","bicycle"]

 myMainRide= {}

 myMainRide.make = "Toyota";
 myMainRide.model = "Rav4";
 myMainRide.color = "White";
 myMainRide.year = 2015;
 myMainRide.age = 2021-myMainRide.year;

  document.writeln("There are many ways to get around in this world: " + myTransport + "<br>");
  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
