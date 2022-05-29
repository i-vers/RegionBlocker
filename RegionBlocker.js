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

// If false, prints an legal notice into console.
// When you track IP's there has to be a warning, so please do not remove/modify the text in any way.
else{
    // This is placed here for legal reasons. You can modify the sizes but do not change the text.
    console.group("%cRegionLocker", "font-size:50px; color: red; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");
    console.log("%cThis site uses RegionLocker. A tool used to block spesific regions from visiting your site.", "font-size: 20px; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");
    console.groupEnd;
    }
}
