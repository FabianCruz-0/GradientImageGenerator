var canvas = document.getElementById('gradient')
var ctx = canvas.getContext("2d");

var btnGenerate = document.getElementById('btnGenerate')

var type = Math.floor(Math.random() * 2)
var color0 = generateColor()
var color1 = generateColor()
var percent0 = Math.random();
var percent1 = Math.random();
var angle = Math.floor(Math.random() * 360);
var x2 = 1080 * Math.cos(angle);
var y2 = 1080 * Math.sin(angle);

btnGenerate.addEventListener("click", generateGradient, false)

setInterval(function () {
    if (type == 0) {
        var grd = ctx.createLinearGradient(0, 0, x2, y2);
        grd.addColorStop(0, color0);
        grd.addColorStop(1, color1);

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {

        var grd = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, canvas.width / 60, canvas.width / 2, canvas.height / 2, canvas.width);
        grd.addColorStop(0, color0);
        grd.addColorStop(1, color1);

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height)

    }
}, 10);
function generateGradient() {
    type = Math.floor(Math.random() * 2)
    color0 = generateColor()
    color1 = generateColor()
    percent0 = Math.random()
    percent1 = Math.random();
    angle = Math.floor(Math.random() * 360);
    x2 = 1080 * Math.cos(angle);
    y2 = 1080 * Math.sin(angle);
}

function generateColor() {
    var color = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + color.slice(0, 6);
}
