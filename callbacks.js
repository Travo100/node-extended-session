// let's make a callback 
// that takes in one parameter for a message 
// waits 2 seconds and then executes a callback 

function sayMessageAndWait(message, callback) {
    console.log(message);   

    setTimeout(function(){
        callback();
    }, 2000);
}

sayMessageAndWait("Do you guys like callbacks?", function(){
    console.log("Yes!");
    console.log("Kinda...");
    console.log("Callbacks make me cry... :(");
});