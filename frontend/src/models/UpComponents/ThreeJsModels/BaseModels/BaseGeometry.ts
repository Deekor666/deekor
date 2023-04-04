import { BufferGeometry } from "three";

export class BaseGeometry {
  private _width: number;
  private _height: number;
  private _depth: number;
  private _object: BufferGeometry;
  constructor(geometry: BufferGeometry) {
    this._width = BaseGeometry.DEFAULT_WIDTH;
    this._height = BaseGeometry.DEFAULT_HEIGHT;
    this._depth = BaseGeometry.DEFAULT_DEPTH;
    this._object = geometry;
    this.setSize();
  }

  public setSize() {
    this._object.translate(this._width, this._height, this._depth);
  }

  get object(): BufferGeometry {
    return this._object;
  }

  public static DEFAULT_WIDTH = 2;
  public static DEFAULT_HEIGHT = 2;
  public static DEFAULT_DEPTH = 2;
}
