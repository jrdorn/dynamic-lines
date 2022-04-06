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
