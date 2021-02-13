var player1,player2;
var wall,wall2,coin1Group,coin2Group,coin3Group,coin4Group,coin5Group;
var player1Score = 0;
var player2Score = 0;
var obstacleGroup,obstacleAni;
var player1Life = 3;
var player2Life = 3;
var gameState = "play";
var gameState2 = "play";
var whoWon = "";
var target;
var player1Up;

function preload(){
  //Maze Images
  maze = loadImage("images/maze.jpg");
  maze1 = loadImage("images/maze1.jpg");
  maze2 = loadImage("images/maze2.jpg");
  //Treasure Images
  treasure1 = loadImage("images/treasure1.png");
  treasure2 = loadImage("images/treasure2.jpg");
  //Obstacle Animation
  obstacleAni = loadAnimation("images/obstacle1.png","images/obstacle2.png");
  //Coins Animation
  goldCoin = loadAnimation("images/goldCoin1.png","images/goldCoin2.png");
  silverCoin = loadAnimation("images/silverCoin1.png","images/silverCoin2.png");
  bronzeCoin = loadAnimation("images/bronzeCoin1.png","images/bronzeCoin2.png");
  //Player1 Animation
  player1Up = loadAnimation("player1/player1Up1.png","player1/player1Up2.png");
  player1Down = loadAnimation("player1/player1Down1.png","player1/player1Down2.png");
  player1Left = loadAnimation("player1/player1Left1.png","player1/player1Left2.png");
  player1Right = loadAnimation("player1/player1Right1.png","player1/player1Right2.png");
  //Player2 Animation
  player2Down = loadAnimation("player2/player2Down1.png","player2/player2Down2.png");
  player2Left = loadAnimation("player2/player2Left1.png","player2/player2Left2.png");
  player2Right = loadAnimation("player2/player2Right1.png","player2/player2Right2.png");
  player2Up = loadAnimation("player2/player2Up1.png","player2/player2Up2.png");
}

function setup() {
  //createCanvas(displayWidth-15,displayHeight-130);
  createCanvas(windowWidth,windowHeight);
  console.log(innerWidth);
  console.log(innerHeight);

  wall = createGroup();
  wall2 = createGroup();
  coin1Group = createGroup();
  coin2Group = createGroup();
  coin3Group = createGroup();
  coin4Group = createGroup();
  coin5Group = createGroup();
  obstacleGroup = createGroup();
 
  //Horizontal walls
  wall.add(createSprite(width/2,height/4-143,width,20));
  wall.add(createSprite(width/4-240,height/2+50,150,20));
  wall.add(createSprite(width/2.255,height/1.145,390,20));
  wall.add(createSprite(width/5.8,height/1.45,180,20));
  wall.add(createSprite(width/4-105,height/2,180,20));
  wall.add(createSprite(width/4.782,height/2.5,284,20));
  wall.add(createSprite(width/4.8,height/3.25,280,20));
  wall.add(createSprite(width/3.81,height/8,420,20));
  wall.add(createSprite(width/2.45,height/4.6,450,20));
  wall.add(createSprite(width/2.7,height/1.46,130,20));
  wall.add(createSprite(width/2.78,height/2.05,130,20));
  wall.add(createSprite(width/2.2,height/1.7,150,20));
  wall.add(createSprite(width/2.2,height/1.3,130,20));
  wall.add(createSprite(width/2.2,height/3.25,160,20));
  wall.add(createSprite(width/1.65,height/1.45,250,20));
  wall.add(createSprite(width/1.55,height/8,150,20));
  wall.add(createSprite(width/1.55,height/3.2,150,20));
  wall.add(createSprite(width/1.36,height/4.5,110,20));
  wall.add(createSprite(width/1.42,height/2.5,500,20));
  wall.add(createSprite(width/1.2,height/3.25,130,20));
  wall.add(createSprite(width/1.26,height/2,270,20));
  wall.add(createSprite(width/1.345,height/1.7,400,20));
  wall.add(createSprite(width/1.45,height/1.3,260,20));
  wall.add(createSprite(width/1.19,height/1.138,150,20));
  
  //Vertical walls
  wall2.add(createSprite(width/4-310,height/2,20,height));
  wall2.add(createSprite(width-10,height/2,20,height));
  wall2.add(createSprite(width/2,height/6-50,20,63));
  wall2.add(createSprite(width/9.4,height/4.65,20,95));
  wall2.add(createSprite(width/9.45,height/2.2,20,50));
  wall2.add(createSprite(width/9.1,height/1.21,20,150));
  wall2.add(createSprite(width/4.7,height/1.16,20,110));
  wall2.add(createSprite(width/4.25,height/1.7,20,130));
  wall2.add(createSprite(width/3.2,height/1.6,20,180));
  wall2.add(createSprite(width/2.5,height/2.8,20,50));
  wall2.add(createSprite(width/1.965,height/2.45,20,120));
  wall2.add(createSprite(width/2.42,height/1.35,20,50));
  wall2.add(createSprite(width/1.95,height/1.37,20,70));
  wall2.add(createSprite(width/1.7,height/1.24,20,65));
  wall2.add(createSprite(width/1.266,height/1.28,20,140));
  wall2.add(createSprite(width/1.44,height/1.1,20,70));
  wall2.add(createSprite(width/1.12,height/1.1,20,60));
  wall2.add(createSprite(width/1.12,height/1.55,20,180));
  wall2.add(createSprite(width/1.123,height/4.5,20,240));
  wall2.add(createSprite(width/1.68,height/4.5,20,100));
  wall2.add(createSprite(width/1.43,height/3.7,20,70));
  wall2.add(createSprite(width/1.285,height/4.6,20,130));
  wall2.add(createSprite(width/3.2,height/3.7,20,65));
  wall2.add(createSprite(width/3.2,height/2.2,20,60));
  wall2.add(createSprite(width/2.47,height/1.91,20,60));
  wall2.add(createSprite(width/1.68,height/1.88,20,50));
  wall2.add(createSprite(width/1.45,height/2.15,20,60));

  // for(var i=0;i<wall.length;i++){
  //   wall.get(i).addImage("wall1",maze1);
  //   wall.get(i).scale = 0.7;
  // }
  // for(var i=0;i<wall2.length;i++){
  //   wall2.get(i).addImage("wall2",maze2);
  //   wall2.get(i).scale = 0.7;
  //   console.log(wall2.get(i).x === width/4-310)
  //   if(wall2.get(i).x === width/4-310){
  //     console.log("wall2");
  //     wall2.get(i).scale = 0.5;
  //     wall2.get(i).debug = true;
  //   }
  // }

  //Obstacles
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.add(createSprite(random(100,width-50),random(100,height-50),10,10));
  obstacleGroup.setColorEach("red");

  for(var i=0;i<obstacleGroup.length;i++){
    rand = Math.round(random(1,2))
    if(rand===2){
      obstacleGroup.get(i).velocityX = Math.round(random(-5,5));
    } else{
      obstacleGroup.get(i).velocityY = Math.round(random(-5,5));
    }
  }

  for(var i=0;i<obstacleGroup.length;i++){
    obstacleGroup.get(i).addAnimation("obstacleAnimation",obstacleAni);
    obstacleGroup.get(i).scale = 0.3;
    obstacleGroup.get(i).debug = true;
  }

  //Players
  player1 = new Player(width/14,height/1.1,10,10);
  player1.body.addAnimation("player_1",player1Up);

  player2 = new Player(width/1.07,height/9,10,10);
  player2.body.addAnimation("player_2",player2Up);

  target = createSprite(width/2.2,height/2.6,40,40);
  target.addImage("treasure_1",treasure1);
  target.scale = 0.15;
}

