const bird = {
  animation: [
    { sX: 276, sY: 112 },
    { sX: 276, sY: 139 },
    { sX: 276, sY: 164 },
    { sX: 276, sY: 139 },
  ],
  x: 50,
  y: 150,
  w: 34,
  h: 26,

  frame: 0,
  gravity: 0.15,
  jump: 3.5,
  speed: 0,
  rotation: 0,
  radius: 12,

  draw: function () {
    let bird = this.animation[this.frame];
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.drawImage(
      sprite,
      bird.sX,
      bird.sY,
      this.w,
      this.h,
      -this.w / 2,
      -this.h / 2,
      this.w,
      this.h
    );
    ctx.restore();
  },

  flap: function () {
    this.speed = -this.jump;
    FLAP.currentTime = 0;
    FLAP.play();
  },

  update: function () {
    this.period = state.current === state.getReady ? 10 : 5;
    this.frame += frames % this.period === 0 ? 1 : 0;
    this.frame = this.frame % this.animation.length;

    if (state.current === state.game) {
      this.speed += this.gravity;
      this.y += this.speed;

      //COLLISION DETECTION TOP
      if (this.y <= 0) {
        this.y = 0;
        if (state.current === state.game) {
          state.current = state.over;
          DIE.play();
        }
      }

      //COLLISION DETECTION BOTTOM
      if (this.y + this.h / 2 >= cvs.height - fg.h) {
        this.y = cvs.height - fg.h - this.h / 2;

        if (state.current === state.game) {
          state.current = state.over;
          DIE.play();
        }
      }
    }

    if (this.speed >= this.jump) {
      this.rotation = radians(90);
    } else {
      this.rotation = radians(-25);
    }
  },

  reset: function () {
    this.y = 150;
    this.speed = 0;
    this.rotation = 0;
  },
};
