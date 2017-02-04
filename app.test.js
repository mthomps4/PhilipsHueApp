"use strict";
//Make sure Light is off on page load
//Will look to add dynamic 'checks' later
$('#Test1').removeAttr('checked');
$.ajax({
     type: "PUT",
     url: "http://192.168.1.107/api/nbEypJkH8KItw3APB3Ci2YIB6t48vW15j6qXBzpm/lights/1/state",
     dataType: 'json',
     contentType: 'application/json',
     data:  JSON.stringify({"on": false}),
     success: function(data, response){
       console.log(response);
       console.log("turning Test1 Off!");
     }
  });

  //Stand Alone Test
  $(document).ready(function() {
      $('#Test1').change(function() {
          if($(this).is(":checked")) {
              $.ajax({
               type: "PUT",
               url: "http://192.168.1.107/api/nbEypJkH8KItw3APB3Ci2YIB6t48vW15j6qXBzpm/lights/1/state",
               dataType: 'json',
               contentType: 'application/json',
               data:  JSON.stringify({"on": true}),
               success: function(data, response){
                 console.log(response);
                 console.log("turning Test1 ON!");
               }
            });
          }

          else{
            $.ajax({
             type: "PUT",
             url: "http://192.168.1.107/api/nbEypJkH8KItw3APB3Ci2YIB6t48vW15j6qXBzpm/lights/1/state",
             dataType: 'json',
             contentType: 'application/json',
             data:  JSON.stringify({"on": false}),
             success: function(data, response){
               console.log(response);
               console.log("turning Test1 Off!");
             }
          });
        }//Else

      });//If button toggled
  });//DocumentReady


//Return Light States
$("#getData").click(function(){
$("#data").empty();
$.ajax({
 type: "GET",
 url: "http://192.168.1.107/api/nbEypJkH8KItw3APB3Ci2YIB6t48vW15j6qXBzpm/lights/",
 dataType: 'json',
 contentType: 'application/json',
 success: function(data, response){
   $.each(data, function(key, value){
        $("#data").append("<h3>" + key + "</h3>");
        var str = JSON.stringify(value);
        $("#data").append("<h3>" + value['name'] + "</h3>");
        $("#data").append(str);
        $("#data").append("<br><br>");
        console.log(str);
   });
 }//success
})
});

//Dynamic Load Test
function getLights() {
$("#getLights").empty();
  $.ajax({
       type: "GET",
       url: "http://192.168.1.107/api/nbEypJkH8KItw3APB3Ci2YIB6t48vW15j6qXBzpm/lights/",
       dataType: 'json',
       contentType: 'application/json',
       success: function(data, response){
         response = JSON.stringify(data);


         $.each(data, function(key, value){
           var checked = "";
           if(value['state']['on'] == true){
             checked="checked ";
           }
           $("#getLights").append(
             "<h1>"+key + value['name']+"</h1>" +
              `<label class="switch">`+
                `<input id="Light`+key+`" type="checkbox"` + checked +`onchange="changeLightState(`+key+`)">` +
                `<div class="slider"></div></label>`
            );
            console.log("Light"+key+" state ON = "+ value['state']['on']);
         });
       }//Success
    });//AJAX
};//getLights

//IF ELSE LIGHT SWITCH AJAX
function changeLightState(key){
var i = key;
console.log(i);
  if($("#Light"+i).is(":checked")) {
    console.log("checked");
    $.ajax({
      type: "PUT",
      url: "http://192.168.1.107/api/nbEypJkH8KItw3APB3Ci2YIB6t48vW15j6qXBzpm/lights/"+i+"/state",
      dataType: 'json',
      contentType: 'application/json',
      data:  JSON.stringify({"on": true}),
      success: function(data, response){
        console.log("Turning ON");
      }
    });
  }//IF
  else{
    $.ajax({
      type: "PUT",
      url: "http://192.168.1.107/api/nbEypJkH8KItw3APB3Ci2YIB6t48vW15j6qXBzpm/lights/"+i+"/state",
      dataType: 'json',
      contentType: 'application/json',
      data:  JSON.stringify({"on": false}),
      success: function(data, response){
        console.log("Somethings UP");
      }
    });
  }//Else
}//changeLightState
