
const buttonContainer = document.getElementById("buttonContainer");
const originalColors = [];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


for (let i = 0; i < 10; i++) {
  const btn = document.createElement("button");
  const color = getRandomColor();

  btn.textContent = `Button ${i + 1}`;
  btn.style.backgroundColor = color;
  btn.style.color = "white";      
  btn.style.margin = "5px";       
  btn.style.padding = "10px 20px"; 

  originalColors.push(color);
  buttonContainer.appendChild(btn);
}


function changeButtonColors(option) {
  const buttons = buttonContainer.querySelectorAll("button");

  buttons.forEach((btn, index) => {
    if (option === "red") btn.style.backgroundColor = "red";
    else if (option === "green") btn.style.backgroundColor = "green";
    else if (option === "blue") btn.style.backgroundColor = "blue";
    else if (option === "random") btn.style.backgroundColor = getRandomColor();
    else if (option === "reset") btn.style.backgroundColor = originalColors[index];
  });
}
