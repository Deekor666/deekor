import { BaseGeometry } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseGeometry";
import { BoxGeometry } from "three";

export class DefaultCubeGeometry extends BaseGeometry {
  constructor() {
    super(new BoxGeometry());
  }
}
