const getReady = {
  sX: 0,
  sY: 228,
  w: 173,
  h: 152,
  x: cvs.width / 2,
  y: 80,

  draw: function () {
    if (state.current === state.getReady) {
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
