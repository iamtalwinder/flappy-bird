const medal = {
  sX: 312,
  sY: 109,
  x: 72,
  y: 175,
  width: 45,
  height: 45,

  draw: function () {
    if (score.value <= 10) {
      ctx.drawImage(
        sprite,
        this.sX,
        this.sY,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else if (score.value <= 20) {
      ctx.drawImage(
        sprite,
        this.sX + 48,
        this.sY,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else if (score.value <= 30) {
      ctx.drawImage(
        sprite,
        this.sX,
        this.sY + 48,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else {
      ctx.drawImage(
        sprite,
        this.sX + 48,
        this.sY + 48,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  },
};
