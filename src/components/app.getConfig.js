$("#saveJson").click(function(){
  var jsonData = JSON.stringify(hueConfig);
  console.log(jsonData);
$.ajax({
  type: "POST",
  url: "saveJson.php",
  data:  { "bridgeIP": hueConfig.bridgeIP, "bridgeURL": hueConfig.bridgeURL, "username": hueConfig.username}
});
});

$("#getJData").click(function(){
  $.ajax({
   type: "GET",
   url: "bridgeStart.json",
 }).done(function(data, response){
   hueConfig = data;
   console.log(hueConfig);
   return hueConfig;
 });//DONE
});//Click



$("#bridgeAPI").click(function(){
  $("#bridgeResponse").empty();
  console.log(hueConfig.bridgeIP);
  hueConfig.bridgeIP = bridgeIP;
  hueConfig.bridgeURL = "http://" + bridgeIP + "/api";
  console.log(hueConfig);

  $("#bridgeResponse").append(
    "<h1> Bridge URL: " + hueConfig.bridgeURL + "</h1>"
  );

  $.ajax({
    type: "POST",
    url: hueConfig.bridgeURL,
    dataType: 'json',
    contentType: 'application/json',
    data:  JSON.stringify({"devicetype": "testing"})
  }).done(function(data, response){
    if(data[0].error){
      $("#bridgeResponse").append(
        "<h3> Error Type: " + data[0].error.type + "<h3>",
        "<h3> Error Description: " + data[0].error.description + "<h3>"
      );
      console.log("Error Type: " + data[0].error.type);
      console.log("Error Description: " + data[0].error.description);
    }else{
      console.log("You made it!");
      console.log(data);
      console.log(data[0].success);
      hueConfig.username = data[0].success.username;
      console.log(hueConfig);
      $("#bridgeResponse").append(
        "<h3> username: " + hueConfig.username + "<h3>"
      );
    }
  });



// $("#bridgeAPI").click(function(){
//   $("#bridgeResponse").empty();
//   var bridgeURL = "";
//   bridgeURL = "http://" + bridgeIP + "/api";
//
//   $("#bridgeResponse").append(
//     "<h1> Bridge URL: " + bridgeURL + "</h1>"
//   );
//
//   $.ajax({
//     type: "POST",
//     url: bridgeURL,
//     dataType: 'json',
//     contentType: 'application/json',
//     data:  JSON.stringify({"devicetype": "testing"})
//   }).done(function(data, response){
//     if(data[0].error){
//       $("#bridgeResponse").append(
//         "<h3> Error Type: " + data[0].error.type + "<h3>",
//         "<h3> Error Description: " + data[0].error.description + "<h3>"
//       );
//       console.log("Error Type: " + data[0].error.type);
//       console.log("Error Description: " + data[0].error.description);
//     }else{
//       console.log("You made it!");
//       console.log(data);
//       console.log(data[0].success);
//       username = data[0].success.username;
//       console.log(username);
//       $("#bridgeResponse").append(
//         "<h3> username: " + data[0].success.username + "<h3>"
//       );
//     }
//   });



});
