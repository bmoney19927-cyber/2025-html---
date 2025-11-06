let images = document.body.getElementsByTagName("img");
let node = document.createTextNode(images[0].alt);
if(images[0].alt)
images[0].parentNode.replaceChild(node,images[0]);
var btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);

var myobj = document.getElementById("demo");
myobj.remove();