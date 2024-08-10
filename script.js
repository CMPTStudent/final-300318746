// get the date from the input field


// start the countdown
function start() {
    // Set the date we're counting down to
    let countDownDate = document.getElementById("birthday").value;
    var final = new Date(countDownDate).getTime();
    // document.getElementById("aid").innerHTML = countDownDate;
    // document.getElementById("aid2").innerHTML = final;

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
            var now = new Date().getTime();
            // document.getElementById("aid3").innerHTML = now;
        // Find the distance between now and the count down date
        var distance = (final - now);
        // document.getElementById("aid4").innerHTML = distance;
        // document.getElementById("aid5").innerHTML = typeof(final);
        if (distance < 0) {
            alert("Date is expired!");
            clearInterval(x);
       
        }
       else{
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var deciseconds = Math.floor((distance*10 % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "days " + hours + "hrs "
        + minutes + "mins " + seconds + "secs " + deciseconds + "dicsecs " ;
    
       } 
        // If the count down is over, write some text 
       
}, 1000);





    // var time = setInterval(countDownFunction(){
    //       // Get today's date and time
    //       var now = new Date().getTime();
    //         // Find the distance between now and the count down date
    //         var distance = countDown - now;
    //         // Time calculations for days, hours, minutes and seconds

    //         // Output the result in an element with id="demo"

    //         // If the count down is over, write some text 
    // })
          
        
}

