// Location

window.onload = getMyLocation;
 
function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    alert("Oops, no geolocation support");
  }
}

function displayLocation(position) {

  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
 
  var div = document.getElementById("location");
  div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
}
//Date,Time
function Time(){

var today= new Date();
var period="";
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
if(h>=12){
	period="PM";
}
else{
	period="AM";
}
if(h==0){
	h=12;
}
else{if(h>12){
	h=h-12;
}
}
h=update(h);
m=update(m);
s=update(s);

var date=h+':'+m+':'+s+' '+period+' '+ today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
document.getElementById('date-time').innerHTML=date;
setTimeout(Time,1000);
}
function update(t){
	if(t<10){
		return "0"+t;
	}
	else{
		return t;
	}
}

Time();