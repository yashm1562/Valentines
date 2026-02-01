let counter = 0;

function no() {
  counter++;
  const sadMusic = document.getElementById("sadMusic");
  const happyMusic = document.getElementById("happyMusic");
  
  if (happyMusic) happyMusic.pause();
  if (sadMusic) sadMusic.play().catch(e => console.log("Audio play blocked until user interacts"));

  const model = document.getElementById("model");
  model.style.display = "flex";
  
  const blackmail = ["Please", "I'm begging you", "HUHUHUHU", "I'm gonna cry"];
  document.getElementById("modelText").innerText = blackmail[Math.floor(Math.random() * blackmail.length)];
}

function yes() {
  // Removed the 'counter >= 3' restriction so it works immediately
  const model2 = document.getElementById("model2");
  const model = document.getElementById("model");
  const sadMusic = document.getElementById("sadMusic");
  const happyMusic = document.getElementById("happyMusic");

  if (sadMusic) sadMusic.pause();
  if (happyMusic) happyMusic.play();

  if (model) model.style.display = "none";
  if (model2) model2.style.display = "flex";

  document.getElementById("wedate").innerText = "I love you cutie! ❤️😘";
  document.getElementById("btns").style.display = "none";

  // This opens your floral surprise page
  window.open("index1.html", "_blank");
}

function ly2() {
  document.getElementById("model2").style.display = "none";
}

function normal() {
  document.getElementById("absImg").style.display = "none";
  document.getElementById("mainImg").src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
}

function happy() {
  document.getElementById("absImg").style.display = "flex";
  document.getElementById("mainImg").src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
}

function angry() {
  document.getElementById("absImg").style.display = "flex";
  document.getElementById("mainImg").src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
}
