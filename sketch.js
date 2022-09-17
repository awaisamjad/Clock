function setup() {
  createCanvas(800, 800);
}

function draw() {
  angleMode(DEGREES);
  textAlign(CENTER);
  textSize(16)
  let Hour = hour();
  let Minute = minute();
  let Second = second();
  background(20);
  fill(255);
  noStroke();
  console.log(Minute)

  //Dislpay time
  text(Hour + ":" + Minute + ":" + Second, width / 2, 50);
  translate(100,700);
  fill(255);


  //Bar Chart For Hour
  push();
  translate(60);
  rotate(180)
  let barLength = 100,hourX = -120, hourY = 0;
  //multiplier is 600 divided by the number of hours so 600/24 = 25
  let hourMultiplier = 25;
  rect(hourX,hourY,barLength,Hour*hourMultiplier);
  pop();
  text("Hour",60,hourY + 30)
  //Number Line for Hour Bar Chart 
  stroke(20,20,200);
  strokeWeight(3);
  line(-30,0,-30,-600);
  stroke(255);
  strokeWeight(0);
  for(i=0; i<=24;i++){
    text(i,0,-(i*24.8))
  }


  //Bar Chart For Minute
  push();
  translate(260,0)
  rotate(180);
  let minX = -barLength/2, minY = 0;
  //multiplier is 600 divided by the number of minutes so 600/60 = 10
  let minuteMultiplier = 10;
  rect(minX,minY,barLength,Minute*minuteMultiplier);
  //Number Line for Minute Bar Chart 
  stroke(20,20,200);
  strokeWeight(3);
  rotate(180);
  line(-100,0,-100,-600);
  stroke(255);
  strokeWeight(0);
  for(i=0; i<=60;i+=5){
    text(i,-70,-(i*9.9))
  }
  pop();
  text("Minute",250,minY + 30)


  //Bar Chart For Second
  push();
  translate(460,0)
  rotate(180);
  let secondX = -barLength/2, secondY = 0;
  //multiplier is 600 divided by the number of seconds so 600/60 = 10
  let secondMultiplier = 10;
  rect(secondX,secondY,barLength,Second*secondMultiplier);
  //Number Line for Second Bar Chart 
  stroke(20,20,200);
  strokeWeight(3);
  rotate(180);
  line(-100,0,-100,-600);
  stroke(255);
  strokeWeight(0);
  for(i=0; i<=60;i+=5){
    text(i,-70,-(i*9.9))
  }
  pop();
  text("Second",440,secondY + 30)
}
