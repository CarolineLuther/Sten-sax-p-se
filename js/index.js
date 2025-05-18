function fluff() {
  const alternativ = ["sten", "sax", "påse"];
  const svar = prompt("sten,sax,påse?");
  const dator = alternativ[Math.floor(Math.random() * 3)];
  console.log(svar, dator);
  if (svar === "sten" && dator === "sax") {
    alert("du vann");
  } else if (svar === "sax" && dator === "påse") {
    alert("du vann");
  } else if (svar === "påse" && dator === "sten") {
    alert("du vann");
  } else {
    alert("datorn vann");
  }
}
