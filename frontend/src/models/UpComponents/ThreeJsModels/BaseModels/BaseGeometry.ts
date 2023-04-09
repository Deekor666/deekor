import { BufferGeometry } from "three";

export class BaseGeometry {
  private _width: number;
  private _height: number;
  private _depth: number;
  private readonly _object: BufferGeometry;
  constructor(geometry: BufferGeometry) {
    this._width = BaseGeometry.DEFAULT_WIDTH;
    this._height = BaseGeometry.DEFAULT_HEIGHT;
    this._depth = BaseGeometry.DEFAULT_DEPTH;
    this._object = geometry;
  }

  get object(): BufferGeometry {
    return this._object;
  }

  public static DEFAULT_WIDTH = 1;
  public static DEFAULT_HEIGHT = 1;
  public static DEFAULT_DEPTH = 1;
}
