var tabell = document.getElementById("tabell");

// Get the XML document
var Connect = new XMLHttpRequest();
Connect.open("GET", "jostein.xml", false);
Connect.send(null)

// Place the response in an XML document 
var docX = Connect.responseXML;

// Get all the member element contents and create a table dynamically
var navn = docX.getElementsByTagName("navn");
var yr = docX.getElementsByTagName("yr");

var s = "<table>";
for (i = 0; i < navn.length; i++) {
    s += "<tr><td>" + navn[i].textContent + "</td><td>" + yr[i].textContent + "</td></tr>";
}
s += "</table>";
tabell.innerHTML = s;
