//hier word gevraagd naar de naam van de klant
var naam = prompt("Wat is het naam van de klant?");
while (naam == "" || naam == null) {
  naam = prompt("Sorry, wat is het naam?");
}
  document.write("<h1>" + naam + "</h1>");
if (naam ===""||naam===null){
 alert("u moet uw naam invullen");
 naam = prompt("vul uw naam in", "")
}
else{
}
var datum = prompt("Wat is de datum?");
  document.write("<br>Klant belt op: " + datum);
if (naam ===""||naam===null){
 alert("u moet uw naam invullen");
}
else{
}
while (datum == '') {
  datum = prompt("Sorry, Wat is de datum?");
}
if (datum ===""||datum===null){
 alert("Geen datum ingevuld! ");
}
else{
}
var modemtype = prompt("Wat is het merk en type van uw modem?");
  document.write("<br>Type modem van klant: " + modemtype);
  document.write(" <br>");
// internet
// hier word gevraagd naar klacht
var productinternet = confirm("Heeft u een klacht over ons product Internet?");
if (productinternet === true)
{

document.write("<br><fieldset><legend>Internet</legend>Klant meldt probleem met Internet");
var browse = confirm("kunt u browsen naar www.nu.nl?");
var ladensnel = confirm ("reageert de pagina snel na het indrukken van f5?");
if (ladensnel === true)
document.write("<br>De pagina laadt snel");
else{
document.write("<br>De pagina laadt niet snel");
}
document.write("<br>");
if (browse && ladensnel == true) {
document.write("<br>...U kunt browsen en uw pagina's laden snel. U heeft geen internet probleem");
document.write("<li>browsen naar www.nu.nl lukt</li>");
document.write("<li>De pagina laadt snel</li></fieldset>");
}
// als de helpdesk medewerker false antwoord op de vorige vragen dan krijg hij het volgende te zien:
else {
document.write("<br>...u kunt niet browsen en uw paginas laden niet snel, u heeft internet probleem");
var hyper = "Internet laden";
document.write("<li>"+ hyper.link("internet-laden.html") + "</li>");
var snelheid = "Snelheid van Laden";
document.write("<li>"+ snelheid.link("snelheid-laden.html") + "</li></fieldset>");
}
    }
    else {
      document.write("<br><fieldset><legend>Internet</legend>Klant Meld geen probleem met internet</fieldset>");
}
//_Internet-Bellen_//
// internet - bellen
var klacht = confirm("Heeft u een klacht over ons product Internet en Bellen");
      if (klacht === true){
        document.write("<br><fieldset><legend>Internet en Bellen</legend>Klant meldt probleem met Internet en Bellen");
  // confirm kiestoon
           var kiestoon = confirm("Hoort u een kiestoon");
           if (kiestoon === true)
             document.write("<br>De klant hoort een kiestoon");

           else {
             document.write("<br>De klant hoort geen kiestoon");
           }

 // confirm bellen zichzelf
      var zelfbellen = confirm("Kunt u zelf bellen op bijvoorbeeld een mobiel nummer?");
      if (zelfbellen === true)
        document.write("<br>Kan van vast naar mobiel bellen");

      else {
        document.write("<br>De klant kan zich niet bellen");
      }

  // confirm bellen
 var bellenklacht = confirm("Kunt u met uw mobiel het nummer bellen waar u een klacht over heeft?");
if (bellenklacht === true)
 document.write("<br>kan van mobiel naar vast bellen");
 else {
document.write("<br>Kan niet van mobiel naar vast bellen");
}
if (kiestoon && zelfbellen && bellenklacht == true)
{
document.write("<br>... u heeft een kiestoon, u kunt bellen en gebeld worden. U heeft geen Internet en Bellen probleem");
document.write("<li>hoort een kiestoon</li>");
document.write("<li>kan van vast naar mobiel bellen</li>");
document.write("<li>kan van mobiel naar vast bellen</li></fieldset>");
}
else {
document.write("Klant heeft problemen met kiestoon, mobiel bellen naar vast en vast naar mobiel bellen:");
var probleemkiestoon = "Geen kiestoon";
document.write("<li>"+ probleemkiestoon.link("geen-kiestoon.html") + "</li>");
var probleembellen = "Probleem met bellen";
document.write("<li>" + probleembellen.link("gebeld-worden.html") +"</li></fieldset>");
}
}
else {
document.write("<br><fieldset><legend>Internet en Bellen</legend>Klant Meld geen probleem met internet en bellen</fieldset>");
}
// internet - bellen - televisie
var klachttv = confirm("Heeft u een klacht over ons product Internet en Bellen en televisie");
if (klachttv === true)
{
  document.write("<br><fieldset><legend>Internet en Bellen en Televisie</legend>Klant meldt probleem met Internet, Bellen en Televisie");
var televisietoestel = prompt("Aantal televisie toestellen?");
while (televisietoestel == '') {
televisietoestel = prompt("Aantal televisie toestellen?");
}
document.write("<br>klant heeft" +" "+  televisietoestel + " "+ "televisietoestellen");
if (televisietoestel ===""||televisietoestel===null){
 alert("u moet aantal invullen");
}
else{
}  // confirm splitter
var splitter = confirm("Is uw splitter goed aangesloten?");
 if (splitter === true)
 document.write("<br>splitter is goed aangesloten");

else {
document.write("<br>Splitter is niet goed aangesloten");
}
 // confirm settopbox
var settopbox = confirm("Is uw Settopbox goed aangesloten?");
if (settopbox === true)
  document.write("<br>Settopbox is goed aangesloten");
else {
  document.write("<br>Settopbox is niet goed aangesloten");
}
// confirm settopbox
var zenders = confirm("Worden de zenders gevonden?");
 if (zenders === true)
document.write("<br>Zenders worden gevonden");
else {
   document.write("<br>Zenders worden niet gevonden");
}
 if (televisietoestel && splitter && settopbox && zenders == true)
{
document.write("<br>... u heeft uw splitter en settopbox goed aangesloten en de zenders worden gevonden. U heeft geen Internet, Bellen en Televisie probleem.");
document.write("<li>klant heeft" +" "+ televisietoestel + " " + "televisietoestellen</li>");
document.write("<li>splitter is goed aangesloten</li>");
document.write("<li>settopbox is goed aangesloten</li>");
document.write("<li>zenders worden gevonden</li></fieldset>");
}
else {
document.write("klant heeft probleem met splitter, settopbox, zenders");
var splitter = "Splitter aangesloten";
document.write("<li>"+ splitter.link("splitter-aangesloten.html") + "</li>");
var settopboxa = "Probleem met settopbox";
document.write("<li>" + settopboxa.link("settopbox-aangesloten.html") + "</li>");
var zenders = "Zenders-niet-gevonden";
document.write("<li>" + zenders.link("zenders-niet-gevonden.html") + "</li></fieldset>");
}
if (browse && ladensnel && kiestoon && zelfbellen && bellenklacht && televisietoestel && splitter && settopbox && zenders === true) {
document.write("<br>klant heeft wel klachten, Gemeld op:" +" "+ datum);
document.write("<br>Uw modem" + " " + modemtype + " " + "werkt goed");
}
}
else{
document.write("<br><fieldset><legend>Internet,bellen en Televisie</legend>Klant Meld geen probleem met internet, bellen en televisie");
document.write("<br>U heeft geen klachten gemeld op." + " "+ datum);
document.write("<br>Uw modem" + " "+ modemtype +" "+  "werkt niet goed.");
  }
