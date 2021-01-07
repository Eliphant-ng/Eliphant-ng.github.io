function getLocation() {
  latitude = parseFloat(localStorage.getItem("latitude"));
  longitude = parseFloat(localStorage.getItem("longitude"));
}




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

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAdho8t20YPQm4bKDGQjih337UbqxZFa6A",
  authDomain: "chat-messaging-api.firebaseapp.com",
  projectId: "chat-messaging-api",
  storageBucket: "chat-messaging-api.appspot.com",
  messagingSenderId: "218119553113",
  appId: "1:218119553113:web:0a87c4ad307f6a9d703148",
  measurementId: "G-SK5XCD5DCY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



var myName = localStorage.getItem("name");
function sendMessage() {
  //get message
  var message = document.getElementById("message").value;
  var lat = latitude;
  var lng = longitude;



  //save in database
  firebase.database().ref("messages").push().set({
    "sender": myName,
    "message": message,
    "lat": lat,
    "lng": lng

  });



  // prevent form from submitting 
  return false;
}

// listen for incoming messages
firebase.database().ref("messages").on("child_added", function (snapshot) {
  var html = "";
  // give each message a unique ID
  html += "<li id='message-" + snapshot.key + "'>";
  // show delete button if message is sent by me
  if (snapshot.val().sender == myName) {
    html += "<button data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>"
      ;
    html += "Delete";
    html += "</button>";
  }

 // making a button to find friends
  if(snapshot.val().message == "FindFriend"){
    //show findfriend UI
    html+= "<button data-lat.class='friend'='"+ snapshot.val().lat + "'>Friend wants to send you his location</button>"
  }else{
    html += snapshot.val().sender + ": " + snapshot.val().message;
  }
  html += "</li>";


  document.getElementById("messages").innerHTML += html;
});






function deleteMessage(self) {
  // get message ID
  var messageId = self.getAttribute("data-id");

  // delete message 
  firebase.database().ref("messages").child(messageId).remove();
}

// attach listener for deleted message 
firebase.database().ref("messages").on("child_removed", function (snapshot) {
  // remove message node 
  document.getElementById("message-" + snapshot.key).innerHTML = "This message has been deleted.";
});

function friendMessage(self) {
  // get message ID
  var messageId = self.getAttribute("data-id");
  firebase.database().ref("messages").child(messageId);
}


//create jquery event listener for find friend
$(document).ready(function () {

  //send find friend msg

  $("#find-friends").click(function (e) {
    e.preventDefault();
  var message = document.getElementById("message").value;
  var lat = latitude;
  var lng = longitude;
  //save in database
  firebase.database().ref("messages").push().set({
    "sender": myName,
    "message": "FindFriend",
    "lat": lat,
    "lng": lng,

  });


  // prevent form from submitting 
  return false;
  });
});//end ready



// accessing the path to the database
$('messages').on('click','friend',function(){
var firebaseRef = firebase.database().ref("messages");
firebaseRef.once("value", function(snapshot){
  var data = snapshot.val();
  for(let i in data){
    console.log(data[i]["lat"]);
    console.log(data[i]["lng"]);
  }
  
});
});

