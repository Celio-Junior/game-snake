export type DirectionsInterface = 'left' | 'right' | 'up' | 'down';

export type VariablesConditionsInterface = {
  direction: DirectionsInterface;
  loopGame: any;
  isLoop: boolean;
  isMove: boolean;
};
