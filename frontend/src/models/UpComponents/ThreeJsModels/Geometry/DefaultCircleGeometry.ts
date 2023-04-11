import { CircleGeometry } from "three";
import { BaseGeometry } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseGeometry";

export class DefaultCircleGeometry extends BaseGeometry {
  private _radius: number;
  private _segments: number;
  private thetaStart?: number;
  private thetaLength?: number;
  constructor(
    radius: number,
    segments: number,
    thetaStart?: number,
    thetaLength?: number
  ) {
    super(new CircleGeometry(radius, segments, thetaStart, thetaLength));
    this._radius = radius;
    this._segments = segments;
    this.thetaStart = thetaStart;
    this.thetaLength = thetaLength;
  }
}
