var c = document.getElementById("canvas");
var sifirla = document.getElementById("reset");
var yaziekle = document.getElementById("yazi");
var ctx = c.getContext("2d");
var farex, farey, genislikinput, renk;

let paint = false;

function Baslat() {
    paint = true
}

function Bitir() {
    paint = false;
}

function Ciz(event) {
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

    ctx.lineTo(farex, farey);
    ctx.stroke();


}

function Temizle() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.strokeStyle = 'transparent';
    ctx.beginPath();
    ctx.lineTo(-100, -100);
    ctx.stroke();
    ctx.restore();

}
let yazitiklama = false;
function Yazi() {
    yazitiklama = true;
    var deger = document.getElementById("yaziekleme").innerHTML = "<input type='text' id='yazideger'>";
    c.classList.add("asddd");
    console.log("Yazi Eklendi");



}


c.addEventListener("mousedown", Baslat)
c.addEventListener("mouseup", Bitir)
c.addEventListener("mousemove", Ciz)
c.addEventListener("click",(event) =>{
    farex = event.offsetX;
    farey = event.offsetY;
    if (yazitiklama == true) {
        
        ctx.fillText(document.getElementById("yazideger").value,farex -2,farey -2);
        c.classList.remove("asddd");
        yazitiklama = false;
        
    }
    
})


sifirla.addEventListener("click", Temizle)
yaziekle.addEventListener("click", Yazi,)
