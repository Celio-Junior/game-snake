import { audio, scoreElement, viewCanvasSize } from '../config/elements';
import gameEntities from './../config/entities';
import { gameOver } from './gameOver';
export function checkCollision(): void {
  const headSnake = gameEntities.snake[gameEntities.snake.length - 1];
  const wallLimit = viewCanvasSize - gameEntities.size;
  const indexCollision = gameEntities.snake.length - 2;
  const snakeCollision = gameEntities.snake.find((pixelSnake, index) => {
    return (
      index < indexCollision && headSnake.x === pixelSnake.x && headSnake.y === pixelSnake.y
    );
  });

  const wallCollision =
    headSnake.x > wallLimit ||
    headSnake.x < 0 ||
    headSnake.y > viewCanvasSize ||
    headSnake.y < 0;
  if (wallCollision || snakeCollision) gameOver();
}

export function checkSnakeEat(): void {
  const headSnake = gameEntities.snake[gameEntities.snake.length - 1];

  if (headSnake.x === gameEntities.food.x && headSnake.y === gameEntities.food.y) {
    gameEntities.randomPositionFood();

    gameEntities.score++;
    gameEntities.snake.push(headSnake);

    audio.play();

    scoreElement.forEach(
      (score) => (score.textContent = String(gameEntities.score).padStart(2, '0')),
    );
  }
}
