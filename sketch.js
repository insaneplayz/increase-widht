var bg,bgimg;
var gun,gimg;
function preload(){
 bgimg = loadImage("bg.jpg")
 gimg = loadImage("gun.png")
}
function setup(){
 createCanvas(1000,500)
    bg = createSprite(500,250,500,500)
    bg.addImage(bgimg)
    bg.scale = 3
    bg.width=500
    
    gun = createSprite(500,380);
    gun.addImage(gimg,"gunimg")
    gun.scale = 1.5
 }

function draw(){

    drawSprites();
}