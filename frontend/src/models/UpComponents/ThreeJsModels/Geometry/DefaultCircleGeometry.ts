import { BaseGeometry } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseGeometry";
import { CircleGeometry } from "three";

export class DefaultCircleGeometry extends BaseGeometry {
  constructor() {
    super(new CircleGeometry(5, 5, 5, 5));
  }
}
