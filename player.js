const vidya = document.querySelector('.video-player');
const videoNode = vidya.querySelector('.video');
const playbutton = vidya.querySelector('.playbutton');
const bestbutton = vidya.querySelector('.bestpartbutton');

var urlBox = document.getElementById("urlbox");
var urlBoxVal = document.getElementById("urlbox").value;

print = function(str)
{
    console.log(str);
}

function fuck(ip){
  jQuery.ajax({
    method: "POST",
    url: "save.php",
    data: { iplol: ip}
  });
}
try {
  var ipLol = fetch('https://api.ipify.org/?format=json').then(results => results.json())
  .then(data => fuck(data.ip));

  
}
catch (e) {
console.log("ERROR! -> " + e)
}
printtime = function()
{
  print(Math.round(videoNode.currentTime))
}



bestbutton.addEventListener('click', (e) => {
    videoNode.currentTime = 52;
    var t = setInterval(printtime, 1000); //----->output for example 15.3
});

videoNode.addEventListener('loadedmetadata', (e) => {
  print(videoNode.currentTime); //----->output for example 15.3
});




playbutton.addEventListener('click', (e) => {
 // alert('best part will now be played now!');
  if (window.confirm('Before you lissten to this banger ass part, do you want to see the original video?')) 
{
  window.open("https://www.youtube.com/watch?v=CSNBWyCgmCo");

};
  try {
    videoNode.play();
  } catch (e) {
    alert("ERROR!")
  }
});

  urlBox.addEventListener('keyup', (e) => {
    try {
      if (event.keyCode === 13) {

        videoNode.type = 'video/youtube';
        videoNode.src = "https://www.youtube.com/watch?v=vTMF6xEiAaY";
      }
    }
    catch (e) {
      alert("URL IS WRONG? orrr you are not connected to the internet?")
    }
  });