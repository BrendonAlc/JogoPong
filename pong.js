//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

//variaveis da raquete
let xRaquete = 5; 
let yRaquete = 150;
let xRaqueteEsquerda = 585;
let yRaqueteEsquerda = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


//variavel do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  tocandoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaRaquete();
  //verificaColisaoRaquete();
  VerificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaqueteOponente(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  VerificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);

}

function mostraBolinha(){
  circle(xBolinha,yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function tocandoBorda(){
    //se estiver tocando a borda
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura);
}

function mostraRaqueteOponente(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura);
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function VerificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
  }
}


//Raquete do Oponente

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}


