let ho = window.innerHeight;
let wo = window.innerWidth;
let wr = ho*16/9;
let h;
let w;
let scrl=0;
if(wr<wo){
  h = ho;
  w = h*16/9;
} else {
  w = wo;
  h = w*9/16;
}
let posx = w/2;
let posy = -h/2;
let tex1;
let tex2;
let tex3;
let tex4;
let myFont;
function preload() {
  myFont = loadFont("style/fonts/Roboto-Medium.ttf");
}

function setup(){
    //Zeichenfläche anlegen
    createCanvas(w, h);
    document.getElementsByTagName("canvas")[0].style="left:"+((wo-w)/2)+"px; top:"+((ho-h)/2)+"px; position:absolute;";
    document.body.appendChild(document.createElement("div"));
    fetch('images/diagramm.svg')
  .then(response => response.text())
  .then(svgText => {
    const container = document.body.getElementsByTagName("div")[0];
    container.innerHTML = svgText;

    const svg = container.querySelector('svg');
    svg.setAttribute('viewBox', '0 0 1920 1080');
    svg.setAttribute('height', '1080');
    svg.style="width:"+w+"px;height:"+(h-3)+"px;";
  });
  
    //Definition des Parameters a (hier wird die größe der Kacheln festgelegt)
    slide = 1;
    keyev = Date.now();
    drawsl = true;
    tex1 = createP();
    tex2 = createP();
    tex3 = createP();
    tex4 = createP();
    tex5 = createP();
    tex6 = createP();
    texn1 = createP();
    texn2 = createP();
    texn3 = createP();
    texn4 = createP();
    texn5 = createP();
    texn6 = createP();
    texn7 = createP();
    texn8 = createP();
    texn9 = createP();
    texn10 = createP();
    texn11 = createP();
    texn12 = createP();
    texn13 = createP();
    texn14 = createP();
    s=20*h/1080
    a=s
    textFont(myFont);
    setzeVariablen(a);
    groesse = 1;
    getgroesse();
    img1 = loadImage('images/bild1.svg');
    img2 = loadImage('images/bild2.svg');
    img3 = loadImage('images/bild3.svg');
    img4 = loadImage('images/bild4.svg');
    img5 = loadImage('images/bild8.svg');
    img6 = loadImage('images/bild6.svg');
    img7 = loadImage('images/bild7.svg');
    img8 = loadImage('images/bild14.svg');
    img9 = loadImage('images/bild5.svg');
    img10 = loadImage('images/bild13.svg');
    img11 = loadImage('images/bild9c.svg');
  }
  var rec = true;

  function draw(){
    
    //Verschieben des Bildes
    /*if(mouseIsPressed === true) {
      if(mouseButton === LEFT) {
        posx = posx + mouseX - pmouseX;
        posy = posy - mouseY + pmouseY;
      }
    }*/
    
    
    //Zeichnen des Supertiles
    switch (slide) {
      case 1:
        if(drawsl){
          resetslide(s);
          zeichneH([posx,posy], 0, groesse, [0,255,255,255,255,0,0,0,255,3*s/20]);
          strokeWeight(0);
          fill(255,128);
          rect(0,0,2*posx,-2*posy);
          fill(220);
          rect(posx-46*s, -posy-24.5*s,90*s,16.5*s);
          rect(posx-46*s, -posy+16.5*s,78*s,4.5*s);
          textSize(6.5*s);
          fill(0);
          text('Einstein tiling eine neue', posx-45*s, -posy-19*s);
          text('Entdeckung in der Mathematik', posx-45*s, -posy-10*s);
          textSize(3.5*s);
          text('Facharbeit in Mathematik von Lilith Schröter, 10c', posx-45*s, -posy+20*s);
        }
        break;
      case 2:
        if(drawsl){
          resetslide(s);
          textSize(4.5*s);
          fill(0);
          text('Gliederung', posx-45*s, -posy-21*s);
          textSize(2.5*s);
          text('\n1.1\n1.2\n\n\n\n\n3.1\n3.2\n3.3\n3.4\n\n', posx-45*s, -posy-15*s);
          text('\nPrinzipien der Parkettierung\nPeriodizität und Aperiodizität in der Parkettierung\n\n\n\n\nSupertiles\nRotationen\nZusammensetzung des P-Supertiles\nPositionen im P-Supertile\n\n', posx-39*s, -posy-15*s);
          strokeWeight(3);
          text('1\n\n\n\n2\n\n3\n\n\n\n\n\n4', posx-45*s, -posy-15*s);
          text('Hintergrund und Grundlagen der Parkettierung\n\n\n\nHut-Kachel\n\nVisualisierung des algorithmisch generierten „Einstein tiling“\n\n\n\n\n\nQuellen', posx-39*s, -posy-15*s);
        }
        break;
      case 3:
        if(drawsl){
          resetslide(s);
          textSize(4.5*s);
          fill(0);
          text('Prinzipien der Parkettierung', posx-45*s, -posy-21*s);
          fill(220);
          stroke(0);
          strokeWeight(4);
          rect(posx-46*s, -posy-10*s,90*s,25*s);
          strokeWeight(0);
          fill(0);
          text('Definition', posx-45*s, -posy-6*s);
          textSize(3*s);
          text('Eine Parkettierung bezeichnet eine lückenlose und überlappungs-\nfreie Überdeckung einer unendlichen und ebenen Fläche mit einer \noder einer Kombination von sich wiederholenden geometrischen \nFormen, das sind dann sogenannte Kacheln oder Fließen.', posx-45*s, -posy+1*s);
        }
        break;
      case 4:
        if(drawsl){
          //resetslide(s);
          setzeVariablen(s);
          background(220);
          stroke(1);
          strokeWeight(0);
          drawsl = false;
          fill(220);
          textSize(4.5*s);
          fill(0);
          text('Prinzipien der Parkettierung', posx-45*s, -posy-21*s);
          
          text('Periodizität', posx-35*s, -posy-14*s);
          text('Aperiodizität', posx+13*s, -posy-14*s);
          textSize(2.5*s);
          text('• Verschiebung existiert\n• feste Regelmäßigkeit', posx-45*s, -posy-10*s);
          text('• Verschiebung existiert nicht\n• keine Wiederholung', posx+3*s, -posy-10*s);
          fill(255);
          stroke(0);
          strokeWeight(4);
          line(posx, -posy-19*s,posx, -posy+25*s);
          stroke(255);
          //rect(posx-44*s, -posy+10*s,20*s, 14*s);
          //rect(posx-44*s, -posy-5*s, 20*s, 14*s);
          //rect(posx-22*s, -posy-5*s, 20*s, 14*s);
          //rect(posx-22*s, -posy+10*s,20*s, 14*s);
          //rect(posx+24*s, -posy+10*s,20*s, 14*s);
          //rect(posx+24*s, -posy-5*s, 20*s, 14*s);
          //rect(posx+2*s, -posy-5*s, 20*s, 14*s);
          //rect(posx+2*s, -posy+10*s,20*s, 14*s);
          //image(img5, posx-44*s, -posy-5*s,20*s, 14*s);
          //image(img6, posx-44*s, -posy+10*s,20*s, 14*s);
          //image(img7, posx-22*s, -posy-5*s,20*s, 14*s);
          //image(img8, posx-22*s, -posy+10*s,20*s, 14*s);
          //image(img9, posx+2*s, -posy-5*s,20*s, 14*s);
          //image(img10, posx+2*s, -posy+10*s,20*s, 14*s);
          //image(img11, posx+24*s, -posy-5*s,20*s, 14*s);
        }
        break;
      case 5:
        if(drawsl){
          //resetslide(s);
          setzeVariablen(s);
          background(220);
          stroke(1);
          strokeWeight(0);
          drawsl = false;
          fill(220);
          textSize(4.5*s);
          fill(0);
          text('Prinzipien der Parkettierung', posx-45*s, -posy-21*s);
          
          text('Periodizität', posx-35*s, -posy-14*s);
          text('Aperiodizität', posx+13*s, -posy-14*s);
          textSize(2.5*s);
          text('• Verschiebung existiert\n• feste Regelmäßigkeit', posx-45*s, -posy-10*s);
          text('• Verschiebung existiert nicht\n• keine Wiederholung', posx+3*s, -posy-10*s);
          fill(255);
          stroke(0);
          strokeWeight(4);
          line(posx, -posy-19*s,posx, -posy+25*s);
          stroke(255);
          rect(posx-44*s, -posy+10*s,20*s, 14*s);
          rect(posx-44*s, -posy-5*s, 20*s, 14*s);
          //rect(posx-22*s, -posy-5*s, 20*s, 14*s);
          //rect(posx-22*s, -posy+10*s,20*s, 14*s);
          //rect(posx+24*s, -posy+10*s,20*s, 14*s);
          //rect(posx+24*s, -posy-5*s, 20*s, 14*s);
          //rect(posx+2*s, -posy-5*s, 20*s, 14*s);
          //rect(posx+2*s, -posy+10*s,20*s, 14*s);
          image(img5, posx-44*s, -posy-5*s,20*s, 14*s);
          image(img6, posx-44*s, -posy+10*s,20*s, 14*s);
          //image(img7, posx-22*s, -posy-5*s,20*s, 14*s);
          //image(img8, posx-22*s, -posy+10*s,20*s, 14*s);
          //image(img9, posx+2*s, -posy-5*s,20*s, 14*s);
          //image(img10, posx+2*s, -posy+10*s,20*s, 14*s);
          //image(img11, posx+24*s, -posy-5*s,20*s, 14*s);
        }
        break;
      case 6:
        if(drawsl){
          //resetslide(s);
          setzeVariablen(s);
          background(220);
          stroke(1);
          strokeWeight(0);
          drawsl = false;
          fill(220);
          strokeWeight(0);
          rect(0, 0, posx*2, -posy+10*s);
          rect(0, 0, posx+24*s, -posy*2);
          rect(posx+24*s+20*s, -posy+10*s, posx+24*s, -posy*2);
          rect(posx+24*s, -posy+10*s+14*s, posx*2, -posy+10*s);
          textSize(4.5*s);
          fill(0);
          text('Prinzipien der Parkettierung', posx-45*s, -posy-21*s);
          
          text('Periodizität', posx-35*s, -posy-14*s);
          text('Aperiodizität', posx+13*s, -posy-14*s);
          textSize(2.5*s);
          text('• Verschiebung existiert\n• feste Regelmäßigkeit', posx-45*s, -posy-10*s);
          text('• Verschiebung existiert nicht\n• keine Wiederholung', posx+3*s, -posy-10*s);
          fill(255);
          stroke(0);
          strokeWeight(4);
          line(posx, -posy-19*s,posx, -posy+25*s);
          stroke(255);
          rect(posx-44*s, -posy+10*s,20*s, 14*s);
          rect(posx-44*s, -posy-5*s, 20*s, 14*s);
          rect(posx-22*s, -posy-5*s, 20*s, 14*s);
          rect(posx-22*s, -posy+10*s,20*s, 14*s);
          //rect(posx+24*s, -posy+10*s,20*s, 14*s);
          //rect(posx+24*s, -posy-5*s, 20*s, 14*s);
          rect(posx+2*s, -posy-5*s, 20*s, 14*s);
          rect(posx+2*s, -posy+10*s,20*s, 14*s);
          image(img5, posx-44*s, -posy-5*s,20*s, 14*s);
          image(img6, posx-44*s, -posy+10*s,20*s, 14*s);
          image(img7, posx-22*s, -posy-5*s,20*s, 14*s);
          image(img8, posx-22*s, -posy+10*s,20*s, 14*s);
          image(img9, posx+2*s, -posy-5*s,20*s, 14*s);
          image(img10, posx+2*s, -posy+10*s,20*s, 14*s);
          //image(img11, posx+24*s, -posy-5*s,20*s, 14*s);
        }
        break;
      case 7:
        if(drawsl){
          //resetslide(s);
          setzeVariablen(s);
          background(220);
          stroke(1);
          strokeWeight(0);
          drawsl = false;
          fill(220);
          textSize(4.5*s);
          fill(0);
          text('Prinzipien der Parkettierung', posx-45*s, -posy-21*s);
          
          text('Periodizität', posx-35*s, -posy-14*s);
          text('Aperiodizität', posx+13*s, -posy-14*s);
          textSize(2.5*s);
          text('• Verschiebung existiert\n• feste Regelmäßigkeit', posx-45*s, -posy-10*s);
          text('• Verschiebung existiert nicht\n• keine Wiederholung', posx+3*s, -posy-10*s);
          fill(255);
          stroke(0);
          strokeWeight(4);
          line(posx, -posy-19*s,posx, -posy+25*s);
          stroke(255);
          rect(posx-44*s, -posy+10*s,20*s, 14*s);
          rect(posx-44*s, -posy-5*s, 20*s, 14*s);
          rect(posx-22*s, -posy-5*s, 20*s, 14*s);
          rect(posx-22*s, -posy+10*s,20*s, 14*s);
          //rect(posx+24*s, -posy+10*s,20*s, 14*s);
          rect(posx+24*s, -posy-5*s, 20*s, 14*s);
          rect(posx+2*s, -posy-5*s, 20*s, 14*s);
          rect(posx+2*s, -posy+10*s,20*s, 14*s);
          image(img5, posx-44*s, -posy-5*s,20*s, 14*s);
          image(img6, posx-44*s, -posy+10*s,20*s, 14*s);
          image(img7, posx-22*s, -posy-5*s,20*s, 14*s);
          image(img8, posx-22*s, -posy+10*s,20*s, 14*s);
          image(img9, posx+2*s, -posy-5*s,20*s, 14*s);
          image(img10, posx+2*s, -posy+10*s,20*s, 14*s);
          image(img11, posx+24*s, -posy-5*s,20*s, 14*s);
        }
        break;
      case 8:
        if(drawsl){
          //resetslide(s);
          setzeVariablen(s);
          a=s;
          //background(220);
          stroke(1);
          strokeWeight(0);
          drawsl = false;
          fill(220);
          zeichneH([posx+24*s+10*s,posy-10*s-7*s], 0, 3, [0,255,255,255,255,255,255,255,255,4*s/20]);
          fill(220);
          strokeWeight(0);
          rect(0, 0, posx*2, -posy+10*s);
          rect(0, 0, posx+24*s, -posy*2);
          rect(posx+24*s+20*s, -posy+10*s, posx+24*s, -posy*2);
          rect(posx+24*s, -posy+10*s+14*s, posx*2, -posy+10*s);
          textSize(4.5*s);
          fill(0);
          text('Prinzipien der Parkettierung', posx-45*s, -posy-21*s);
          
          text('Periodizität', posx-35*s, -posy-14*s);
          text('Aperiodizität', posx+13*s, -posy-14*s);
          textSize(2.5*s);
          text('• Verschiebung existiert\n• feste Regelmäßigkeit', posx-45*s, -posy-10*s);
          text('• Verschiebung existiert nicht\n• keine Wiederholung', posx+3*s, -posy-10*s);
          fill(255);
          stroke(0);
          strokeWeight(4);
          line(posx, -posy-19*s,posx, -posy+25*s);
          stroke(255);
          rect(posx-44*s, -posy+10*s,20*s, 14*s);
          rect(posx-44*s, -posy-5*s, 20*s, 14*s);
          rect(posx-22*s, -posy-5*s, 20*s, 14*s);
          rect(posx-22*s, -posy+10*s,20*s, 14*s);
          //rect(posx+24*s, -posy+10*s,20*s, 14*s);
          rect(posx+24*s, -posy-5*s, 20*s, 14*s);
          rect(posx+2*s, -posy-5*s, 20*s, 14*s);
          rect(posx+2*s, -posy+10*s,20*s, 14*s);
          image(img5, posx-44*s, -posy-5*s,20*s, 14*s);
          image(img6, posx-44*s, -posy+10*s,20*s, 14*s);
          image(img7, posx-22*s, -posy-5*s,20*s, 14*s);
          image(img8, posx-22*s, -posy+10*s,20*s, 14*s);
          image(img9, posx+2*s, -posy-5*s,20*s, 14*s);
          image(img10, posx+2*s, -posy+10*s,20*s, 14*s);
          image(img11, posx+24*s, -posy-5*s,20*s, 14*s);
        }
        break;
      case 9:
        if(drawsl){
          resetslide(6.5*s);
          textSize(4.5*s);
          fill(0);
          text('Hut-Kachel', posx-45*s, -posy-21*s);
          textSize(3*s);
          text('David Smith – 2023\n• „Hat“-tile \n  – 13-seitig\n  – leicht asymmetrisch\n  – aus acht Drachenvierecken', posx-45*s, -posy-14*s);
          //image(img1, (posx+22*s), (-posy-25*s), (20*s*100/64), (20*s));
          image(img2, (posx-5*s), (-posy-20*s), (20*s), (20*s));
          //image(img3, (posx+22*s), (-posy-8*s), (25*s*4/5), (25*s));
          //image(img4, (posx+22*s), (-posy+9*s), (25*s*4/5), (25*s));
        }
        break;
      case 10:
        if(drawsl){
          resetslide(6.5*s);
          textSize(4.5*s);
          fill(0);
          text('Hut-Kachel', posx-45*s, -posy-21*s);
          textSize(3*s);
          text('David Smith – 2023\n• „Hat“-tile \n  – 13-seitig\n  – leicht asymmetrisch\n  – aus acht Drachenvierecken \n• „Turtle“-Kachel\n  – veränderte Seitenlängen zur Hut-Kachel', posx-45*s, -posy-14*s);
          image(img1, (posx+22*s), (-posy-25*s), (20*s*100/64), (20*s));
          image(img2, (posx-5*s), (-posy-20*s), (20*s), (20*s));
          //image(img3, (posx+22*s), (-posy-8*s), (25*s*4/5), (25*s));
          //image(img4, (posx+22*s), (-posy+9*s), (25*s*4/5), (25*s));
        }
        break;
      case 11:
        if(drawsl){
          resetslide(6.5*s);
          textSize(4.5*s);
          fill(0);
          text('Hut-Kachel', posx-45*s, -posy-21*s);
          textSize(3*s);
          text('David Smith – 2023\n• „Hat“-tile \n  – 13-seitig\n  – leicht asymmetrisch\n  – aus acht Drachenvierecken \n• „Turtle“-Kachel\n  – veränderte Seitenlängen zur Hut-Kachel\n• „Spectre“-Kachel\n  – „Turtle“-Kacheln mit geschwungenen Seiten\n  – aperiodische Kachelung ohne Spiegelung', posx-45*s, -posy-14*s);
          image(img1, (posx+22*s), (-posy-25*s), (20*s*100/64), (20*s));
          image(img2, (posx-5*s), (-posy-20*s), (20*s), (20*s));
          image(img3, (posx+22*s), (-posy-8*s), (25*s*4/5), (25*s));
          image(img4, (posx+22*s), (-posy+9*s), (25*s*4/5), (25*s));
        }
        break;
      case 12:
        if(drawsl){
          resetslide(s);
          zeichneH([posx,posy], 0, groesse, [0,255,255,255,255,0,0,0,255,3*s/20]);
        }
        break;
      case 13:
        if(drawsl){
          //resetslide(20)
          //zeichneH([posx,posy], 0, groesse, [0,255,255,255,255,0,0,0,255,1*s/20]);
          zeichneH([posx,posy], 0, groesse, [1,255,255,255,125,5*s/20,0]);
          drawsl=false;
        }
        break;
      case 14:
        if(drawsl){
          //resetslide(20)
          //zeichneH([posx,posy], 0, groesse, [0,255,255,255,255,0,0,0,255,1*s/20]);
          //zeichneH([posx,posy], 0, groesse, [1,255,255,255,125,3*s/20,0]);
          zeichneH([posx,posy], 0, groesse, [2,255,255,255,125,7*s/20,0]);
          drawsl=false;
        }
        break;
      case 15:
        if(drawsl){
          //resetslide(20)
          //zeichneH([posx,posy], 0, groesse, [0,255,255,255,255,0,0,0,255,1*s/20]);
          //zeichneH([posx,posy], 0, groesse, [1,255,255,255,125,3*s/20,0]);
          //zeichneH([posx,posy], 0, groesse, [2,255,255,255,125,5,0]);
          zeichneH([posx,posy], 0, groesse, [3,255,255,255,125,9*s/20,0]);
          drawsl = false;
        }
        break;
      case 16:
        if(drawsl){
          resetslide(s);
          textSize(4.5*s);
          fill(0);
          text('Das H-Supertile', posx-45*s, -posy-21*s);
          zeichneH([posx+34*s,posy+s*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('H', posx+32*s+12*s/20, -posy-22*s);
          tex2.style('font-size', ''+(2*s)+'px');
          tex2.position((posx-47*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('H_0^1=', tex2.elt);
          tex3.style('font-size', ''+(2*s)+'px');
          tex3.position((posx-25*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('H_0^2=', tex3.elt);
          tex4.style('font-size', ''+(2*s)+'px');
          tex4.position((posx+1*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('H_0^3=', tex4.elt);
          zeichneH([posx-36*s,posy+1*s], 0, 1, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneH([posx-36*s,posy+1*s], 0, 1, [1,255,255,255,125,5*s/20,0]);
          zeichneH([posx-10*s,posy+1*s], 0, 2, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneH([posx-10*s,posy+1*s], 0, 2, [1,255,255,255,125,5*s/20,0]);
          zeichneH([posx-10*s,posy+1*s], 0, 2, [2,255,255,255,125,7*s/20,0]);
          zeichneH([posx+26*s,posy+1*s], 0, 3, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneH([posx+26*s,posy+1*s], 0, 3, [1,255,255,255,125,5*s/20,0]);
          zeichneH([posx+26*s,posy+1*s], 0, 3, [2,255,255,255,125,7*s/20,0]);
          zeichneH([posx+26*s,posy+1*s], 0, 3, [3,255,255,255,125,9*s/20,0]);
          fill(0);
          p1 = plus([posx-36*s,posy+1*s],sigmaH(0,1));
          p2 = plus([posx-36*s,posy+1*s],sigmaH(1,1));
          p3 = plus([posx-36*s,posy+1*s],sigmaH(2,1));
          p4 = plus([posx-36*s,posy+1*s],rhoH(0,1));
          p5 = plus([posx-36*s,posy+1*s],rhoH(1,1));
          p6 = plus([posx-36*s,posy+1*s],rhoH(2,1));
          p7 = plus([posx-10*s,posy+1*s],sigmaH(0,2));
          p8 = plus([posx-10*s,posy+1*s],sigmaH(1,2));
          p9 = plus([posx-10*s,posy+1*s],sigmaH(2,2));
          p10 = plus([posx-10*s,posy+1*s],rhoH(0,2));
          p11 = plus([posx-10*s,posy+1*s],rhoH(1,2));
          p12 = plus([posx-10*s,posy+1*s],rhoH(2,2));
          p13 = plus([posx+26*s,posy+1*s],sigmaH(0,3));
          p14 = plus([posx+26*s,posy+1*s],sigmaH(1,3));
          p15 = plus([posx+26*s,posy+1*s],sigmaH(2,3));
          p16 = plus([posx+26*s,posy+1*s],rhoH(0,3));
          p17 = plus([posx+26*s,posy+1*s],rhoH(1,3));
          p18 = plus([posx+26*s,posy+1*s],rhoH(2,3));
          circle(p1[0],-p1[1],8*s/20);
          circle(p2[0],-p2[1],8*s/20);
          circle(p3[0],-p3[1],8*s/20);
          circle(p4[0],-p4[1],8*s/20);
          circle(p5[0],-p5[1],8*s/20);
          circle(p6[0],-p6[1],8*s/20);
          circle(p7[0],-p7[1],11*s/20);
          circle(p8[0],-p8[1],11*s/20);
          circle(p9[0],-p9[1],11*s/20);
          circle(p10[0],-p10[1],11*s/20);
          circle(p11[0],-p11[1],11*s/20);
          circle(p12[0],-p12[1],11*s/20);
          circle(p13[0],-p13[1],14*s/20);
          circle(p14[0],-p14[1],14*s/20);
          circle(p15[0],-p15[1],14*s/20);
          circle(p16[0],-p16[1],14*s/20);
          circle(p17[0],-p17[1],14*s/20);
          circle(p18[0],-p18[1],14*s/20);

          texn1.style('font-size', ''+(s*1.5)+'px');
          texn1.position((p7[0])+((wo-w)/2), (-p7[1]-2.5*s)+((ho-h)/2));
          katex.render('\\sigma_0^{H,1}', texn1.elt);
          texn2.style('font-size', ''+(s*1.5)+'px');
          texn2.position((p8[0]-3.5*s)+((wo-w)/2), (-p8[1])+((ho-h)/2));
          katex.render('\\sigma_1^{H,1}', texn2.elt);
          texn3.style('font-size', ''+(s*1.5)+'px');
          texn3.position((p9[0])+((wo-w)/2), (-p9[1])+((ho-h)/2));
          katex.render('\\sigma_2^{H,1}', texn3.elt);
          texn4.style('font-size', ''+(s*1.5)+'px');
          texn4.position((p10[0])+((wo-w)/2), (-p10[1]-2.5*s)+((ho-h)/2));
          katex.render('\\varrho_0^{H,1}', texn4.elt);
          texn5.style('font-size', ''+(s*1.5)+'px');
          texn5.position((p11[0]-3.5*s)+((wo-w)/2), (-p11[1]-s)+((ho-h)/2));
          katex.render('\\varrho_1^{H,1}', texn5.elt);
          texn6.style('font-size', ''+(s*1.5)+'px');
          texn6.position((p12[0])+((wo-w)/2), (-p12[1])+((ho-h)/2));
          katex.render('\\varrho_2^{H,1}', texn6.elt);
          texn7.style('font-size', ''+(s*1.5)+'px');
          texn7.position((p13[0])+((wo-w)/2), (-p13[1]-2.5*s)+((ho-h)/2));
          katex.render('\\sigma_0^{H,2}', texn7.elt);
          texn8.style('font-size', ''+(s*1.5)+'px');
          texn8.position((p14[0]-3.5*s)+((wo-w)/2), (-p14[1])+((ho-h)/2));
          katex.render('\\sigma_1^{H,2}', texn8.elt);
          texn9.style('font-size', ''+(s*1.5)+'px');
          texn9.position((p15[0])+((wo-w)/2), (-p15[1])+((ho-h)/2));
          katex.render('\\sigma_2^{H,2}', texn9.elt);
          texn10.style('font-size', ''+(s*1.5)+'px');
          texn10.position((p16[0])+((wo-w)/2), (-p16[1]-2.5*s)+((ho-h)/2));
          katex.render('\\varrho_0^{H,2}', texn10.elt);
          texn11.style('font-size', ''+(s*1.5)+'px');
          texn11.position((p17[0]-3.5*s)+((wo-w)/2), (-p17[1])+((ho-h)/2));
          katex.render('\\varrho_1^{H,2}', texn11.elt);
          texn12.style('font-size', ''+(s*1.5)+'px');
          texn12.position((p18[0])+((wo-w)/2), (-p18[1])+((ho-h)/2));
          katex.render('\\varrho_2^{H,2}', texn12.elt);
        }
        break;
      case 17:
        if(drawsl){
          resetslide(s);
          textSize(4.5*s);
          fill(0);
          text('Das T-Supertile', posx-45*s, -posy-21*s);
          zeichneT([posx+39*s,posy+s*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(2.5*s);
          strokeWeight(0);
          fill(0);
          text('T', posx+38*s+5, -posy-22*s);
          zeichneH([posx+34*s,posy+s*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('H', posx+32*s+12, -posy-22*s);
          tex2.style('font-size', ''+(2*s)+'px');
          tex2.position((posx-44*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('T_0^1=', tex2.elt);
          tex3.style('font-size', ''+(2*s)+'px');
          tex3.position((posx-22*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('T_0^2=', tex3.elt);
          tex4.style('font-size', ''+(2*s)+'px');
          tex4.position((posx+5*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('T_0^3=', tex4.elt);
          zeichneT([posx-36*s,posy+1*s], 0, 1, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneT([posx-36*s,posy+1*s], 0, 1, [1,255,255,255,125,3*s/20,0]);
          zeichneT([posx-10*s,posy+1*s], 0, 2, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneT([posx-10*s,posy+1*s], 0, 2, [1,255,255,255,125,5*s/20,0]);
          zeichneT([posx-10*s,posy+1*s], 0, 2, [2,255,255,255,125,7*s/20,0]);
          zeichneT([posx+26*s,posy+1*s], 0, 3, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneT([posx+26*s,posy+1*s], 0, 3, [1,255,255,255,125,5*s/20,0]);
          zeichneT([posx+26*s,posy+1*s], 0, 3, [2,255,255,255,125,7*s/20,0]);
          zeichneT([posx+26*s,posy+1*s], 0, 3, [3,255,255,255,125,9*s/20,0]);
          fill(0);
          p4 = plus([posx-36*s,posy+1*s],rhoT(0,1));
          p5 = plus([posx-36*s,posy+1*s],rhoT(1,1));
          p6 = plus([posx-36*s,posy+1*s],rhoT(2,1));
          p10 = plus([posx-10*s,posy+1*s],rhoT(0,2));
          p11 = plus([posx-10*s,posy+1*s],rhoT(1,2));
          p12 = plus([posx-10*s,posy+1*s],rhoT(2,2));
          p16 = plus([posx+26*s,posy+1*s],rhoT(0,3));
          p17 = plus([posx+26*s,posy+1*s],rhoT(1,3));
          p18 = plus([posx+26*s,posy+1*s],rhoT(2,3));
          circle(p4[0],-p4[1],8*s/20);
          circle(p5[0],-p5[1],8*s/20);
          circle(p6[0],-p6[1],8*s/20);
          circle(p10[0],-p10[1],11*s/20);
          circle(p11[0],-p11[1],11*s/20);
          circle(p12[0],-p12[1],11*s/20);
          circle(p16[0],-p16[1],14*s/20);
          circle(p17[0],-p17[1],14*s/20);
          circle(p18[0],-p18[1],14*s/20);
          texn4.style('font-size', ''+(s*1.5)+'px');
          texn4.position((p10[0]+1*s)+((wo-w)/2), (-p10[1]-0.5*s)+((ho-h)/2));
          katex.render('\\varrho_0^{T,1}', texn4.elt);
          texn5.style('font-size', ''+(s*1.5)+'px');
          texn5.position((p11[0]-2*s)+((wo-w)/2), (-p11[1]-3.5*s)+((ho-h)/2));
          katex.render('\\varrho_1^{T,1}', texn5.elt);
          texn6.style('font-size', ''+(s*1.5)+'px');
          texn6.position((p12[0]+1.5*s)+((wo-w)/2), (-p12[1]-0.5*s)+((ho-h)/2));
          katex.render('\\varrho_2^{T,1}', texn6.elt);
          texn10.style('font-size', ''+(s*1.5)+'px');
          texn10.position((p16[0])+((wo-w)/2), (-p16[1]-2.5*s)+((ho-h)/2));
          katex.render('\\varrho_0^{T,2}', texn10.elt);
          texn11.style('font-size', ''+(s*1.5)+'px');
          texn11.position((p17[0]-3.5*s)+((wo-w)/2), (-p17[1])+((ho-h)/2));
          katex.render('\\varrho_1^{T,2}', texn11.elt);
          texn12.style('font-size', ''+(s*1.5)+'px');
          texn12.position((p18[0])+((wo-w)/2), (-p18[1])+((ho-h)/2));
          katex.render('\\varrho_2^{T,2}', texn12.elt);
        }
        break;
      case 18:
        if(drawsl){
          resetslide(s);
          textSize(4.5*s);
          fill(0);
          text('Das F-Supertile', posx-45*s, -posy-21*s);
          zeichneF([posx+42*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('F', posx+41*s, -posy-22*s);
          zeichneT([posx+39*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(2.5*s);
          strokeWeight(0);
          fill(0);
          text('T', posx+38*s+5, -posy-22*s);
          zeichneH([posx+34*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('H', posx+32*s+12, -posy-22*s);
          tex2.style('font-size', ''+(2*s)+'px');
          tex2.position((posx-45*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('F_0^1=', tex2.elt);
          tex3.style('font-size', ''+(2*s)+'px');
          tex3.position((posx-21*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('F_0^2=', tex3.elt);
          tex4.style('font-size', ''+(2*s)+'px');
          tex4.position((posx+8*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('F_0^3=', tex4.elt);
          zeichneF([posx-36*s,posy+1*s], 0, 1, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneF([posx-36*s,posy+1*s], 0, 1, [1,255,255,255,125,5*s/20,0]);
          zeichneF([posx-10*s,posy+1*s], 0, 2, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneF([posx-10*s,posy+1*s], 0, 2, [1,255,255,255,125,5*s/20,0]);
          zeichneF([posx-10*s,posy+1*s], 0, 2, [2,255,255,255,125,7*s/20,0]);
          zeichneF([posx+26*s,posy+1*s], 0, 3, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneF([posx+26*s,posy+1*s], 0, 3, [1,255,255,255,125,5*s/20,0]);
          zeichneF([posx+26*s,posy+1*s], 0, 3, [2,255,255,255,125,7*s/20,0]);
          zeichneF([posx+26*s,posy+1*s], 0, 3, [3,255,255,255,125,9*s/20,0]);
          fill(0);
          p1 = plus([posx-36*s,posy+1*s],sigmaF(0,1));
          p2 = plus([posx-36*s,posy+1*s],muF(1));
          p19 = plus([posx-36*s,posy+1*s],nuF(1));
          p3 = plus([posx-36*s,posy+1*s],tauF(0,1));
          p4 = plus([posx-36*s,posy+1*s],tauF(1,1));
          p5 = plus([posx-36*s,posy+1*s],rhoF(0,1));
          p6 = plus([posx-36*s,posy+1*s],rhoF(1,1));
          p7 = plus([posx-10*s,posy+1*s],sigmaF(0,2));
          p8 = plus([posx-10*s,posy+1*s],muF(2));
          p20 = plus([posx-10*s,posy+1*s],nuF(2));
          p9 = plus([posx-10*s,posy+1*s],tauF(0,2));
          p10 = plus([posx-10*s,posy+1*s],tauF(1,2));
          p11 = plus([posx-10*s,posy+1*s],rhoF(0,2));
          p12 = plus([posx-10*s,posy+1*s],rhoF(1,2));
          p13 = plus([posx+26*s,posy+1*s],sigmaF(0,3));
          p14 = plus([posx+26*s,posy+1*s],muF(3));
          p21 = plus([posx+26*s,posy+1*s],nuF(3));
          p15 = plus([posx+26*s,posy+1*s],tauF(0,3));
          p16 = plus([posx+26*s,posy+1*s],tauF(1,3));
          p17 = plus([posx+26*s,posy+1*s],rhoF(0,3));
          p18 = plus([posx+26*s,posy+1*s],rhoF(1,3));
          circle(p1[0],-p1[1],8*s/20);
          circle(p2[0],-p2[1],8*s/20);
          circle(p3[0],-p3[1],8*s/20);
          circle(p4[0],-p4[1],8*s/20);
          circle(p5[0],-p5[1],8*s/20);
          circle(p6[0],-p6[1],8*s/20);
          circle(p7[0],-p7[1],11*s/20);
          circle(p8[0],-p8[1],11*s/20);
          circle(p9[0],-p9[1],11*s/20);
          circle(p10[0],-p10[1],11*s/20);
          circle(p11[0],-p11[1],11*s/20);
          circle(p12[0],-p12[1],11*s/20);
          circle(p13[0],-p13[1],14*s/20);
          circle(p14[0],-p14[1],14*s/20);
          circle(p15[0],-p15[1],14*s/20);
          circle(p16[0],-p16[1],14*s/20);
          circle(p17[0],-p17[1],14*s/20);
          circle(p18[0],-p18[1],14*s/20);
          circle(p19[0],-p19[1],8*s/20);
          circle(p20[0],-p20[1],11*s/20);
          circle(p21[0],-p21[1],14*s/20);

          texn1.style('font-size', ''+(s*1.5)+'px');
          texn1.position((p7[0]-4.5*s)+((wo-w)/2), (-p7[1]-1*s)+((ho-h)/2));
          katex.render('\\sigma_0^{F,1}', texn1.elt);
          texn2.style('font-size', ''+(s*1.5)+'px');
          texn2.position((p8[0])+((wo-w)/2), (-p8[1]-2.5*s)+((ho-h)/2));
          katex.render('\\mu^{F,1}', texn2.elt);
          texn3.style('font-size', ''+(s*1.5)+'px');
          texn3.position((p9[0])+((wo-w)/2), (-p9[1])+((ho-h)/2));
          katex.render('\\tau_0^{F,1}', texn3.elt);
          texn4.style('font-size', ''+(s*1.5)+'px');
          texn4.position((p10[0])+((wo-w)/2), (-p10[1]-2.5*s)+((ho-h)/2));
          katex.render('\\tau_1^{F,1}', texn4.elt);
          texn5.style('font-size', ''+(s*1.5)+'px');
          texn5.position((p11[0])+((wo-w)/2), (-p11[1])+((ho-h)/2));
          katex.render('\\varrho_0^{F,1}', texn5.elt);
          texn6.style('font-size', ''+(s*1.5)+'px');
          texn6.position((p12[0]-3.5*s)+((wo-w)/2), (-p12[1])+((ho-h)/2));
          katex.render('\\varrho_1^{F,1}', texn6.elt);
          texn7.style('font-size', ''+(s*1.5)+'px');
          texn7.position((p13[0]-2*s)+((wo-w)/2), (-p13[1]+0.5*s)+((ho-h)/2));
          katex.render('\\sigma_0^{F,2}', texn7.elt);
          texn8.style('font-size', ''+(s*1.5)+'px');
          texn8.position((p14[0])+((wo-w)/2), (-p14[1]-2.5*s)+((ho-h)/2));
          katex.render('\\mu^{F,2}', texn8.elt);
          texn9.style('font-size', ''+(s*1.5)+'px');
          texn9.position((p15[0])+((wo-w)/2), (-p15[1])+((ho-h)/2));
          katex.render('\\tau_0^{F,2}', texn9.elt);
          texn10.style('font-size', ''+(s*1.5)+'px');
          texn10.position((p16[0])+((wo-w)/2), (-p16[1]-2.5*s)+((ho-h)/2));
          katex.render('\\tau_1^{F,2}', texn10.elt);
          texn11.style('font-size', ''+(s*1.5)+'px');
          texn11.position((p17[0]+0.5*s)+((wo-w)/2), (-p17[1]-1*s)+((ho-h)/2));
          katex.render('\\varrho_0^{F,2}', texn11.elt);
          texn12.style('font-size', ''+(s*1.5)+'px');
          texn12.position((p18[0]-3.5*s)+((wo-w)/2), (-p18[1])+((ho-h)/2));
          katex.render('\\varrho_1^{F,2}', texn12.elt);
          texn13.style('font-size', ''+(s*1.5)+'px');
          texn13.position((p20[0])+((wo-w)/2), (-p20[1])+((ho-h)/2));
          katex.render('\\nu^{F,2}', texn13.elt);
          texn14.style('font-size', ''+(s*1.5)+'px');
          texn14.position((p21[0])+((wo-w)/2), (-p21[1])+((ho-h)/2));
          katex.render('\\nu^{F,2}', texn14.elt);
        }
        break;
      case 19:
        if(drawsl){
          resetslide(s);
          textSize(4.5*s);
          fill(0);
          text('Das P-Supertile', posx-45*s, -posy-21*s);
          zeichneP([posx+45*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('P', posx+44*s, -posy-22*s);
          zeichneF([posx+42*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('F', posx+41*s, -posy-22*s);
          zeichneT([posx+39*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(2.5*s);
          strokeWeight(0);
          fill(0);
          text('T', posx+38*s+5, -posy-22*s);
          zeichneH([posx+34*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('H', posx+32*s+12, -posy-22*s);
          tex2.style('font-size', ''+(2*s)+'px');
          tex2.position((posx-45*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('P_0^1=', tex2.elt);
          tex3.style('font-size', ''+(2*s)+'px');
          tex3.position((posx-21*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('P_0^2=', tex3.elt);
          tex4.style('font-size', ''+(2*s)+'px');
          tex4.position((posx+8*s)+((wo-w)/2), (-posy-2.5*s)+((ho-h)/2));
          katex.render('P_0^3=', tex4.elt);
          zeichneP([posx-36*s,posy+1*s], 0, 1, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneP([posx-36*s,posy+1*s], 0, 1, [1,255,255,255,125,5*s/20,0]);
          zeichneP([posx-10*s,posy+1*s], 0, 2, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneP([posx-10*s,posy+1*s], 0, 2, [1,255,255,255,125,5*s/20,0]);
          zeichneP([posx-10*s,posy+1*s], 0, 2, [2,255,255,255,125,7*s/20,0]);
          zeichneP([posx+26*s,posy+1*s], 0, 3, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneP([posx+26*s,posy+1*s], 0, 3, [1,255,255,255,125,5*s/20,0]);
          zeichneP([posx+26*s,posy+1*s], 0, 3, [2,255,255,255,125,7*s/20,0]);
          zeichneP([posx+26*s,posy+1*s], 0, 3, [3,255,255,255,125,9*s/20,0]);
          fill(0);
          p1 = plus([posx-36*s,posy+1*s],sigmaP(0,1));
          p2 = plus([posx-36*s,posy+1*s],sigmaP(1,1));
          p3 = plus([posx-36*s,posy+1*s],tauP(0,1));
          p4 = plus([posx-36*s,posy+1*s],tauP(1,1));
          p5 = plus([posx-36*s,posy+1*s],rhoP(0,1));
          p6 = plus([posx-36*s,posy+1*s],rhoP(1,1));
          p7 = plus([posx-10*s,posy+1*s],sigmaP(0,2));
          p8 = plus([posx-10*s,posy+1*s],sigmaP(1,2));
          p9 = plus([posx-10*s,posy+1*s],tauP(0,2));
          p10 = plus([posx-10*s,posy+1*s],tauP(1,2));
          p11 = plus([posx-10*s,posy+1*s],rhoP(0,2));
          p12 = plus([posx-10*s,posy+1*s],rhoP(1,2));
          p13 = plus([posx+26*s,posy+1*s],sigmaP(0,3));
          p14 = plus([posx+26*s,posy+1*s],sigmaP(1,3));
          p15 = plus([posx+26*s,posy+1*s],tauP(0,3));
          p16 = plus([posx+26*s,posy+1*s],tauP(1,3));
          p17 = plus([posx+26*s,posy+1*s],rhoP(0,3));
          p18 = plus([posx+26*s,posy+1*s],rhoP(1,3));
          circle(p1[0],-p1[1],8*s/20);
          circle(p2[0],-p2[1],8*s/20);
          circle(p3[0],-p3[1],8*s/20);
          circle(p4[0],-p4[1],8*s/20);
          circle(p5[0],-p5[1],8*s/20);
          circle(p6[0],-p6[1],8*s/20);
          circle(p7[0],-p7[1],11*s/20);
          circle(p8[0],-p8[1],11*s/20);
          circle(p9[0],-p9[1],11*s/20);
          circle(p10[0],-p10[1],11*s/20);
          circle(p11[0],-p11[1],11*s/20);
          circle(p12[0],-p12[1],11*s/20);
          circle(p13[0],-p13[1],14*s/20);
          circle(p14[0],-p14[1],14*s/20);
          circle(p15[0],-p15[1],14*s/20);
          circle(p16[0],-p16[1],14*s/20);
          circle(p17[0],-p17[1],14*s/20);
          circle(p18[0],-p18[1],14*s/20);

          texn1.style('font-size', ''+(s*1.5)+'px');
          texn1.position((p7[0]-4.5*s)+((wo-w)/2), (-p7[1]-1*s)+((ho-h)/2));
          katex.render('\\sigma_0^{P,1}', texn1.elt);
          texn2.style('font-size', ''+(s*1.5)+'px');
          texn2.position((p8[0]+1*s)+((wo-w)/2), (-p8[1]-1*s)+((ho-h)/2));
          katex.render('\\sigma_1^{P,1}', texn2.elt);
          texn3.style('font-size', ''+(s*1.5)+'px');
          texn3.position((p9[0])+((wo-w)/2), (-p9[1])+((ho-h)/2));
          katex.render('\\tau_0^{P,1}', texn3.elt);
          texn4.style('font-size', ''+(s*1.5)+'px');
          texn4.position((p10[0])+((wo-w)/2), (-p10[1]-2.5*s)+((ho-h)/2));
          katex.render('\\tau_1^{P,1}', texn4.elt);
          texn5.style('font-size', ''+(s*1.5)+'px');
          texn5.position((p11[0])+((wo-w)/2), (-p11[1])+((ho-h)/2));
          katex.render('\\varrho_0^{P,1}', texn5.elt);
          texn6.style('font-size', ''+(s*1.5)+'px');
          texn6.position((p12[0]-3.5*s)+((wo-w)/2), (-p12[1])+((ho-h)/2));
          katex.render('\\varrho_1^{P,1}', texn6.elt);
          texn7.style('font-size', ''+(s*1.5)+'px');
          texn7.position((p13[0]-2*s)+((wo-w)/2), (-p13[1]+0.5*s)+((ho-h)/2));
          katex.render('\\sigma_0^{P,2}', texn7.elt);
          texn8.style('font-size', ''+(s*1.5)+'px');
          texn8.position((p14[0]-0.5*s)+((wo-w)/2), (-p14[1]-2.5*s)+((ho-h)/2));
          katex.render('\\sigma_1^{P,2}', texn8.elt);
          texn9.style('font-size', ''+(s*1.5)+'px');
          texn9.position((p15[0])+((wo-w)/2), (-p15[1])+((ho-h)/2));
          katex.render('\\tau_0^{P,2}', texn9.elt);
          texn10.style('font-size', ''+(s*1.5)+'px');
          texn10.position((p16[0])+((wo-w)/2), (-p16[1]-2.5*s)+((ho-h)/2));
          katex.render('\\tau_1^{P,2}', texn10.elt);
          texn11.style('font-size', ''+(s*1.5)+'px');
          texn11.position((p17[0]+0.5*s)+((wo-w)/2), (-p17[1]-1*s)+((ho-h)/2));
          katex.render('\\varrho_0^{P,2}', texn11.elt);
          texn12.style('font-size', ''+(s*1.5)+'px');
          texn12.position((p18[0]-3.5*s)+((wo-w)/2), (-p18[1])+((ho-h)/2));
          katex.render('\\varrho_1^{P,2}', texn12.elt);
        }
        break;
      case 20:
        if(drawsl){
          resetslide(s);
          textSize(4.5*s);
          fill(0);
          text('Rotationen', posx-45*s, -posy-21*s);
          zeichneP([posx+45*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('P', posx+44*s, -posy-22*s);
          zeichneF([posx+42*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('F', posx+41*s, -posy-22*s);
          zeichneT([posx+39*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(2.5*s);
          strokeWeight(0);
          fill(0);
          text('T', posx+38*s+5, -posy-22*s);
          zeichneH([posx+34*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('H', posx+32*s+12, -posy-22*s);
          tex1.style('font-size', ''+(2*s)+'px');
          tex1.position((posx-36*s)+((wo-w)/2), (-posy-7.5*s)+((ho-h)/2));
          katex.render('F_0^2=', tex1.elt);
          tex2.style('font-size', ''+(2*s)+'px');
          tex2.position((posx-18*s)+((wo-w)/2), (-posy-7.5*s)+((ho-h)/2));
          katex.render('RF_0^2=F_1^2=', tex2.elt);
          tex3.style('font-size', ''+(2*s)+'px');
          tex3.position((posx+13*s)+((wo-w)/2), (-posy-7.5*s)+((ho-h)/2));
          katex.render('R^2F_0^2=F_2^2=', tex3.elt);
          tex4.style('font-size', ''+(2*s)+'px');
          tex4.position((posx-45*s)+((wo-w)/2), (-posy+10.5*s)+((ho-h)/2));
          katex.render('R^3F_0^2=F_3^2=', tex4.elt);
          tex5.style('font-size', ''+(2*s)+'px');
          tex5.position((posx-18*s)+((wo-w)/2), (-posy+10.5*s)+((ho-h)/2));
          katex.render('R^4F_0^2=F_4^2=', tex5.elt);
          tex6.style('font-size', ''+(2*s)+'px');
          tex6.position((posx+13*s)+((wo-w)/2), (-posy+10.5*s)+((ho-h)/2));
          katex.render('R^5F_0^2=F_5^2=', tex6.elt);
          zeichneF([posx-26*s,posy+8*s], 0, 2, [2,255,255,255,125,5,0]);
          zeichneF([posx+3*s,posy+8*s], 1, 2, [2,255,255,255,125,5,0]);
          zeichneF([posx+36*s,posy+8*s], 2, 2, [2,255,255,255,125,5,0]);
          zeichneF([posx-26*s,posy-10*s], 3, 2, [2,255,255,255,125,5,0]);
          zeichneF([posx+3*s,posy-10*s], 4, 2, [2,255,255,255,125,5,0]);
          zeichneF([posx+36*s,posy-10*s], 5, 2, [2,255,255,255,125,5,0]);
        }
        break;
      case 21:
        if(drawsl){
          resetslide(s);
          textSize(4.5*s);
          fill(0);
          text('Zusammensetzung des P-Supertiles', posx-45*s, -posy-21*s);
          zeichneP([posx+45*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('P', posx+44*s, -posy-22*s);
          zeichneF([posx+42*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('F', posx+41*s, -posy-22*s);
          zeichneT([posx+39*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(2.5*s);
          strokeWeight(0);
          fill(0);
          text('T', posx+38*s+5, -posy-22*s);
          zeichneH([posx+34*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('H', posx+32*s+12, -posy-22*s);
          zeichneP([posx+33*s,posy], 0, 3, [0,255,255,255,255,0,0,0,255,3*s/20]);
          zeichneP([posx+13*s,posy], 0, 3, [1,255,255,255,125,5*s/20,0]);
          zeichneP([posx-7*s,posy], 0, 3, [2,255,255,255,125,7*s/20,0]);
          zeichneP([posx-32*s,posy], 0, 3, [3,255,255,255,125,7,0]);
          tex2.style('font-size', ''+(2*s)+'px');
          tex2.position((posx+2*a)+((wo-w)/2), (-posy-0.5*s)+((ho-h)/2));
          katex.render('\\stackrel{\\scriptscriptstyle\\wedge}{=}', tex2.elt);
          tex3.style('font-size', ''+(2*s)+'px');
          tex3.position((posx+22*a)+((wo-w)/2), (-posy-0.5*s)+((ho-h)/2));
          katex.render('\\stackrel{\\scriptscriptstyle\\wedge}{=}', tex3.elt);
          tex4.style('font-size', ''+(2*s)+'px');
          tex4.position((posx-19*a)+((wo-w)/2), (-posy-0.5*s)+((ho-h)/2));
          katex.render('=', tex4.elt);
        }
        break;
      case 22:
        if(drawsl){
          resetslide(s);
          textSize(4.5*s);
          fill(0);
          text('Zusammensetzung des P-Supertiles', posx-45*s, -posy-21*s);
          zeichneP([posx+45*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('P', posx+44*s, -posy-22*s);
          zeichneF([posx+42*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('F', posx+41*s, -posy-22*s);
          zeichneT([posx+39*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(2.5*s);
          strokeWeight(0);
          fill(0);
          text('T', posx+38*s+5, -posy-22*s);
          zeichneH([posx+34*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('H', posx+32*s+12, -posy-22*s);
          //zeichneP([posx+33*s,posy], 0, 3, [0,255,255,255,255,0,0,0,255,1*s/20]);
          zeichneP([posx+33*s,posy], 1, 2, [0,0,0,255,255,0,0,0,255,3]);
          zeichneH(plus([posx+33*s,posy],etaP(1,3)), 2, 2, [0,2,147,134,255,0,0,0,255,3]);
          zeichneH(plus([posx+33*s,posy],etaP(0,3)), 1, 2, [0,255,0,255,255,0,0,0,255,3]);
          zeichneF(plus([posx+33*s,posy],phiP(1,3)), 2, 2, [0,141,199,62,255,0,0,0,255,3]);
          zeichneF(plus([posx+33*s,posy],phiP(0,3)), 5, 2, [0,255,0,0,255,0,0,0,255,3]);
          //zeichneP([posx+13*s,posy], 0, 3, [1,255,255,255,125,3]);
          zeichneP([posx+13*s,posy], 1, 2, [1,0,0,255,255,5,0]);
          zeichneH(plus([posx+13*s,posy],etaP(1,3)), 2, 2, [1,2,147,134,255,5,0]);
          zeichneH(plus([posx+13*s,posy],etaP(0,3)), 1, 2, [1,255,0,255,255,5,0]);
          zeichneF(plus([posx+13*s,posy],phiP(1,3)), 2, 2, [1,141,199,62,255,5,0]);
          zeichneF(plus([posx+13*s,posy],phiP(0,3)), 5, 2, [1,255,0,0,255,5,0]);
          //zeichneP([posx-7*s,posy], 0, 3, [2,255,255,255,125,5]);
          zeichneP([posx-7*s,posy], 1, 2, [2,0,0,255,255,7,0]);
          zeichneH(plus([posx-7*s,posy],etaP(1,3)), 2, 2, [2,2,147,134,255,7,0]);
          zeichneH(plus([posx-7*s,posy],etaP(0,3)), 1, 2, [2,255,0,255,255,7,0]);
          zeichneF(plus([posx-7*s,posy],phiP(1,3)), 2, 2, [2,141,199,62,255,7,0]);
          zeichneF(plus([posx-7*s,posy],phiP(0,3)), 5, 2, [2,255,0,0,255,7,0]);
          zeichneP([posx-32*s,posy], 0, 3, [3,255,255,255,255,7,0]);
          textSize(4.5*s);
          fill(0);
          //text('≙', posx+a, -posy);
          //text('≙', posx+21*s, -posy);
          //text('=', posx-20*s, -posy);
          tex1.style('font-size', ''+(2*s)+'px');
          tex1.position((posx-33*a)+((wo-w)/2), (-2*posy-5*a)+((ho-h)/2));
          katex.render('P_0^s=\\textcolor{blue}{P_{1}^{s-1}}+\\textcolor{teal}{\\eta_0^{P,s}H_{1}^{s-1}}+\\textcolor{magenta}{R^{3}\\eta_0^{P,s}H_{2}^{s-1}}+\\textcolor{red}{\\varphi_0^{P,s}F_{5}^{s-1}}+\\textcolor{limegreen}{R^{3}\\varphi_0^{P,s}F_{2}^{s-1}}', tex1.elt);
          tex2.style('font-size', ''+(2*s)+'px');
          tex2.position((posx+2*a)+((wo-w)/2), (-posy-0.5*s)+((ho-h)/2));
          katex.render('\\stackrel{\\scriptscriptstyle\\wedge}{=}', tex2.elt);
          tex3.style('font-size', ''+(2*s)+'px');
          tex3.position((posx+22*a)+((wo-w)/2), (-posy-0.5*s)+((ho-h)/2));
          katex.render('\\stackrel{\\scriptscriptstyle\\wedge}{=}', tex3.elt);
          tex4.style('font-size', ''+(2*s)+'px');
          tex4.position((posx-19*a)+((wo-w)/2), (-posy-0.5*s)+((ho-h)/2));
          katex.render('=', tex4.elt);
        }
        break;
      case 23:
        if(drawsl){
          resetslide(1.5*s);
          a=s;
          setzeVariablen(s);
          textSize(4.5*s);
          fill(0);
          text('Positionen im P-Supertile', posx-45*s, -posy-21*s);
          zeichneP([posx+45*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('P', posx+44*s, -posy-22*s);
          zeichneF([posx+42*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('F', posx+41*s, -posy-22*s);
          zeichneT([posx+39*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(2.5*s);
          strokeWeight(0);
          fill(0);
          text('T', posx+38*s+5, -posy-22*s);
          zeichneH([posx+34*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('H', posx+32*s+12, -posy-22*s);
          a=1.5*s
          setzeVariablen(1.5*s);
          zeichneP([posx+20*a,posy+6*a], 1, 2, [0,200,200,255,255,180,180,180,255,4*s/20]);
          zeichneH(plus([posx+20*a,posy+6*a],etaP(0,3)), 1, 2, [0,255,200,255,255,180,180,180,255,4*s/20]);
          zeichneF(plus([posx+20*a,posy+6*a],phiP(0,3)), 5, 2, [0,255,200,200,255,180,180,180,255,4*s/20]);
          
          drawArrow([posx+20*a,posy+6*a], plus([posx+20*a,posy+6*a],etaP(0,3)),[7*s/20,10*s/20,141,199,62]);
          drawArrow([posx+20*a,posy+6*a], plus([posx+20*a,posy+6*a],rot(rhoP(1,2),1)),[7*s/20,10*s/20,255,0,0]);
          drawArrow(plus([posx+20*a,posy+6*a],rot(rhoP(1,2),1)), plus([posx+20*a,posy+6*a],etaP(0,3)),[7*s/20,10*s/20,0,0,255]);
          //drawArrow(plus([posx+20*a,posy+6*a],etaP(0,3)),plus(plus([posx+20*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),[4*s/20,10*s/20,0,0,0]);
          //drawArrow(plus(plus([posx+20*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),plus([posx+20*a,posy+6*a],phiP(0,3)),[4*s/20,10*s/20,0,0,0]);
          //drawArrow(plus([posx+20*a,posy+6*a],phiP(0,3)),plus(plus([posx+20*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[4*s/20,10*s/20,0,0,0]);

          zeichneP([posx+0*a,posy+6*a], 1, 2, [1,200,200,255,255,5*s/20,9*s/20]);
          zeichneH(plus([posx+0*a,posy+6*a],etaP(0,3)), 1, 2, [1,255,200,255,255,5*s/20,9*s/20]);
          zeichneF(plus([posx+0*a,posy+6*a],phiP(0,3)), 5, 2, [1,255,200,200,255,5*s/20,9*s/20]);

          drawArrow([posx+0*a,posy+6*a], plus([posx+0*a,posy+6*a],etaP(0,3)),[7*s/20,10*s/20,141,199,62]);
          drawArrow([posx+0*a,posy+6*a], plus([posx+0*a,posy+6*a],rot(rhoP(1,2),1)),[7*s/20,10*s/20,255,0,0]);
          drawArrow(plus([posx+0*a,posy+6*a],rot(rhoP(1,2),1)), plus([posx+0*a,posy+6*a],etaP(0,3)),[7*s/20,10*s/20,0,0,255]);
          //drawArrow(plus([posx+0*a,posy+6*a],etaP(0,3)),plus(plus([posx+0*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),[4*s/20,10*s/20,0,0,0]);
          //drawArrow(plus(plus([posx+0*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),plus([posx+0*a,posy+6*a],phiP(0,3)),[4*s/20,10*s/20,0,0,0]);
          //drawArrow(plus([posx+0*a,posy+6*a],phiP(0,3)),plus(plus([posx+0*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[4*s/20,10*s/20,0,0,0]);

          zeichneP([posx-20*a,posy+6*a], 1, 2, [2,200,200,255,255,6*s/20,12*s/20]);
          zeichneH(plus([posx-20*a,posy+6*a],etaP(0,3)), 1, 2, [2,255,200,255,255,6*s/20,12*s/20]);
          zeichneF(plus([posx-20*a,posy+6*a],phiP(0,3)), 5, 2, [2,255,200,200,255,6*s/20,12*s/20]);

          drawArrow([posx-20*a,posy+6*a], plus([posx-20*a,posy+6*a],etaP(0,3)),[7*s/20,10*s/20,141,199,62]);
          drawArrow([posx-20*a,posy+6*a], plus([posx-20*a,posy+6*a],rot(rhoP(1,2),1)),[7*s/20,10*s/20,255,0,0]);
          drawArrow(plus([posx-20*a,posy+6*a],rot(rhoP(1,2),1)), plus([posx-20*a,posy+6*a],etaP(0,3)),[7*s/20,10*s/20,0,0,255]);
          //drawArrow(plus([posx-20*a,posy+6*a],etaP(0,3)),plus(plus([posx-20*a,posy+6*a],phiP(0,3)),rot(lambdaF(2),5)),[4*s/20,10*s/20,0,0,0]);
          //drawArrow(plus(plus([posx-20*a,posy+6*a],phiP(0,3)),rot(lambdaF(2),5)),plus([posx-20*a,posy+6*a],phiP(0,3)),[4*s/20,10*s/20,0,0,0]);
          //drawArrow(plus([posx-20*a,posy+6*a],phiP(0,3)),plus(plus([posx-20*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[4*s/20,10*s/20,0,0,0]);
          tex1.style('font-size', ''+(2*s)+'px');
          tex1.position((posx-10*a)+((wo-w)/2), (-2*posy-3*a)+((ho-h)/2));
          katex.render('\\textcolor{limegreen}{\\eta_0^{P,s}}=\\textcolor{blue}{R\\sigma_1^{P,s-1}}-\\textcolor{red}{R\\varrho_0^{H,s-1}}', tex1.elt);
        }
        break;
      case 24:
        if(drawsl){
          resetslide(1.5*s);
          a=s;
          setzeVariablen(s);
          textSize(4.5*s);
          fill(0);
          text('Positionen im P-Supertile', posx-45*s, -posy-21*s);
          zeichneP([posx+45*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('P', posx+44*s, -posy-22*s);
          zeichneF([posx+42*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('F', posx+41*s, -posy-22*s);
          zeichneT([posx+39*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(2.5*s);
          strokeWeight(0);
          fill(0);
          text('T', posx+38*s+5, -posy-22*s);
          zeichneH([posx+34*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('H', posx+32*s+12, -posy-22*s);
          a=1.5*s
          setzeVariablen(1.5*s);
          zeichneP([posx+20*a,posy+6*a], 1, 2, [0,200,200,255,255,180,180,180,255,4*s/20]);
          zeichneH(plus([posx+20*a,posy+6*a],etaP(0,3)), 1, 2, [0,255,200,255,255,180,180,180,255,4*s/20]);
          zeichneF(plus([posx+20*a,posy+6*a],phiP(0,3)), 5, 2, [0,255,200,200,255,180,180,180,255,4*s/20]);          

          drawArrow([posx+20*a,posy+6*a], plus([posx+20*a,posy+6*a],rot(rhoP(1,2),1)),[4*s/20,10*s/20,128,128,128]);
          drawArrow(plus([posx+20*a,posy+6*a],rot(rhoP(1,2),1)), plus([posx+20*a,posy+6*a],etaP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow([posx+20*a,posy+6*a],plus([posx+20*a,posy+6*a],phiP(0,3)),[7*s/20,10*s/20,141,199,62]);
          drawArrow([posx+20*a,posy+6*a], plus([posx+20*a,posy+6*a],etaP(0,3)),[7*s/20,10*s/20,0,0,255]);
          drawArrow(plus([posx+20*a,posy+6*a],etaP(0,3)),plus(plus([posx+20*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),[7*s/20,10*s/20,255,0,255]);
          drawArrow(plus(plus([posx+20*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),plus([posx+20*a,posy+6*a],phiP(0,3)),[7*s/20,10*s/20,255,0,0]);
          //drawArrow(plus([posx+20*a,posy+6*a],phiP(0,3)),plus(plus([posx+20*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[4*s/20,10*s/20,0,0,0]);

          zeichneP([posx+0*a,posy+6*a], 1, 2, [1,200,200,255,255,5*s/20,9*s/20]);
          zeichneH(plus([posx+0*a,posy+6*a],etaP(0,3)), 1, 2, [1,255,200,255,255,5*s/20,9*s/20]);
          zeichneF(plus([posx+0*a,posy+6*a],phiP(0,3)), 5, 2, [1,255,200,200,255,5*s/20,9*s/20]);
        
          drawArrow([posx+0*a,posy+6*a], plus([posx+0*a,posy+6*a],rot(rhoP(1,2),1)),[4*s/20,10*s/20,128,128,128]);
          drawArrow(plus([posx+0*a,posy+6*a],rot(rhoP(1,2),1)), plus([posx+0*a,posy+6*a],etaP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow([posx+0*a,posy+6*a],plus([posx+0*a,posy+6*a],phiP(0,3)),[7*s/20,10*s/20,141,199,62]);
          drawArrow([posx+0*a,posy+6*a], plus([posx+0*a,posy+6*a],etaP(0,3)),[7*s/20,10*s/20,0,0,255]);
          drawArrow(plus([posx+0*a,posy+6*a],etaP(0,3)),plus(plus([posx+0*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),[7*s/20,10*s/20,255,0,255]);
          drawArrow(plus(plus([posx+0*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),plus([posx+0*a,posy+6*a],phiP(0,3)),[7*s/20,10*s/20,255,0,0]);
          //drawArrow(plus([posx+0*a,posy+6*a],phiP(0,3)),plus(plus([posx+0*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[4*s/20,10*s/20,0,0,0]);

          zeichneP([posx-20*a,posy+6*a], 1, 2, [2,200,200,255,255,6*s/20,12*s/20]);
          zeichneH(plus([posx-20*a,posy+6*a],etaP(0,3)), 1, 2, [2,255,200,255,255,6*s/20,12*s/20]);
          zeichneF(plus([posx-20*a,posy+6*a],phiP(0,3)), 5, 2, [2,255,200,200,255,6*s/20,12*s/20]);

          drawArrow([posx-20*a,posy+6*a], plus([posx-20*a,posy+6*a],rot(rhoP(1,2),1)),[4*s/20,10*s/20,128,128,128]);
          drawArrow(plus([posx-20*a,posy+6*a],rot(rhoP(1,2),1)), plus([posx-20*a,posy+6*a],etaP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow([posx-20*a,posy+6*a],plus([posx-20*a,posy+6*a],phiP(0,3)),[7*s/20,10*s/20,141,199,62]);
          drawArrow([posx-20*a,posy+6*a], plus([posx-20*a,posy+6*a],etaP(0,3)),[7*s/20,10*s/20,0,0,255]);
          drawArrow(plus([posx-20*a,posy+6*a],etaP(0,3)),plus(plus([posx-20*a,posy+6*a],phiP(0,3)),rot(lambdaF(2),5)),[7*s/20,10*s/20,255,0,255]);
          drawArrow(plus(plus([posx-20*a,posy+6*a],phiP(0,3)),rot(lambdaF(2),5)),plus([posx-20*a,posy+6*a],phiP(0,3)),[7*s/20,10*s/20,255,0,0]);
          //drawArrow(plus([posx-20*a,posy+6*a],phiP(0,3)),plus(plus([posx-20*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[4*s/20,10*s/20,0,0,0]);

          tex1.style('font-size', ''+(2*s)+'px');
          tex1.position((posx-10*a)+((wo-w)/2), (-2*posy-3*a)+((ho-h)/2));
          katex.render('\\textcolor{limegreen}{\\varphi_0^{P,s}}=\\textcolor{blue}{R\\eta_0^{P,s}}+\\textcolor{magenta}{R\\sigma_1^{H,s-1}}-\\textcolor{red}{R^5\\sigma_0^{F,s-1}}', tex1.elt);
        }
        break;
      case 25:
        if(drawsl){
          resetslide(1.5*s);
          a=s;
          setzeVariablen(s);
          textSize(4.5*s);
          fill(0);
          text('Positionen im P-Supertile', posx-45*s, -posy-21*s);
          zeichneP([posx+45*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('P', posx+44*s, -posy-22*s);
          zeichneF([posx+42*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('F', posx+41*s, -posy-22*s);
          zeichneT([posx+39*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(2.5*s);
          strokeWeight(0);
          fill(0);
          text('T', posx+38*s+5, -posy-22*s);
          zeichneH([posx+34*s,posy+a*23],0,1,[1,255,255,255,125,5*s/20,0]);
          textSize(3*s);
          strokeWeight(0);
          fill(0);
          text('H', posx+32*s+12, -posy-22*s);
          a=1.5*s
          setzeVariablen(1.5*s);
          zeichneP([posx+20*a,posy+6*a], 1, 2, [0,200,200,255,255,180,180,180,255,4*s/20]);
          zeichneH(plus([posx+20*a,posy+6*a],etaP(0,3)), 1, 2, [0,255,200,255,255,180,180,180,255,4*s/20]);
          zeichneF(plus([posx+20*a,posy+6*a],phiP(0,3)), 5, 2, [0,255,200,200,255,180,180,180,255,4*s/20]);
          
          drawArrow([posx+20*a,posy+6*a], plus([posx+20*a,posy+6*a],etaP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow([posx+20*a,posy+6*a], plus([posx+20*a,posy+6*a],rot(rhoP(1,2),1)),[9*s/20,10*s/20,2,147,134]);
          drawArrow(plus([posx+20*a,posy+6*a],rot(rhoP(1,2),1)), plus([posx+20*a,posy+6*a],etaP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow(plus([posx+20*a,posy+6*a],etaP(0,3)),plus(plus([posx+20*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow(plus(plus([posx+20*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),plus([posx+20*a,posy+6*a],phiP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow([posx+20*a,posy+6*a],plus(plus([posx+20*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[7*s/20,10*s/20,141,199,62]);
          drawArrow([posx+20*a,posy+6*a],plus([posx+20*a,posy+6*a],phiP(0,3)),[7*s/20,10*s/20,0,0,255]);
          drawArrow(plus([posx+20*a,posy+6*a],phiP(0,3)),plus(plus([posx+20*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[7*s/20,10*s/20,255,0,0]);

          zeichneP([posx+0*a,posy+6*a], 1, 2, [1,200,200,255,255,5*s/20,9*s/20]);
          zeichneH(plus([posx+0*a,posy+6*a],etaP(0,3)), 1, 2, [1,255,200,255,255,5*s/20,9*s/20]);
          zeichneF(plus([posx+0*a,posy+6*a],phiP(0,3)), 5, 2, [1,255,200,200,255,5*s/20,9*s/20]);

          drawArrow([posx+0*a,posy+6*a], plus([posx+0*a,posy+6*a],etaP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow([posx+0*a,posy+6*a], plus([posx+0*a,posy+6*a],rot(rhoP(1,2),1)),[9*s/20,10*s/20,2,147,134]);
          drawArrow(plus([posx+0*a,posy+6*a],rot(rhoP(1,2),1)), plus([posx+0*a,posy+6*a],etaP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow(plus([posx+0*a,posy+6*a],etaP(0,3)),plus(plus([posx+0*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow(plus(plus([posx+0*a,posy+6*a],etaP(0,3)),rot(sigmaH(0,2),3)),plus([posx+0*a,posy+6*a],phiP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow([posx-0*a,posy+6*a],plus(plus([posx-0*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[7*s/20,10*s/20,141,199,62]);
          drawArrow([posx+0*a,posy+6*a],plus([posx+0*a,posy+6*a],phiP(0,3)),[7*s/20,10*s/20,0,0,255]);
          drawArrow(plus([posx+0*a,posy+6*a],phiP(0,3)),plus(plus([posx+0*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[7*s/20,10*s/20,255,0,0]);

          zeichneP([posx-20*a,posy+6*a], 1, 2, [2,200,200,255,255,6*s/20,12*s/20]);
          zeichneH(plus([posx-20*a,posy+6*a],etaP(0,3)), 1, 2, [2,255,200,255,255,6*s/20,12*s/20]);
          zeichneF(plus([posx-20*a,posy+6*a],phiP(0,3)), 5, 2, [2,255,200,200,255,6*s/20,12*s/20]);

          drawArrow([posx-20*a,posy+6*a], plus([posx-20*a,posy+6*a],etaP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow([posx-20*a,posy+6*a], plus([posx-20*a,posy+6*a],rot(rhoP(1,2),1)),[9*s/20,10*s/20,2,147,134]);
          drawArrow(plus([posx-20*a,posy+6*a],rot(rhoP(1,2),1)), plus([posx-20*a,posy+6*a],etaP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow(plus([posx-20*a,posy+6*a],etaP(0,3)),plus(plus([posx-20*a,posy+6*a],phiP(0,3)),rot(lambdaF(2),5)),[4*s/20,10*s/20,128,128,128]);
          drawArrow(plus(plus([posx-20*a,posy+6*a],phiP(0,3)),rot(lambdaF(2),5)),plus([posx-20*a,posy+6*a],phiP(0,3)),[4*s/20,10*s/20,128,128,128]);
          drawArrow([posx-20*a,posy+6*a],plus(plus([posx-20*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[7*s/20,10*s/20,141,199,62]);
          drawArrow([posx-20*a,posy+6*a],plus([posx-20*a,posy+6*a],phiP(0,3)),[7*s/20,10*s/20,0,0,255]);
          drawArrow(plus([posx-20*a,posy+6*a],phiP(0,3)),plus(plus([posx-20*a,posy+6*a],phiP(0,3)),rot(tauF(1,2),5)),[7*s/20,10*s/20,255,0,0]);

          tex1.style('font-size', ''+(2*s)+'px');
          tex1.position((posx-10*a)+((wo-w)/2), (-2*posy-3*a)+((ho-h)/2));
          katex.render('\\textcolor{limegreen}{\\varrho_0^{P,s}}=\\textcolor{blue}{\\varphi_0^{P,s}}+\\textcolor{red}{R^5\\tau_1^{F,s-1}}', tex1.elt);
      
        }
        break;
      case 26:
        if(drawsl){
          resetslide(s);
          di = document.body.getElementsByTagName("div")[0];
          di.style = "left:"+((wo-w)/2)+"px; top:"+((ho-h)/2)+"px; position:absolute; width:"+w+"px; height:"+h+"px;";
          sv = di.querySelector('svg');
          sv.setAttribute('viewBox', '0 0 1920 1080');
          
        }
        break;
      case 27:
        background(220);
        stroke(1);
        strokeWeight(0);
        katex.render('', tex1.elt);
        katex.render('', tex2.elt);
        katex.render('', tex3.elt);
        katex.render('', tex4.elt);
        katex.render('', tex5.elt);
        katex.render('', tex6.elt);
        di = document.body.getElementsByTagName("div")[0];
        sv = di.querySelector('svg');
        sv.setAttribute('viewBox', '0 '+scrl+' 1920 1080');
        scrl = scrl+10;
        break;
      case 28:
        if(drawsl){
          resetslide(s);
          zeichneH([posx,posy], 0, groesse, [0,255,255,255,255,0,0,0,255,3*s/20]);
          strokeWeight(0);
          fill(255,80);
          rect(0,0,2*posx,-2*posy);
          fill(255,245);
          //fill(220);
          rect(posx-30*s, -posy-24.5*s,61*s,16.5*s);
          //rect(posx-46*s, -posy-6*s,91*s,31.5*s);
          textSize(7*s);
          fill(0);
          text('Vielen Dank für die', posx-29*s, -posy-18*s);
          text('Aufmerksamkeit', posx-25*s, -posy-10*s);
          fill(0);
          textSize(4.5*s);
          fill(0);
        }
        break;
      case 29:
        if(drawsl){
          resetslide(s);
          zeichneH([posx,posy], 0, groesse, [0,255,255,255,255,0,0,0,255,3*s/20]);
          strokeWeight(0);
          fill(255,80);
          rect(0,0,2*posx,-2*posy);
          fill(255,245);
          //fill(220);
          rect(posx-30*s, -posy-24.5*s,61*s,16.5*s);
          rect(posx-46*s, -posy-6*s,91*s,32*s);
          textSize(7*s);
          fill(0);
          text('Vielen Dank für die', posx-29*s, -posy-18*s);
          text('Aufmerksamkeit', posx-25*s, -posy-10*s);
          fill(0);
          textSize(3*s);
          fill(0);
          text('Quellen', posx-45*s, -posy-3*s);
          textSize(1.4*s);
          text('• Smith, D., Myers, J. S., Kaplan, C. S., & Goodman-Strauss, C. (2024). A chiral aperiodic monotile. Comb. Theor.\n    https://arxiv.org/pdf/2305.17743\n• Smith, D., Myers, J. S., Kaplan, C. S., & Goodman-Strauss, C. (30. Juni 2024). An aperiodic monotile. Comb. Theor.\n    https://arxiv.org/pdf/2303.10798\n• Bischoff, M. (10. April 2023). Newfound Mathematical "Einstein" shape Creates a Never-Repeating Pattern.\n    https://www.scientificamerican.com/article/newfound-mathematical-einstein-shape-creates-a-never-repeating-pattern/\n• Fabian, P. (2010). Aperiodische Parkettierungen der Ebene und Beugungsbilder von Quasikristallen. Mag. d. NatW.\n    https://core.ac.uk/download/pdf/11591219.pdf\n• https://upload.wikimedia.org/wikipedia/commons/1/15/SSS_Penrose_tiling%2C_5iter%2C_sun.svg\n• https://upload.wikimedia.org/wikipedia/commons/c/c0/Pentagonal_tiling_with_5-fold_rotational_symmetry.svg\n• https://upload.wikimedia.org/wikipedia/commons/c/c0/MonotileCubicBezier.svg\n• https://upload.wikimedia.org/wikipedia/commons/a/a2/MonotileQuadraticBezier.svg\n• p5.js – https://p5js.org/\n• KaTeX – https://katex.org/\n• Roboto – https://fonts.google.com/specimen/Roboto\n• draw.io – https://www.drawio.com/', posx-45*s, -posy-0.8*s);
        }
        break;
      case 30:
        if(drawsl){
          resetslide(s);
          zeichneH([posx,posy], 0, groesse, [0,255,255,255,255,0,0,0,255,3*s/20]);
          strokeWeight(0);
          fill(255,80);
          rect(0,0,2*posx,-2*posy);
          fill(255,245);
          //fill(220);
          rect(posx-30*s, -posy-24.5*s,61*s,16.5*s);
          //rect(posx-46*s, -posy-6*s,91*s,31.5*s);
          textSize(7*s);
          fill(0);
          text('Vielen Dank für die', posx-29*s, -posy-18*s);
          text('Aufmerksamkeit', posx-25*s, -posy-10*s);
          fill(0);
          textSize(4.5*s);
          fill(0);
        }
        break;
      default:
        break;
    }
    if(Date.now() > keyev + 300 & keyIsPressed === true) {
      console.log(keyCode);
      keyev = Date.now();
      if(keyCode === RIGHT_ARROW | keyCode === 34){
        slide = slide + 1;
        drawsl = true;
      }
      if(keyCode === LEFT_ARROW | keyCode === 33){
        slide = slide - 1;
        drawsl = true;
      }
      keyIsPressed=0
    }
  }
  
  function resetslide(gr) {
    a = gr;
    //Berechnen von Hilfsvariablen
    setzeVariablen(a);
    background(220);
    stroke(1);
    strokeWeight(0);
    drawsl = false;
    katex.render('', tex1.elt);
    katex.render('', tex2.elt);
    katex.render('', tex3.elt);
    katex.render('', tex4.elt);
    katex.render('', tex5.elt);
    katex.render('', tex6.elt);
    katex.render('', texn1.elt);
    katex.render('', texn2.elt);
    katex.render('', texn3.elt);
    katex.render('', texn4.elt);
    katex.render('', texn5.elt);
    katex.render('', texn6.elt);
    katex.render('', texn7.elt);
    katex.render('', texn8.elt);
    katex.render('', texn9.elt);
    katex.render('', texn10.elt);
    katex.render('', texn11.elt);
    katex.render('', texn12.elt);
    katex.render('', texn13.elt);
    katex.render('', texn14.elt);
    document.body.getElementsByTagName("div")[0].style="display:none;";
    scrl=0;
  }

  function getgroesse() {
    //notwendige Ordnung berechnen
    do{
      thetaH0 = thetaH(0, groesse);
      entf = sqrt(thetaH0[0]**2,thetaH0[1]**2);
      entfor = sqrt((posx-w)**2+posy**2);
      entfol = sqrt(posx**2+posy**2);
      entful = sqrt(posx**2+(posy+h)**2);
      entfur = sqrt((posx-w)**2+(posy+h)**2);
      maxentf = max(entfor,max(entfol,max(entful,entfur)));
      groesse = groesse+1;
    } while(maxentf > entf);
  }