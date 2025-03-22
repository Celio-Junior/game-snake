import gameEntities from './../config/entities';

const variablesCheck = gameEntities.variablesConditions;

export function moveSnake(): void {
  const head = gameEntities.snake[gameEntities.snake.length - 1];

  if (!variablesCheck.isMove || variablesCheck.isLoop) return;
  if (variablesCheck.direction === 'left')
    gameEntities.snake.push({ x: head.x - gameEntities.size, y: head.y });
  if (variablesCheck.direction === 'right')
    gameEntities.snake.push({ x: head.x + gameEntities.size, y: head.y });
  if (variablesCheck.direction === 'up')
    gameEntities.snake.push({ x: head.x, y: head.y - gameEntities.size });
  if (variablesCheck.direction === 'down')
    gameEntities.snake.push({ x: head.x, y: head.y + gameEntities.size });
  gameEntities.snake.shift();
}
