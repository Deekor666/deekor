import { BaseMaterial } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseMaterial";

export class DefaultTextureMaterial extends BaseMaterial {
  constructor(filePathTexture?: string) {
    if (filePathTexture === undefined) {
      super(
        BaseMaterial.DEFAULT_TEXTURE_MATERIAL_TYPE,
        "/pngTextures/wood.png"
      );
    } else {
      super(BaseMaterial.DEFAULT_TEXTURE_MATERIAL_TYPE, filePathTexture);
    }
  }
}
