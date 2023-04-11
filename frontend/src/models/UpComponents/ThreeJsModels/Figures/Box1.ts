import { DefaultBox } from "@/models/UpComponents/ThreeJsModels/Figures/default/DefaultBox";
import { DefaultBoxGeometry } from "@/models/UpComponents/ThreeJsModels/Geometry/DefaultBoxGeometry";
import { DefaultTextureMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultTextureMaterial";

export class Box1 extends DefaultBox {
  constructor(
    width: number,
    height: number,
    depth: number,
    texturePath?: string
  ) {
    super(
      new DefaultBoxGeometry(width, height, depth),
      new DefaultTextureMaterial(texturePath)
    );
  }
}
