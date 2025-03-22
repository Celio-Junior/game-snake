import { viewCanvasSize } from '../config/elements';
export const randomNumber = (min: number = 0, max: number = 0) =>
  Math.round(Math.random() * (max - min) + min);
export function randomColor() {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);

  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}

export function randomPosition(size: number) {
  const position = randomNumber(0, viewCanvasSize - size);
  return Math.round(position / size) * size;
}
