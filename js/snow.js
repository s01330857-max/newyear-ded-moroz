const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

let flakes = Array.from({ length: 120 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 2 + 1,
  d: Math.random() + 0.5
}));

function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.beginPath();

  flakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  });

  ctx.fill();
  move();
}

function move() {
  flakes.forEach(f => {
    f.y += f.d;
    if (f.y > h) {
      f.y = -5;
      f.x = Math.random() * w;
    }
  });
}

setInterval(draw, 33);
