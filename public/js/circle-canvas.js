class Circle {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.animation;
    this.size = 183;
    this.increment = 0.01;
    this.count = 0;
    this.color = ["#F3E9B5", "#F3E9B5", "#F3E9B5"];
    this.currentcolor = this.color[Math.floor(Math.random() * (3 - 0))];
    requestAnimationFrame(this.animCircle.bind(this));
  }

  animCircle() {
    this.count = this.count + this.increment;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.currentcolor;
    this.ctx.lineWidth = 4;
    this.ctx.arc(185, 285, this.size, 0, this.count * Math.PI);
    this.ctx.stroke();

    if (this.count >= 2) {
      this.count = 0;
      this.currentcolor = this.color[Math.floor(Math.random() * (3 - 0))];
      cancelAnimationFrame(this.animation);
    } else this.animation = requestAnimationFrame(this.animCircle.bind(this));
  }
}

window.onload = function () {
  setTimeout(function () {
    var text = new Circle();
    // var gui = new dat.GUI();
    // gui.add(text, "increment", 0.01, 0.1);
    // gui.add(text, "size", 20, 100);
  }, 5000);
};
