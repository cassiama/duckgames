document.onload = (function(){
    
 })();
function sendEmail(){
    emailjs.init("user_iRmBUC05RujZV75ERfn6E");
    mess = document.getElementById("input-message").value;
    emai = document.getElementById("input-email").value;
    emailjs.send("gmail","duckgames",{
        from_email: emai, 
        message: mess
        })
    .then(function(response) {
        //if send is success
        alert("Sent!")
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(err) {
        //if send is failed
        alert("Sorry there was an issue!")
        console.log("FAILED. error=", err);
    });

}