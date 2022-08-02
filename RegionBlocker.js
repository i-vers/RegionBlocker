// Downloads latest jQuery version into the document.
function downloadjQuery() {
    document.open();
    document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>");
    document.close();
}

// Pre-Setting the 'Country' variable.
function Execute(){
    var Country = "";

// Requesting for visitor's IP address.
$.getJSON('https://ipinfo.io/json', function(result) {
    Country = result.country
  });

// Checks if the IP Address is located in the blocked region, if true redirects to an error page.
if (Country == "RU"){ // Change "RU" (Russia) to any Country Code. 
    /*
    actual script here
    */
    console.log("Stand with Ukraine!")
}
