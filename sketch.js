let xMax = 400;
let yMax = 400;

// posizione del sole
let ySole = 340;

// avanzamento dell'alba
let tempo = 0;

// pausa finale
let attesa = 0;

function setup() {
  createCanvas(xMax,yMax);
  frameRate(30);
}

function draw() {

  // avanzamento dell'alba
  if (tempo < 1) {
    tempo = min(tempo + 0.007, 1);
  } else {
    attesa = attesa + 1;
  }

  // colore del cielo
  if (tempo < 0.5) {
    // dal blu scuro al rosa-aranciato
    background(
      lerp(15, 230, tempo * 2),
      lerp(25, 120, tempo * 2),
      lerp(65, 110, tempo * 2)
    );
  } else {
    // dal rosa-aranciato all'azzurro
    background(
      lerp(230, 135, (tempo - 0.5) * 2),
      lerp(120, 206, (tempo - 0.5) * 2),
      lerp(110, 235, (tempo - 0.5) * 2)
    );
  }

  // stelle, all'alba scompaiono
  noStroke();

  for (let i = 0; i < 70; i++) {
    let starX = (i * 53) % width;
    let starY = (i * 79) % 260;
    let trasparenza = 255 * (1 - tempo);

    fill(255, 255, 220, trasparenza);
    ellipse(starX, starY, 3, 3);
  }

  //luna che si sposta
  let xLuna=75-tempo*180;
  let yLuna=85-tempo*50;
  let trasparenzaLuna=255*(1-tempo);
  fill(255,245,190,trasparenzaLuna);
  ellipse(xLuna,yLuna,48,48);

  //sole
  ySole=340-tempo*220;

  //montagne di sfondo
  fill(90,100,150)
  tiangle(0,340,55,200,150,340);
  tiangle(70,340,195,175,290,340);
  tiangle(290,340,360,195,400,340);

  //neve
  let neve=lerp(170,255,tempo);
   tiangle(0,340,55,200,150,340);
  tiangle(70,340,195,175,290,340);
  tiangle(290,340,360,195,400,340);

  //montange primo piano
  fill(45,60,95);
  triangle(0,330,100,235,210,330);
  tirnagle(150,330,290,220,400,330);

  //base montagne
  fill(25,40,65);
  rect(0,330,width,70);
  
  // pausa finale di 3 secondi
  if (attesa >= 90) {
    tempo = 0;
    attesa = 0;
  }
}


