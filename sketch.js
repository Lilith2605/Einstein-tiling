let w = window.innerWidth;
let h = window.innerHeight;
let posx = w/2;
let posy = -h/2;
function setup(){
  //Zeichenfläche anlegen
  createCanvas(w, h);
  //Definition des Parameters a (hier wird die größe der Kacheln festgelegt)
  a  = 30;
  //Berechnen von Hilfsvariablen
  setzeVariablen(a);
}
var rec = true;
function draw(){
  background(220);
  //Verschieben des Bildes
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      posx = posx + mouseX - pmouseX;
      posy = posy - mouseY + pmouseY;
    }
  }
  //notwendige Ordnung berechnen
  let thetaH0 = thetaH(0, groesse);
  let entf = sqrt(thetaH0[0]**2,thetaH0[1]**2);
  let entfor = sqrt((posx-w)**2+posy**2);
  let entfol = sqrt(posx**2+posy**2);
  let entful = sqrt(posx**2+(posy+h)**2);
  let entfur = sqrt((posx-w)**2+(posy+h)**2);
  let maxentf = max(entfor,max(entfol,max(entful,entfur)))
  if(maxentf > entf){
    groesse = groesse+1;
  }
  //Zeichnen des Supertiles
  zeichneH([posx,posy], 0, groesse, [0]);
}
