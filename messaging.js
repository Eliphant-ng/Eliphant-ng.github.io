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
  function sendMessage(){
    //get message
    var message = document.getElementById("message").value;
    
    $(document).ready(function(){
        $("#find-friends").click(function(){
            var r= $('<input type="button" value="new button"/>');
            $("body").append(r);
        });
    });


    //save in database
    firebase.database().ref("messages").push().set({
      "sender": myName,
      "message": message,
      
     
    });

    // prevent form from submitting 
    return false;
  }

  // listen for incoming messages
  firebase.database().ref("messages").on("child_added", function (snapshot){
    var html = "";
    // give each message a unique ID
    html += "<li id='message-" + snapshot.key + "'>";
      // show delete button if message is sent by me
      if (snapshot.val().sender == myName){
        html += "<button data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>"
          ;
          html += "Delete";
        html += "</button>";
      }
      html += snapshot.val().sender + ": " + snapshot.val().message;
    html += "</li>";

    document.getElementById("messages").innerHTML += html;
  });

  function deleteMessage(self){
    // get message ID
    var messageId = self.getAttribute("data-id");

    // delete message 
    firebase.database().ref("messages").child(messageId).remove();
  }

  // attach listener for deleted message 
  firebase.database().ref("messages").on("child_removed", function (snapshot){
    // remove message node 
    document.getElementById("message-" + snapshot.key).innerHTML = "This message has been deleted.";
  });



  firebase.database().ref("findFriend").on("child_added", function (snapshot){
    var html = "";
    // give each message a unique ID
    html += "<li id='find-friends-" + snapshot.key + "'>";
      // show delete button if message is sent by me
      if (snapshot.val().sender == myName){
        html += "<button data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>"
          ;
          html += "Delete";
        html += "</button>";
      }
      html += snapshot.val().sender + ": " + snapshot.val().message;
    html += "</li>";

    document.getElementById("find-friends").innerHTML += html;
  });

  function deleteMessage(self){
    // get message ID
    var messageId = self.getAttribute("data-id");

    // delete message 
    firebase.database().ref("find-friends").child(messageId).remove();
  }

  // attach listener for deleted message 
  firebase.database().ref("find-friends").on("child_removed", function (snapshot){
    // remove message node 
    document.getElementById("find-friends-" + snapshot.key).innerHTML = "This message has been deleted.";
  });



  function getLocation(){
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
  


//start retrieve api usernames

$(document).ready(function(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://chatapp-5546.restdb.io/rest/notifications",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5ff3c3e8823229477922c729",
            "cache-control": "no-cache"
        }
    }
     //response here means all the api information that is sent back
     $.ajax(settings).done(function (response) {

        var userLocationContent = $("#userLocationContent");
        //user_name
        //user_lat
        //user_lng
        var userDetails = '';
        for (var i = 0; i < response.length; i++) {
            var user_name = localStorage.getItem("name");
            var user_lat = latitude;
            var user_lng = longitude;
            var user_id = response[i].user_id
            var userDetails =`${userDetails}
                <tr>
                <td><a href="#" class="update" id="${user_id}">${user_id}</a></td>
                <td>${user_name}<td>
                <td>${user_lat}</td>
                <td>${user_lng}</td>
                </tr>`;
            
        }
        userLocationContent.html(userDetails);
        //add rows to the table
        //console.log(response);
    });



    $("#find-friends").on("click", function (e) {
        e.preventDefault();
    var user_name = localStorage.getItem("name");
    var user_lat = latitude;
    var user_lng = longitude;
    //data to be sent to the restdb 
    var jsondata = { "user_name": user_name, "user_lat": user_lat, "user_lng": user_lng};

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://chatapp-5546.restdb.io/rest/notifications",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5ff3c3e8823229477922c729",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
    }
    //this done is the creation of new information
    $.ajax(settings).done(function (response) {
        console.log(response);
        });
    });
});



