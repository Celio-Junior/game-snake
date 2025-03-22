import { canvas, gameOverElement } from '../config/elements';
import gameEntities from './../config/entities';

const variablesCheck = gameEntities.variablesConditions;

export function gameOver(): void {
  variablesCheck.direction = 'right';
  variablesCheck.isMove = false;
  variablesCheck.isLoop = true;
  clearInterval(variablesCheck.loopGame);
  interfaceGameOver();
}

export function interfaceGameOver(): void {
  gameOverElement.classList.toggle('none');
  canvas.classList.toggle('game-over-blur');
}
