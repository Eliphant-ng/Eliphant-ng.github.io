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
    // set array of list of timings
    var timings = [];
    var firebaseRef = firebase.database().ref("scores");
    firebaseRef.on("value", function(snapshot){
        snapshot.forEach(function(element){
            //console.log(element.val().timing);
            timings.push(parseFloat(element.val().timing));
            // document.querySelector("#root").innerHTML += `
            // <div>${element.val().name}:${timing}</div>`
            timings.sort((a, b) => a - b);

        });
    // display top 5 players
    var first = timings[0]
    document.getElementById("first").innerHTML = first;
    var second = timings[1]
    document.getElementById("second").innerHTML = second;
    var third = timings[2]
    document.getElementById("third").innerHTML = third;
    var forth = timings[3]
    document.getElementById("forth").innerHTML = forth;
    var fifth = timings[4]
    document.getElementById("fifth").innerHTML = fifth;


    });


