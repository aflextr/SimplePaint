var c = document.getElementById("canvas");

var ctx = c.getContext("2d");
var farex, farey, genislikinput, renk;

let paint = false;

function baslat() {
    paint = true
}

function bitir() {
    paint = false;
}

function ciz(event) {
    if (!paint) {
        return;
    }
    genislikinput = document.getElementById("genislik").value;
    renk = document.getElementById("renk").value;
    
    ctx.lineWidth = genislikinput;
    ctx.strokeStyle = renk;
    ctx.lineCap = "round";
    farex = event.offsetX;
    farey = event.offsetY;

    ctx.moveTo(farex, farey);

    ctx.lineTo(farex, farey - 2);
    ctx.stroke();

    
}

c.addEventListener("mousedown", baslat)
c.addEventListener("mouseup", bitir)
c.addEventListener("mousemove", ciz)