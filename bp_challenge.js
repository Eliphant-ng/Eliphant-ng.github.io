// show map and instructions: 
function initMap() {
    swal("NP Game Challenge!",
   "Find the three hidden locations around campus! BE the FASTEST and OUTBEAT your friends! Remeber to press play to begin your challenge. Good Luck!!");
    let latitude = parseFloat(localStorage.getItem("latitude"));
    let longitude = parseFloat(localStorage.getItem("longitude"));
   
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {lat:latitude,lng:longitude},
      });
      new google.maps.Marker({
        position: {lat:latitude,lng:longitude},
        map,
        icon: "png file/person icon.png",
        animation: google.maps.Animation.DROP
        
      });
  
    }
  

//stopwatch 

//Start time counter: 
let startTime = new Date();

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


// Start the timer
function startStop(){
    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        status = "started";

    }


}

//Function Check if user finished the challenge and records the timing
function reset(){
if(np_checkpoint < 3){
    swal("CHALLENGE INCOMPLETE!", "tsk tsk tsk dont play play ah");
}
    else{
        window.clearInterval(interval);
        status = "stopped";
        let timing = new Date() - startTime;
        console.log(timing/60000 + "seconds");
        localStorage.setItem("timing",(timing/1000));
        // Storing timing data
        var firebaseConfig = {
            apiKey: "AIzaSyAuqUON7LmCIIrvwKY1wNHDiQEx2DBAjE8",
            authDomain: "leaderboard-dc9d0.firebaseapp.com",
            databaseURL: "https://leaderboard-dc9d0-default-rtdb.firebaseio.com",
            projectId: "leaderboard-dc9d0",
            storageBucket: "leaderboard-dc9d0.appspot.com",
            messagingSenderId: "412968994325",
            appId: "1:412968994325:web:95e19dddd112a72e65f01c",
            measurementId: "G-23M250XY1Z"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            
            var myName = localStorage.getItem("name");
            var time = localStorage.getItem("timing");
            var database = firebase.database();
            var ref = database.ref("scores");
            
            var data = {
                "name": myName,
                "timing": parseFloat(time)
            }
            
            ref.push(data);
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

// let latitude = 1.3334;
// let longitude = 103.7749;

let latitude = parseFloat(localStorage.getItem("latitude"));
let longitude = parseFloat(localStorage.getItem("longitude"));

// NP game: 

var np_checkpoint = 0;

localStorage.setItem("np_checkpoint",np_checkpoint);

    if (latitude >= 1.3771  && latitude <= 1.3777 && longitude >= 103.773  && longitude <= 103.774 ){
        np_checkpoint += 1
        swal("Good job!", "You have reached the School of ICT!", "success");
    }
    if (latitude >= 1.3784  && latitude <= 1.3793 && longitude >= 103.7727 && longitude <= 103.7738){
        np_checkpoint += 1
        swal("Good job!", "You have reached Makan Place!", "success");
    }
    if (latitude >= 1.3785  && latitude <= 1.3793 && longitude >= 103.7743 && longitude <= 103.7751){
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
        

    }
