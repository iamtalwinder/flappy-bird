const gameOver = {
  sX: 175,
  sY: 228,
  w: 225,
  h: 202,
  x: cvs.width / 2,
  y: 90,

  draw: function () {
    if (state.current === state.over) {
      ctx.drawImage(
        sprite,
        this.sX,
        this.sY,
        this.w,
        this.h,
        this.x - this.w / 2,
        this.y,
        this.w,
        this.h
      );
    }
  },
};
