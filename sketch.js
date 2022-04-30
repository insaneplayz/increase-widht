var bg,bgimg;
var gun,gimg;
var aim,aimg;     
var shots;             
var silent;         
var enemy,eimg,e2,e3;
var check ;
var score;
var timer;
var ov,ovi;
function preload(){
 bgimg = loadImage("map.jpg")
 gimg = loadImage("gun.png")
 aimg = loadImage("aim.png")
 eimg = loadImage("enemy.png")
 e2 = loadImage("en2.png")
 e3 = loadImage("en3.png")
 ovi = loadImage("go.png")

 shots = loadSound("shot.mp3")

}
function setup(){
 createCanvas(2000,1000)
    bg = createSprite(650,350,500,500)
    bg.addImage(bgimg)
    bg.scale = 3
    bg.width=500
    
    gun = createSprite(650,550);
    gun.addImage(gimg,"gunimg")
    gun.scale = 1.9

    aim = createSprite(500,300)
    aim.addImage(aimg)
    aim.scale = 0.5         

    enemy = createSprite(500,400);
    enemy.addImage(eimg)
    enemy.scale = 1.3

    ov = createSprite(650,300)
    ov.addImage(ovi)
    ov.visible = false

    check = createSprite(500,350,5,20)
    
    //////////////////////////////////////
   score = 0
   timer = 1000
   console.log(getFrameRate())
 }

function draw(){
    background("black")
   
    text("time left = " + Math.round(timer),1100,150)
    timer -= 0.033
   
    textSize = 50
    text("score = "+ score,1100,200)
    
    aim.x = World.mouseX
    aim.y = World.mouseY
    if (mouseWentDown("leftButton")){
        shots.play()
    }
    if(mousePressedOver(enemy)){
        enemy.x = Math.round((random(250,1050)))
        enemy.y = Math.round(random(350,200))
        score += 5
    }
   if(timer = 0){
    ov.visible = true
}
 

  drawSprites();
}

   
