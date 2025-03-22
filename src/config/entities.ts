import { SnakeInterface, FoodInterface } from '../interfaces/entities';
import { VariablesConditionsInterface } from '../interfaces/variables';
import { randomColor, randomPosition } from './../services/random';

class GameEntities {
  public size: number = 20;
  public score: number = 0;
  public frame: number = 200;

  public variablesConditions: VariablesConditionsInterface = {
    direction: 'right',
    loopGame: null,
    isMove: true,
    isLoop: true,
  };

  public snake: SnakeInterface[] = [
    { x: 260, y: 300 },
    { x: 280, y: 300 },
    { x: 300, y: 300 },
  ];

  public food: FoodInterface = {
    x: randomPosition(this.size),
    y: randomPosition(this.size),
    color: randomColor(),
  };

  public createSnake() {
    this.snake.length = 3;
    this.snake.map((pixel, index) => {
      pixel.x = 300 - this.size * (this.snake.length - 1 - index);
      pixel.y = 300;
    });
  }

  public randomPositionFood(): void {
    let x: number = 0;
    let y: number = 0;

    do {
      x = randomPosition(this.size);
      y = randomPosition(this.size);
    } while (this.snake.find((pixelSnake) => pixelSnake.x === x && pixelSnake.y === y));

    this.food.x = x;
    this.food.y = y;
    this.food.color = randomColor();
  }
}

export default new GameEntities();
