let frames = 0;

cvs.addEventListener("click", function (evt) {
  switch (state.current) {
    case state.getReady:
      state.current = state.game;
      break;
    case state.game:
      bird.flap();
      break;
    case state.over:
      state.current = state.getReady;
      bird.reset();
      pipes.reset();
      score.reset();
      break;
  }
});

function draw() {
  ctx.fillStyle = "#70c5ce";
  ctx.fillRect(0, 0, cvs.width, cvs.height);

  bg.draw();
  fg.draw();
  bird.draw();
  pipes.draw();

  if (state.current === state.over) {
    gameOver.draw();
    medal.draw();
  }

  if (state.current === state.getReady) {
    getReady.draw();
  }

  score.draw();
}

function update() {
  bird.update();
  fg.update();
  pipes.update();
}

function loop() {
  if (state.current !== state.over) {
    update();
    draw();
    frames++;
  }
  requestAnimationFrame(loop);
}
loop();
