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
    var timing = document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

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
        localStorage.setItem("timing",timing);

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

//NP
// const top_left_ict_lat = 1.3338;
// const top_left_ict_lng = 103.7745;

// const top_right_ict_lat = 1.3336;
// const top_right_ict_lng = 103.7756;

// const bottom_left_ict_lat = 1.3335;
// const bottom_left_ict_lng = 103.7744;

// const bottom_right_ict_lat = 1.3333;
// const bottom_right_ict_lng = 103.7755;

// const top_left_makan_lat = 1.3324446;
// const top_left_makan_lng = 103.774059;

// const top_right_makan_lat = 1.332314;
// const top_right_makan_lng = 103.774778;

// const bottom_left_makan_lat = 1.3319;
// const bottom_left_makan_lng = 103.774;

// const bottom_right_makan_lat = 1.331855;
// const bottom_right_makan_lng = 103.774677;


// const top_left_library_lat = 1.334;
// const top_left_library_lng = 103.776;

// const top_right_library_lat = 1.3339;
// const top_right_library_lng = 103.7766;

// const bottom_left_library_lat = 1.3338;
// const bottom_left_library_lng = 103.776;

// const bottom_right_library_lat = 1.3337;
// const bottom_right_library_lng = 103.7765;

//TP
const canopy_lat = 1.3456985585406471;
const canopy_lng = 103.93224313260168;

const library_lat = 1.3451030097392838;
const library_lng = 103.93261363703729;

const cheers_lat = 1.3441152699272814;
const cheers_lng = 103.93324567402358;

//SP
const bucks_lat = 1.3096946986666518;
const bucks_lng = 103.77711876838059;

const macs_lat = 1.3100495525476865;
const macs_lng = 103.77850628703439;

const convention_lat = 1.3112302910626206;
const convention_lng = 103.7778035480428;

//RP
const subway_lat = 1.4428025238291733;
const subway_lng = 103.78558111053884;

const swim_lat = 1.4460311690862429;
const swim_lng = 103.78404170234862;

const accom_lat = 1.44721020613597;
const accom_lng = 103.78406570204999;

//NYP
const idm_lat = 1.3786165449676906;
const idm_lng = 103.84993037012131;

const bm_lat = 1.3810842078107275;
const bm_lng = 103.8485061294325;

const foodgle_lat = 1.3784844258460704;
const foodgle_lng = 103.84895071503075;



// NP game: 

var np_checkpoint = 2;

localStorage.setItem("np_checkpoint",np_checkpoint);

    if (latitude >= 1.3333  && latitude <= 1.3338 && longitude >= 103.7744  && longitude <= 103.7756 ){
        np_checkpoint += 1
        swal("Good job!", "You have reached School of ICT!", "success");
    }
    if (latitude >= 1.331855  && latitude <= 1.3324446 && longitude >= 103.774 && longitude <= 103.774778){
        np_checkpoint += 1
        swal("Good job!", "You have reached Makan Place!", "success");
    }
    if (latitude >= 1.3337  && latitude <= 1.3338 && longitude >= 103.776  && longitude <= 103.7766){
        np_checkpoint += 1;
        np_string =  String(np_checkpoint);
        swal("Good Job! You have reached Lien Ying Chow Library! " + np_string + "/3" , {
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
                swal("Nice!" + "Jiayou jiayou !! dont become loser ah", );
                break;
           
              default:
                swal("Leh more enthu please!");
            }
          });
    }
    
    if (np_checkpoint >= 3){ 
        swal("Good job!", "NP MISSION COMPLETE!", "success");
        reset();

    }
    




