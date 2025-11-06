function sayHello() {
    let child = document.createElement("h1");
     child.innerHTML = "Hey there! ";

     let div = document.getElementById("div");
    div.appendChild(child);
}
