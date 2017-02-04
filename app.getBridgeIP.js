$("#UPNP").click(function(){
  $.ajax({
   type: "GET",
   url: "https://www.meethue.com/api/nupnp",
 }).done(function(data, response){
   console.log(data);
   bridgeIP = data[0].internalipaddress;
   console.log(bridgeIP);
   $("#UPNPResponse").append(
     "<h1> Bridge IP: " + bridgeIP + "</h1>"
   );
   return bridgeIP;
 }).fail(function(response){
    console.log(response);
 });//fail
});//Click
