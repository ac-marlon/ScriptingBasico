$(document).ready(inicio);
$(document).keydown(capturaTeclado);
var x = 0;
var y = 0;


function capturaTeclado(event){
 //alert(event.which);
 if(event.which==38 || event.which==87)
 y -= 10;
 if(event.which==40 || event.which==83)
 y += 10;
 if(event.which==39 || event.which==68)
 x += 10;
 if(event.which==37 || event.which==65)
 x -= 10;
 x = (1200 + x)%1200;
 y = (700 + y)%700;
 }
 
function inicio() {
    var lienzo = $("#lienzo")[0];
    var contexto = lienzo.getContext("2d");
    var buffer = document.createElement("canvas");
    contextoBuffer = buffer.getContext("2d");
    buffer.width = lienzo.width;
    buffer.height = lienzo.height;
    contexto.clearRect(0, 0, 700, 500);
    contexto.drawImage(buffer, 0, 0);
    run();
}

function Tanque() {
    this.img = $("#tanque");
    this.dibujar = function (ctx, i) {
        var img = this.img[i];
        ctx.drawImage(img, x, y);
        ctx.save();

        ctx.restore();
    }

}
function run() {
    var lienzo = $("#lienzo")[0];
    var contexto = lienzo.getContext("2d");
    var buffer = document.createElement("canvas");
    buffer.width = lienzo.width;
    buffer.height = lienzo.height;
    contextoBuffer = buffer.getContext("2d");
    contextoBuffer.fillStyle = "#ffffff";
    var objnave = new Tanque();
    
    objnave.dibujar(contextoBuffer, 0);
    contexto.clearRect(0, 0, 1200, 700);
    contexto.drawImage(buffer, 0, 0);
    
    setTimeout("run()",20);
}