function draw() {
  background(maze); 

  push();
  fill("black");
  textSize(20);
  text(mouseX+" , "+mouseY,500,110);
  pop();

  scoringSystem();

  if(gameState === "play"){
    player1Movement();
    coins();
    coinCollection();
    obstacleMovement();
    obstacleCollision();

    if(player1Life === 0){
      gameState = "end";
    }

    if(player1.body.isTouching(target)){
      gameState2 = "end";
      target.addImage("treasure_2",treasure2);
      target.changeImage("treasure_2",treasure2);
      target.scale = 0.08;
      gameState = "won";
    }
    drawSprites();
  } else if(gameState === "end"){
    // drawSprites();
  } else if(gameState === "won"){
    textSize(40);
    text("Player1 Won the Game",width/2,height/2);
  }

  if(gameState2 === "play"){
    player2Movement();
    coins();
    coinCollection();
    obstacleMovement();
    obstacleCollision();
    if(player2Life === 0){
      gameState2 = "end";
    }
    if(player2.body.isTouching(target)){
      gameState2 = "won";
      target.addImage("treasure_2",treasure2);
      target.changeImage("treasure_2",treasure2);
      target.scale = 0.08;
      gameState = "end";
    }
    drawSprites();
  } else if(gameState2 === "end"){
    
  } else if(gameState2 === "won"){
    textSize(40);
    text("Player2 Won the Game",width/2,height/2);
  }
  
  player1.display();
  player2.display();
}

function player1Movement(){
  if(keyDown("w")){
    player1.body.y = player1.body.y-3;
  }
  if(keyDown("s")){
    player1.body.y = player1.body.y+3;
  }
  if(keyDown("a")){
    player1.body.x = player1.body.x-3;
  }
  if(keyDown("d")){
    player1.body.x = player1.body.x+3;
  }
}

function player2Movement(){
  if(keyDown(UP_ARROW)){
    player2.body.y = player2.body.y-3;
  }
  if(keyDown(DOWN_ARROW)){
    player2.body.y = player2.body.y+3;
  }
  if(keyDown(LEFT_ARROW)){
    player2.body.x = player2.body.x-3;
  }
  if(keyDown(RIGHT_ARROW)){
    player2.body.x = player2.body.x+3;
  }
}

