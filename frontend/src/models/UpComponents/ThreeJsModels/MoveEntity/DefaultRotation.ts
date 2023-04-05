import { Euler } from "three";

export class DefaultRotation extends Euler {
  constructor(x: number, y: number, z: number) {
    super(x, y, z);
  }
}
