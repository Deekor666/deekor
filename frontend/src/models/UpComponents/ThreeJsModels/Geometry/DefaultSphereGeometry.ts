import { BaseGeometry } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseGeometry";
import { SphereGeometry } from "three";

export class DefaultSphereGeometry extends BaseGeometry {
  private _radius: number;
  private _widthSegments: number;
  private _heightSegments: number;
  private _phiStart?: number;
  private _phiLength?: number;
  private _thetaStart?: number;
  private _thetaLength?: number;
  constructor(
    radius: number,
    widthSegments: number,
    heightSegments: number,
    phiStart?: number,
    phiLength?: number,
    thetaStart?: number,
    thetaLength?: number
  ) {
    super(
      new SphereGeometry(
        radius,
        widthSegments,
        heightSegments,
        phiStart,
        phiLength,
        thetaStart,
        thetaLength
      )
    );
    this._radius = radius;
    this._widthSegments = widthSegments;
    this._heightSegments = heightSegments;
    this._phiStart = phiStart;
    this._phiLength = phiLength;
    this._thetaStart = thetaStart;
    this._thetaLength = thetaLength;
  }
}
