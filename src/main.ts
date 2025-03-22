import './styles/main.css';

import { ctx, viewCanvasSize, scoreElement, buttonElement } from './config/elements';
import gameEntities from './config/entities';

import { drawSnake, drawFood } from './services/draw';
import { moveSnake } from './services/move';
import { checkCollision, checkSnakeEat } from './services/collisions';
import { interfaceGameOver } from './services/gameOver';

// variables
const variables = gameEntities.variablesConditions;

function draw() {
  ctx.clearRect(0, 0, viewCanvasSize, viewCanvasSize);
  drawFood();
  moveSnake();
  drawSnake();
  checkSnakeEat();
  checkCollision();
}

const frameLoop = () => {
  variables.loopGame = setInterval(draw, gameEntities.frame);
};

function restartGame() {
  interfaceGameOver();

  scoreElement.forEach(
    (score) => (score.textContent = String(gameEntities.score).padStart(2, '0')),
  );
  gameEntities.score = 0;

  gameEntities.createSnake();

  gameEntities.randomPositionFood();

  draw();
  variables.isMove = true;
}

document.addEventListener('keypress', ({ key }) => {
  key = key.toLowerCase();
  if (!variables.isMove || (key === 'a' && variables.isLoop)) return;
  if (key === 'a' && variables.direction != 'right') variables.direction = 'left';
  if (key === 'd' && variables.direction != 'left') variables.direction = 'right';
  if (key === 'w' && variables.direction != 'down') variables.direction = 'up';
  if (key === 's' && variables.direction != 'up') variables.direction = 'down';

  if (variables.isLoop) {
    frameLoop();
    variables.isLoop = false;
  }
});
buttonElement.addEventListener('click', restartGame);

draw();
