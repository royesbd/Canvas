


var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

ctx.fillStyle="green";
ctx.strokeRect(10,10,380,280);
ctx.fillRect(12,12,376,276);
ctx.lineWidth=3;
var centerx= c.width/2;
var centery=c.height/2;

ctx.beginPath();
ctx.arc(centerx,centery,80,0, 2*Math.PI,false);
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();