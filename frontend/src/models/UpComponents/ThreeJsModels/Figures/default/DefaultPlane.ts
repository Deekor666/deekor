import { BaseFigure } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseFigure";
import { BaseGeometry } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseGeometry";
import { BaseMaterial } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseMaterial";

export class DefaultPlane extends BaseFigure {
  constructor(geometry: BaseGeometry, material: BaseMaterial) {
    super(geometry, material);
  }
}
