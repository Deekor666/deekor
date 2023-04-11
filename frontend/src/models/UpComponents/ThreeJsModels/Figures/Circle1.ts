import { DefaultCircle } from "@/models/UpComponents/ThreeJsModels/Figures/default/DefaultCircle";
import { DefaultCircleGeometry } from "@/models/UpComponents/ThreeJsModels/Geometry/DefaultCircleGeometry";
import { DefaultTextureMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultTextureMaterial";

export class Circle1 extends DefaultCircle {
  constructor(radius: number, segments: number, texturePath?: string) {
    super(
      new DefaultCircleGeometry(radius, segments),
      new DefaultTextureMaterial(texturePath)
    );
  }
}
