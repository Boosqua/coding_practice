document.addEventListener( "DOMContentLoaded", () => {
   const c = document.getElementById("canvas")
   const ctx = canvas.getContext('2d');
   const cw = c.width = window.innerWidth
   const ch = c.height = window.innerHeight
   const memo = {};
   const options = {
      x: 0,
      y: (n) => {
         if(!memo[n]){
            const ySq = Math.pow((n - 100), 2) - (100 * 100) 
            if( ySq < 0 ){
               memo[n] = 500 + (Math.sqrt(Math.abs(ySq))/ 2)
            }
         }
         return memo[n]
      }
   }
   const animate = () => {
      ctx.clearRect(0, 0, cw, ch);
      const {x, y} = options;
      const [width, height, diam] = [400, 800, 100]
      ctx.beginPath()
      ctx.moveTo(width, 0)
      ctx.lineTo( width, height)
      ctx.strokeStyle = "black"
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(width, 0)
      ctx.lineTo(width, diam)
      ctx.strokeStyle = "red"
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(width, 0);
      ctx.quadraticCurveTo( y(x), x, 400, 100);
      options.x = (options.x + 1) % 200
      ctx.strokeStyle = "blue";
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(450, 50, 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.lineTo(width, diam / 2)
      ctx.stroke()
      window.requestAnimationFrame(animate)
   }
   animate()
   // const points = []
   // let tick = 0
   // const opt = {
   //     count: 5,
   //     range: {
   //       x: 20,
   //       y: 80,
   //     },
   //     duration: {
   //       min: 20,
   //       max: 40,
   //     },
   //     thickness: 0,
   //     strokeColor: "rgba(0,0,0,0)",
   //     level: 0.75,
   //     curved: true,
   //   }
   //   const rand = function (min, max) {
   //     return Math.floor(Math.random() * (max - min + 1) + min);
   //   }
   //   const ease = function (t, b, c, d) {
   //     if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
   //     return (-c / 2) * (--t * (t - 2) - 1) + b;
   //   }

   // ctx.lineJoin = "round";
   // ctx.lineWidth = opt.thickness;
   // ctx.strokeStyle = opt.strokeColor;

   // var Point = function (config) {
   //   this.anchorX = config.x;
   //   this.anchorY = config.y;
   //   this.x = config.x;
   //   this.y = config.y;
   //   this.setTarget();
   // };

   // Point.prototype.setTarget = function () {
   //   this.initialX = this.x;
   //   this.initialY = this.y;
   //   this.targetX = this.anchorX + rand(0, opt.range.x * 2) - opt.range.x;
   //   this.targetY = this.anchorY + rand(0, opt.range.y * 2) - opt.range.y;
   //   this.tick = 0;
   //   this.duration = rand(opt.duration.min, opt.duration.max);
   // };

   // Point.prototype.update = function () {
   //   var dx = this.targetX - this.x;
   //   var dy = this.targetY - this.y;
   //   var dist = Math.sqrt(dx * dx + dy * dy);

   //   if (Math.abs(dist) <= 0) {
   //     this.setTarget();
   //   } else {
   //     var t = this.tick;
   //     var b = this.initialY;
   //     var c = this.targetY - this.initialY;
   //     var d = this.duration;
   //     this.y = ease(t, b, c, d);

   //     b = this.initialX;
   //     c = this.targetX - this.initialX;
   //     d = this.duration;
   //     this.x = ease(t, b, c, d);

   //     this.tick++;
   //   }
   // };

   // Point.prototype.render = function () {
   //   ctx.beginPath();
   //   ctx.arc(this.x, this.y, 3 , 0, Math.PI * 2, false);
   //   ctx.fillStyle = "black";
   //   ctx.fill();
   // };

   // var updatePoints = function () {
   //   var i = points.length;
   //   while (i--) {
   //     points[i].update();
   //   }
   // };

   // var renderPoints = function () {
   //   var i = points.length;
   //   while (i--) {
   //     points[i].render();
   //   }
   // };

   // var renderShape = function () {
   //   ctx.beginPath();
   //   var pointCount = points.length;
   //   ctx.moveTo(points[0].x, points[0].y);
   //   var i;
   //   for (i = 0; i < pointCount - 1; i++) {
   //     var c = (points[i].x + points[i + 1].x) / 2;
   //     var d = (points[i].y + points[i + 1].y) / 2;
   //     ctx.quadraticCurveTo(points[i].x, points[i].y, c, d);
   //   }
   //   ctx.lineTo(-opt.range.x - opt.thickness, ch + opt.thickness);
   //   ctx.lineTo(cw + opt.range.x + opt.thickness, ch + opt.thickness);
   //   ctx.closePath();
   //   ctx.fillStyle = "hsl(" + tick / 2 + ", 80%, 60%)";
   //   ctx.fill();
   //   ctx.stroke();
   // };

   // var clear = function () {
   //   ctx.clearRect(0, 0, cw, ch);
   // };

   // var loop = function () {
   //   window.requestAnimFrame(loop, c);
   //   tick++;
   //   clear();
   //   updatePoints();
   //   renderShape();
   //   //renderPoints();
   // };

   // var i = opt.count + 20;
   // var spacing = (cw + opt.range.x * 2) / (opt.count - 1);
   // while (i--) {
   //   points.push(
   //     new Point({
   //       x: spacing * (i - 1) - opt.range.x,
   //       y: ch - ch * opt.level,
   //     })
   //   );
   // }

   // window.requestAnimFrame = (function () {
   //   return (
   //     window.requestAnimationFrame ||
   //     window.webkitRequestAnimationFrame ||
   //     window.mozRequestAnimationFrame ||
   //     window.oRequestAnimationFrame ||
   //     window.msRequestAnimationFrame ||
   //     function (a) {
   //       window.setTimeout(a, 1e3 / 60);
   //     }
   //   );
   // })();

   // loop();
})

// ctx.beginPath()
   // ctx.moveTo(0, 0)
   // ctx.lineTo(200, 200)
   // ctx.stroke()
   // ctx.moveTo(100, 0)
   // ctx.quadraticCurveTo(0, 0, 200, 200);
   // ctx.stroke()

   //simple moving curve

   // const options = {
   //    anchor: {
   //       x: 400,
   //       y: 400
   //    }, 
   //    moveX: 1,
   //    moveY: 4,
   // }
   // const move = () => { //adjust xy and incrementor when needed
   //    options.anchor.x += options.moveX
   //    if( options.anchor.x < 100 || options.anchor.x > 700 ) options.moveX *= -1
   //    options.anchor.y += options.moveY
   //    if (options.anchor.y < 0 || options.anchor.y > 800) options.moveY *= -1;
   // }
   // const animate = () => {
   //    ctx.clearRect(0, 0, cw, ch)
   //    ctx.beginPath();
   //    ctx.strokeStyle = "red";
   //    ctx.moveTo(0, 0);
   //    ctx.lineTo(400, 0);
   //    ctx.lineTo(400, 800);
   //    ctx.lineTo(0, 800);
   //    ctx.stroke();
   //    ctx.beginPath();
   //    ctx.strokeStyle = "blue"
   //    ctx.moveTo(400, 0);
   //    ctx.quadraticCurveTo(options.anchor.x, options.anchor.y, 400, 800);
   //    ctx.stroke();
   //    ctx.beginPath()
   //    ctx.moveTo(options.anchor.x + 10, options.anchor.y)
   //    ctx.arc(options.anchor.x, options.anchor.y, 10, 0, 2 * Math.PI )
   //    ctx.fillStyle = "yellow"
   //    ctx.fill()
   //    move()
   //    window.requestAnimationFrame(animate)
   // }
   // animate()
   