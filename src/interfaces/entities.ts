export type SnakeInterface = {
  x: number;
  y: number;
};

export type FoodInterface = { color: string } & SnakeInterface;
