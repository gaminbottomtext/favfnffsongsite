var changecolor = document.getElementById('changeColor');
var colar = "#df0c0c";

changecolor.addEventListener('click', function() {
    alert("Please enter a color", "red");
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: doclolor,
      });

    doclolor;
    document.body.style.backgroundColor = colar;
});

function doclolor()
{
    chrome.storage.sync.get("color", ({ color }) => {
        changecolor.style.backgroundColor = color;
        document.body.style.backgroundColor = color;
    
      });
      
}