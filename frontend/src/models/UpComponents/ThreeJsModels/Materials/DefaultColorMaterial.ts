import { BaseMaterial } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseMaterial";

export class DefaultColorMaterial extends BaseMaterial {
  constructor() {
    super(BaseMaterial.DEFAULT_COLOR_MATERIAL_TYPE);
  }
}
