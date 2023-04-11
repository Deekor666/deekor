import {
  BoxGeometry,
  BufferGeometry,
  CircleGeometry,
  PlaneGeometry,
} from "three";

export class BaseGeometry {
  private _object:
    | CircleGeometry
    | BufferGeometry
    | BoxGeometry
    | PlaneGeometry;
  constructor(
    geometry: CircleGeometry | BufferGeometry | BoxGeometry | PlaneGeometry
  ) {
    this._object = geometry;
  }

  get object(): CircleGeometry | BufferGeometry | BoxGeometry | PlaneGeometry {
    return this._object;
  }
}
