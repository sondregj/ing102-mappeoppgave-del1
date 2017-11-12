var tabell = document.getElementById("tabell");

// Henter XML dokumentet
var Connect = new XMLHttpRequest();
Connect.open("GET", "jostein.xml", false);
Connect.send(null)

var docX = Connect.responseXML;

// Henter de ulike XML elementene og lager en HTML tabell via en for-løkke
var navn = docX.getElementsByTagName("navn");
var yr = docX.getElementsByTagName("yr");

var s = "<table>";
for (i = 0; i < navn.length; i++) {
    s += "<tr><td>" + navn[i].textContent + "</td><td>" + yr[i].textContent + "</td></tr>";
}
s += "</table>";
tabell.innerHTML = s;