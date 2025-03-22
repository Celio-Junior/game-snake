export const gameOverElement = document.querySelector<HTMLDivElement>(
  '.menu-game-over',
) as HTMLDivElement;
export const buttonElement = document.querySelector<HTMLButtonElement>(
  '.menu-game-over > button',
) as HTMLButtonElement;
export const scoreElement = document.querySelectorAll(
  '.score-value',
) as NodeListOf<HTMLSpanElement>;

export const canvas = document.querySelector<HTMLCanvasElement>('canvas') as HTMLCanvasElement;
export const viewCanvasSize = 600;
canvas.width = viewCanvasSize;
canvas.height = viewCanvasSize;

export const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

export const audio = new Audio('./audios/audio.mp3');
