let container = document.querySelector("#container");
let drone = document.querySelector("#drone");

let droneCenter = {
  x: drone.offsetWidth / 2,
  y: drone.offsetHeight / 2,
};

container.addEventListener("mousemove", (e) => {
  drone.style.transform = `translate3d(${e.offsetX - droneCenter.x}px, ${
    e.offsetY - droneCenter.y
  }px, 0)`;
});

//
function plotSine(ctx) {
  var width = ctx.canvas.width;
  var height = ctx.canvas.height;
  var scale = 20;

  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(66,44,255)";

  var x = 0;
  var y = 0;
  var amplitude = 40;
  var frequency = 20;
  //ctx.moveTo(x, y);
  while (x < width) {
    y = height / 2 + amplitude * Math.sin(x / frequency);
    ctx.lineTo(x, y);
    x = x + 1;
  }
  ctx.stroke();
}
