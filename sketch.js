let w = window.innerWidth;
let h = window.innerHeight;
let posx = w/2;
let posy = -h/2;
let groesse = 1;
let maxx = 0;
let minx = 0;
let maxy = 0;
let miny = 0;

function plus(p, q){
  return [p[0] + q[0], p[1] + q[1]];
}

function minus(p, q){
  return [p[0] - q[0], p[1] - q[1]];
}

function rot(p, n){
  if(n == 0){
    return p;
  } else if(n >= 1){
    return rot([p[0]/2 - sqrt(3)/2*p[1], sqrt(3)/2*p[0] + p[1]/2], n-1);
  }
}

let etaHv   = [];
let phiHv   = [];
let psiHv   = [];
let rhoHv   = [];
let sigmaHv = [];
let etaPv   = [];
let phiPv   = [];
let rhoPv   = [];
let sigmaPv = [];
let tauPv   = [];
let phiFv   = [];
let muFv    = [];
let nuFv    = [];
let thetaHv = [];

function etaH(r, s){
  if(typeof etaHv[s] === 'undefined'){
    let sigmaHh = sigmaH(1, s-1);
    let rhoTh = rot(rhoT(1, s-1), 5);
    etaHv[s] = minus(rhoTh, sigmaHh);
  }
  return rot(etaHv[s], 2*r);
}

function phiH(r, s){
  if(typeof phiHv[s] === 'undefined'){
    let etaHh = etaH(0, s);
    let sigmaHh = sigmaH(2, s-1);
    let sigmaFh = sigmaF(0, s-1);
    phiHv[s] = minus(plus(etaHh, sigmaHh), sigmaFh);
  }
  return rot(phiHv[s], 2*r);
}

function psiH(r, s){
  if(typeof psiHv[s] === 'undefined'){
    let etaHh = etaH(0, s);
    let rhoHh = rhoH(1, s-1);
    let rhoPh = rot(rhoP(0, s-1), 5);
    psiHv[s] = minus(plus(etaHh, rhoHh), rhoPh);
  }
  return rot(psiHv[s], 2*r);
}

function rhoH(r, s){
  if(typeof rhoHv[s] === 'undefined'){
    let phiHh = phiH(0, s);
    let tauFh = tauF(1, s-1);
    rhoHv[s] = plus(phiHh, tauFh);
  }
  return rot(rhoHv[s], 2*r);
}

function sigmaH(r, s){
  if(typeof sigmaHv[s] === 'undefined'){
    let psiHh = psiH(0, s);
    let rhoPh = rot(rhoP(1, s-1), 5);
    sigmaHv[s] = plus(psiHh, rhoPh);
  }
  return rot(sigmaHv[s], 2*r);
}

function etaP(r, s){
  if(typeof etaPv[s] === 'undefined'){
    let rhoHh = rhoH(2, s-1);
    let rhoPh = rot(rhoP(0, s-1), 1);
    etaPv[s] = minus(rhoPh, rhoHh);
  }
  return rot(etaPv[s], 3*(1-r));
}

function phiP(r, s){
  if(typeof phiPv[s] === 'undefined'){
    let etaPh = etaP(1, s);
    let sigmaHh = sigmaH(0, s-1);
    let sigmaFh = rot(sigmaF(0, s-1), 2);
    phiPv[s] = minus(plus(etaPh, sigmaHh), sigmaFh);
  }
  return rot(phiPv[s], 3*(1-r));
}

function rhoP(r, s){
  if(typeof rhoPv[s] === 'undefined'){
    let phiPh = phiP(1, s);
    let tauFh = rot(tauF(1, s-1), 2);
    rhoPv[s] = plus(phiPh, tauFh);
  }
  return rot(rhoPv[s], 3*(1-r));
}

function sigmaP(r, s){
  if(typeof sigmaPv[s] === 'undefined'){
    let etaPh = etaP(1, s);
    let rhoHh = rhoH(0, s-1);
    sigmaPv[s] = plus(etaPh, rhoHh);
  }
  return rot(sigmaPv[s],3*(1-r));
}

function tauP(r, s){
  if(typeof tauPv[s] === 'undefined'){
    let phiPh = phiP(1, s);
    let rhoFh = rot(rhoF(0, s-1), 2);
    tauPv[s] = plus(phiPh, rhoFh);
  }
  return rot(tauPv[s], 3*(1-r));
}

function etaF(r, s){
  return etaP(r, s);
}

