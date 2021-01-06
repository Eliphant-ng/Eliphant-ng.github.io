//stopwatch 
//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}



function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        status = "started";

    }


}

//Function to reset the stopwatch
function reset(){
if(status =="stopped"){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}





// user location: 
// get user's location: 
sucessCallback = (position) => {
var latitude = localStorage.setItem("latitude", position.coords.latitude);
var longitude = localStorage.setItem("longitude", position.coords.longitude);
}

errorCallback = (error) => {
console.log(error);
}

navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);

let latitude = parseFloat(localStorage.getItem("latitude"));
let longitude = parseFloat(localStorage.getItem("longitude"));

// set lat lng for 3 locations:

// NORTH

// Causeway point
var causeway_lat = 1.4361;
var causeway_lng = 103.7859;
// Sembawang Hot Spring Park
var spring_lat = 1.4343;
var spring_lng = 103.8224;
// Central Water Catchment
var water_lat = 1.3552;
var water_lng = 103.7972;


// SOUTH

// Sentosa 
var sentosa_lat = 1.2494;
var sentosa_lng = 103.8303;
// Newton hawker 
var hawker_lat = 1.3120;
var hawker_lng = 103.8396;
// Orchard road 
var orchard_lat = 1.304833;
var orchard_lng = 103.831833;

//EAST

// jewel
var jewel_lat = 1.3602;
var jewel_lng = 103.9898;
// Tampanies hub
var tamp_lat = 1.3531;
var tamp_lng = 103.9404;
// SUTD
var sutd_lat = 1.3;
var sutd_lng = 103.7827;


//WEST

// ite west
var ite_lat = 1.3760;
var ite_lng = 103.7529;
// clementi mall 
var clem_lat = 1.3149;
var clem_lng = 103.7643;
// jem
var jem_lat = 1.3328;
var jem_lng = 103.7433;


// NORTH side game: 
var north_checkpoint = 0
localStorage.setItem("north_checkpoint",north_checkpoint);
$("#north").on("click", ()=>{
    var north = { 
        causeway_lat, causeway_lng,
        spring_lat, spring_lng,
        water_lat, water_lng
    }
    if (latitude == causeway_lat && longitude == causeway_lng){
        north_checkpoint += 1
    }
    if (latitude == spring_lat && longitude == spring_lng){
        north_checkpoint += 1
    }
    if (latitude == water_lat && longitude == water_lng){
        north_checkpoint += 1
    }
    
});
    
// SOUTH side game: 
var south_checkpoint = 0
localStorage.setItem("south_checkpoint",south_checkpoint);
$("#south").on("click", ()=>{
    var south = { 
        sentosa_lat, sentosa_lng,
        hawker_lat, hawker_lng,
        orchard_lat, orchard_lng
    }
    if (latitude == sentosa_lat && longitude == sentosa_lng){
        south_checkpoint += 1
    }
    if (latitude == hawker_lat && longitude == hawker_lng){
        south_checkpoint += 1
    }
    if (latitude == orchard_lat && longitude == orchard_lng){
        south_checkpoint += 1
    }
    
});

// EAST side game: 
var east_checkpoint = 0
localStorage.setItem("east_checkpoint",east_checkpoint);
$("#east").on("click", ()=>{
    var east = { 
        jewel_lat, jewel_lng,
        tamp_lat, tamp_lng,
        sutd_lat, sutd_lng
    }
    if (latitude == jewel_lat && longitude == jewel_lng){
        east_checkpoint += 1
    }
    if (latitude == tamp_lat && longitude == tamp_lng){
        east_checkpoint += 1
    }
    if (latitude == sutd_lat && longitude == sutd_lng){
        east_checkpoint += 1
    }
    
});

// WEST side game: 
var west_checkpoint = 0;

localStorage.setItem("west_checkpoint",west_checkpoint);
$("#west").on("click", ()=>{

    var west = {
        ite_lat, ite_lng,
        clem_lat, clem_lng, 
        jem_lat, jem_lng
    }
    if (latitude == ite_lat && longitude == ite_lng){
        west_checkpoint += 1
        swal("Good job!", "You have reached ITE West!", "success");
    }
    if (latitude == clem_lat && longitude == clem_lng){
        west_checkpoint += 1
        swal("Good job!", "You have reached Clementi Mall!", "success");
    }
    if (latitude == jem_lat && longitude == jem_lng){
        west_checkpoint += 1;
        west_string =  String(west_checkpoint);
        swal("Good Job! You have reached Clementi Mall! " + west_string + "/3" , {
            buttons: {
              cancel: "ok lorh",
              catch: {
                text: "Aww yisss!",
                value: "catch",
              },
            },
          })
          .then((value) => {
            switch (value) {

           
              case "catch":
                swal("Nice!", "Timing: ", );
                break;
           
              default:
                swal("Leh more enthu please!");
            }
          });
    }
    
    if (west_checkpoint == 3){ 

        swal("Good job!", "WEST MISSION COMPLETE!", "success");

    }
    
});




