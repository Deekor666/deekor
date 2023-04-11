import { BoxGeometry } from "three";
import { BaseGeometry } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseGeometry";

export class DefaultBoxGeometry extends BaseGeometry {
  private _width: number;
  private _height: number;
  private _depth: number;
  private _widthSegments?: number;
  private _heightSegments?: number;
  private _depthSegments?: number;
  constructor(
    width: number,
    height: number,
    depth: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
  ) {
    super(
      new BoxGeometry(
        width,
        height,
        depth,
        widthSegments,
        heightSegments,
        depthSegments
      )
    );

    this._width = width;
    this._height = height;
    this._depth = depth;
    this._widthSegments = widthSegments;
    this._heightSegments = heightSegments;
    this._depthSegments = depthSegments;
  }
}
