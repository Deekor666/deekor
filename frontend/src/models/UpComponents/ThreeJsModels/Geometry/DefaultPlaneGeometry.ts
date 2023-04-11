import { BaseGeometry } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseGeometry";
import { PlaneGeometry } from "three";

export class DefaultPlaneGeometry extends BaseGeometry {
  private _width: number;
  private _height: number;
  private _widthSegments?: number;
  private _heightSegments?: number;
  constructor(
    width: number,
    height: number,
    widthSegments?: number,
    heightSegments?: number
  ) {
    super(new PlaneGeometry(width, height, widthSegments, heightSegments));
    this._width = width;
    this._height = height;
    this._widthSegments = widthSegments;
    this._heightSegments = heightSegments;
  }
}