function phiF(r, s){
  if(r == 2){
    if(typeof phiFv[s] === 'undefined'){
      let etaFh = etaF(1, s);
      let sigmaHh = sigmaH(2, s-1);
      let sigmaFh = sigmaF(0, s-1);
      phiFv[s] = minus(plus(etaFh, sigmaHh), sigmaFh)
    }
    return phiFv[s];
  } else {
    return phiP(r, s); 
  }
}

function rhoF(r, s){
  if(s == 0){
    return [0, 0];
  } else {
    return rhoP(r, s);
  }
}

function sigmaF(r, s){
  return sigmaP(r, s);
}

function tauF(r, s){
  return tauP(r, s);
}

function muF(s){
  if(typeof muFv[s] === 'undefined'){
    let phiFh = phiF(2, s);
    let tauFh = tauF(1, s-1);
    muFv[s] = plus(phiFh, tauFh);
  }
  return muFv[s];
}

function nuF(s){
  if(typeof nuFv[s] === 'undefined'){
    let phiFh = phiF(2, s);
    let rhoFh = rhoF(0, s-1);
    nuFv[s] = plus(phiFh, rhoFh);
  }
  return nuFv[s];
}

function rhoT(r, s){
  if(s == 0){
    return rot([a, b] ,2*r);
  } else {
    return rhoH(r, s-1);
  }
}

function sigmaT(r, s){
  if(s == 0){
    return rot([a, b], 2*r);
  } else {
    return sigmaH(r, s-1);
  }
}

function thetaH(r, s){
  if(typeof thetaHv[s] === 'undefined'){
    let etaHh = etaH(0, s);
    let sigmaHh = sigmaH(0, s-1);
    thetaHv[s] = plus(etaHh, sigmaHh);
  }
  return rot(thetaHv[s], 2*r);
}

function zeichnestein(x, y, n){
  if(x < 0-2*a || y  > 2*b || x > w+2*a || y < -h-2*b){
    return;
  }
  if(n < 6){
    fill(265);
  } else {
    fill(0);
  }
  beginShape()
  for (let i = 0; i < 13; i++) {
    vertex(pkt[abfolge[n][i]][0] + x, -pkt[abfolge[n][i]][1] - y);
  }
  endShape(CLOSE);
}

function zeichneH(p, r, s){
  if(s == 0){
    zeichnestein(p[0], p[1], (r + 5)%6);
  } else {
    let etaH0 = rot(etaH(0, s), r);
    let etaH1 = rot(etaH0, 2);
    let etaH2 = rot(etaH0, 4);
    let psiH0 = rot(psiH(0, s), r);
    let psiH1 = rot(psiH0, 2);
    let psiH2 = rot(psiH0, 4);
    let phiH0 = rot(phiH(0, s), r);
    let phiH1 = rot(phiH0, 2);
    let phiH2 = rot(phiH0, 4);

    zeichneT(p, r+5, s-1);
    zeichneH(plus(etaH0, p), r, s-1);
    zeichneH(plus(etaH1, p), r+4, s-1);
    zeichneH(plus(etaH2, p), r, s-1);
    zeichneP(plus(psiH0, p), r+5, s-1);
    zeichneP(plus(psiH1, p), r+4, s-1);
    zeichneP(plus(psiH2, p), r, s-1);
    zeichneF(plus(phiH0, p), r, s-1);
    zeichneF(plus(phiH1, p), r+2, s-1);
    zeichneF(plus(phiH2, p), r+4, s-1);
  }
}

function zeichneT(p, r, s){
  if(s == 0){
    zeichnestein(p[0], p[1], (r + 1)%6 + 6);
  } else {
    zeichneH(p, r, s-1);
  }
}

function zeichneP(p, r, s){
  if(s == 0){
    return;
  } else {
    let etaP0 = rot(etaP(0, s), r);
    let etaP1 = rot(etaP0, 3);
    let phiP0 = rot(phiP(0, s), r);
    let phiP1 = rot(phiP0, 3);

    zeichneP(p, r+1, s-1);
    zeichneH(plus(etaP0, p), r+1, s-1);
    zeichneH(plus(etaP1, p), r+2, s-1);
    zeichneF(plus(phiP0, p), r+5, s-1);
    zeichneF(plus(phiP1, p), r+2, s-1);
  }
}

function zeichneF(p, r, s){
  if(s == 0){
    return;
  } else {
    zeichneP(p, r, s)
    let phiF2 = rot(phiF(2, s), r);
    zeichneF(plus(phiF2, p), r, s-1);
  }
}