function coins(){
  if(frameCount%60===0){
    var coin1 = createSprite(random(0,width),random(0,height),15,15);
    coin1.addAnimation("bronzeAni",bronzeCoin);
    coin1.scale = 0.3;
    coin1.lifetime = 120;
    coin1.shapeColor = "yellow";
    
    if(coin1.overlap(wall) || coin1.overlap(wall2)){
      coin1.destroy()
    }
    coin1Group.add(coin1);
  }
  if(frameCount%80===0){
    var coin2 = createSprite(random(0,width),random(0,height),15,15);
    coin2.addAnimation("bronzeAni",bronzeCoin);
    coin2.scale = 0.3;
    coin2.lifetime = 110;
    if(coin2.overlap(wall) || coin2.overlap(wall2)){
      coin2.destroy()
    }
    coin2Group.add(coin2);
  }
  if(frameCount%100===0){
    var coin3 = createSprite(random(0,width),random(0,height),15,15);
    coin3.addAnimation("silverAni",silverCoin);
    coin3.scale = 0.3;
    coin3.lifetime = 100;

    if(coin3.overlap(wall) || coin3.overlap(wall2)){
      coin3.destroy()
    }
    coin3Group.add(coin3);
  }
  if(frameCount%50===0){
    var coin4 = createSprite(random(0,width),random(0,height),15,15);
    coin4.addAnimation("silverAni",silverCoin);
    coin4.scale = 0.3;
    coin4.lifetime = 100;

    if(coin4.overlap(wall) || coin4.overlap(wall2)){
      coin4.destroy()
    }
    coin4Group.add(coin4);
  }
  if(frameCount%120===0){
    var coin5 = createSprite(random(0,width),random(0,height),15,15);
    coin5.addAnimation("goldAni",goldCoin);
    coin5.scale = 0.3;
    coin5.lifetime = 70;

    if(coin5.overlap(wall) || coin5.overlap(wall2)){
      coin5.destroy()
    }
    coin5Group.add(coin5);
  }
}

function coinCollection(){
  //Coin1 Group
  for(var i=0;i<coin1Group.length;i++){
    //Player1
    if(player1.body.isTouching(coin1Group.get(i))){
      player1Score+=1;
      coin1Group.get(i).destroy();
    }
    //Player2
    if(player2.body.isTouching(coin1Group)){
      player2Score+=1;
      coin1Group.get(i).destroy();
    }
  }  

  //Coin2 Group
  for(var i=0;i<coin2Group.length;i++){
    //Player1
    if(player1.body.isTouching(coin2Group.get(i))){
      player1Score+=1;
      coin2Group.get(i).destroy();
    }
    //Player2
    if(player2.body.isTouching(coin2Group)){
      player2Score+=1;
      coin2Group.get(i).destroy();
    }
  }  

  //Coin3 Group
  for(var i=0;i<coin3Group.length;i++){
    //Player1
    if(player1.body.isTouching(coin3Group.get(i))){
      player1Score+=1;
      coin3Group.get(i).destroy();
    }
    //Player2
    if(player2.body.isTouching(coin3Group)){
      player2Score+=1;
      coin3Group.get(i).destroy();
    }
  }  

  //Coin4 Group
  for(var i=0;i<coin4Group.length;i++){
    //Player1
    if(player1.body.isTouching(coin4Group.get(i))){
      player1Score+=1;
      coin4Group.get(i).destroy();
    }
    //Player2
    if(player2.body.isTouching(coin4Group)){
      player2Score+=1;
      coin4Group.get(i).destroy();
    }
  }  

  //Coin5 Group
  for(var i=0;i<coin5Group.length;i++){
    //Player1
    if(player1.body.isTouching(coin5Group.get(i))){
      player1Score+=1;
      coin5Group.get(i).destroy();
    }
    //Player2
    if(player2.body.isTouching(coin5Group)){
      player2Score+=1;
      coin5Group.get(i).destroy();
    }
  }  
}

function obstacleMovement(){
  obstacleGroup.bounceOff(wall);
  obstacleGroup.bounceOff(wall2);
}

function scoringSystem(){
  //Player1 Score
  push();
  fill("white");
  rect(80,580,115,25);
  fill("black");
  textSize(20);
  text("Score: "+player1Score,90,599);
  pop();

  //Player2 Score
  push();
  fill("white");
  rect(970,580,115,25);
  fill("black");
  textSize(20);
  text("Score: "+player2Score,980,599);
  pop();

  //Player1 life
  push();
  fill("white");
  rect(240,580,85,25);
  fill("black");
  textSize(20);
  text("Lifes: "+player1Life,250,599);
  pop();

  //Player2 life
  push();
  fill("white");
  rect(1090,580,85,25);
  fill("black");
  textSize(20);
  text("Lifes: "+player2Life,1100,599);
  pop();
}

function obstacleCollision(){
  //Player1
  if(player1.body.isTouching(obstacleGroup)){
    player1.body.x = width/6;
    player1.body.y = height/2-200;
    player1Life = player1Life-1;
  }

  //Player2
  if(player2.body.isTouching(obstacleGroup)){
    player2.body.x = width-80;
    player2.body.y = height/2-200;
    player2Life = player2Life-1;
  }
}