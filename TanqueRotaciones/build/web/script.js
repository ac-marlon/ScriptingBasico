$(document).ready(inicio);
$(document).keydown(capturaTeclado);
var x = 120;
var y = 120;
var angulo = 0;


function capturaTeclado(event) {
    //alert(event.which);
    if (event.which == 38)
        y -= 10;
    if (event.which == 40)
        y += 10;
    if (event.which == 39)
        x += 10;
    if (event.which == 37)
        x -= 10;
    x = (1200 + x) % 1200;
    y = (700 + y) % 700;
    
    if (event.which == 87)
        angulo =1/2;
    if (event.which == 83)
        angulo =3/2;
    if (event.which == 68)
        angulo =2;
    if (event.which == 65)
        angulo =1;
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
        ctx.translate(x, y);
        ctx.rotate(Math.PI*angulo);
        ctx.drawImage(img, -img.width/2, -img.height/2);
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

    setTimeout("run()", 20);
}