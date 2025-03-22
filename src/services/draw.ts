import { ctx } from '../config/elements';
import gameEntities from './../config/entities';
export function drawFood() {
  ctx.beginPath();
  ctx.fillStyle = gameEntities.food.color;
  ctx.shadowColor = gameEntities.food.color;
  ctx.shadowBlur = 20;
  ctx.fillRect(gameEntities.food.x, gameEntities.food.y, gameEntities.size, gameEntities.size);
  ctx.shadowBlur = 0;
}

export function drawSnake(): void {
  ctx.fillStyle = '#eee';

  gameEntities.snake.forEach((pixel, index) => {
    if (index === gameEntities.snake.length - 1) ctx.fillStyle = 'red';

    ctx.fillRect(pixel.x, pixel.y, gameEntities.size, gameEntities.size);
  });
}