function setup(){
  createCanvas(w, h);
  a  = 30;
  a2 = a/2;
  b  = sqrt(3) * a;
  b3 = b/3;
  b6 = b/6;
  b2 = b/2;

  pkt = [
    [ 0     ,  2 * b3], // 0
    [    -a ,      b3], // 1
    [    -a ,     -b3], // 2
    [ 0     , -2 * b3], // 3
    [     a ,     -b3], // 4
    [     a ,      b3], // 5
    [    -a2,      b6], // 6
    [ 0     ,     -b3], // 7
    [     a2,      b6], // 8
    [    -a2,     -b6], // 9
    [     a2,     -b6], //10
    [ 0     ,      b3], //11
    [-3 * a2,      b6], //12
    [    -a , -2 * b3], //13
    [     a2, -5 * b6], //14
    [ 3 * a2,     -b6], //15
    [     a ,  2 * b3], //16
    [    -a2,  5 * b6], //17
    [     a2,  5 * b6], //18
    [    -a ,  2 * b3], //19
    [-3 * a2,     -b6], //20
    [    -a2, -5 * b6], //21
    [     a , -2 * b3], //22
    [ 3 * a2,      b6], //23
    [    -a ,     -b ], //24
    [     a ,     -b ], //25
    [ 2 * a ,  0     ], //26
    [     a ,      b ], //27
    [    -a ,      b ], //28
    [-2 * a ,  0     ], //29
    [-3 * a2, -5 * b6], //30
    [     a2, -7 * b6], //31
    [ 2 * a ,     -b3], //32
    [ 3 * a2,  5 * b6], //33
    [    -a2,  7 * b6], //34
    [-2 * a ,      b3], //35
    [ 2 * a ,      b3], //36
    [     a2,  7 * b6], //37
    [-3 * a2,  5 * b6], //38
    [-2 * a ,     -b3], //39
    [    -a2, -7 * b6], //40
    [ 3 * a2, -5 * b6], //41
  ];
  
  abfolge = [
    [0, 19, 1 , 12, 2 , 30, 24, 3 , 7 , 4 , 23, 5 , 8 , 0], // 0
    [0, 11, 1 , 20, 2 , 13, 3 , 31, 25, 4 , 10, 5 , 18, 0], // 1
    [0, 19, 1 , 6 , 2 , 21, 3 , 14, 4 , 32, 26, 5 , 8 , 0], // 2
    [0, 11, 1 , 20, 2 , 9 , 3 , 22, 4 , 15, 5 , 33, 27, 0], // 3
    [0, 34, 28, 1 , 6 , 2 , 21, 3 , 7 , 4 , 23, 5 , 16, 0], // 4
    [0, 17, 1 , 35, 29, 2 , 9 , 3 , 22, 4 , 10, 5 , 18, 0], // 5
    [0, 17, 1 , 9 , 2 , 13, 3 , 10, 4 , 26, 36, 5 , 18, 0], // 6
    [0, 19, 1 , 12, 2 , 7 , 3 , 14, 4 , 8 , 5 , 27, 37, 0], // 7
    [0, 28, 38, 1 , 20, 2 , 13, 3 , 10, 4 , 15, 5 , 11, 0], // 8
    [0, 6 , 1 , 29, 39, 2 , 21, 3 , 14, 4 , 8 , 5 , 16, 0], // 9
    [0, 17, 1 , 9 , 2 , 24, 40, 3 , 22, 4 , 15, 5 , 11, 0], //10
    [0, 6 , 1 , 12, 2 , 7 , 3 , 25, 41, 4 , 23, 5 , 16, 0], //11
  ];

  rhoHv[0]   = [a,     b ];
  sigmaHv[0] = [a,     b ];
  rhoPv[0]   = [0, 2 * b3];
  sigmaPv[0] = [0, 2 * b3];
  tauPv[0]   = [0, 2 * b3];
  muFv[0]    = [0, 0     ];
  nuFv[0]    = [0, 2 * b3];
  thetaHv[0] = [a,     b ];
}
var rec = true;
function draw(){
  background(220);
  /*if(rec){
    console.profile();
    zeichneH([2000, -700], 0, 6);
    zeichneH([2000, -700], 0, 6);
    zeichneH([2000, -700], 0, 6);
    zeichneH([2000, -700], 0, 6);
    console.profileEnd();
    rec=false;
  } else {*/
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      posx = posx + mouseX - pmouseX;
      posy = posy - mouseY + pmouseY;
    }
  }
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
  zeichneH([posx,posy], 0, groesse);
  //}
}
