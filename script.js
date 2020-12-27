/* header */
$(document).ready(function(){
    $("#sidebarCollapse").on('click',function(){
        $("#sidebar").toggleClass('active')
    });
});

// geolocation // 
$('#location-button').click(function(){

    if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
        });
    else
        console.log("geolocation is not supported");
});



