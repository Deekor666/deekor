import { DefaultPlane } from "@/models/UpComponents/ThreeJsModels/Figures/default/DefaultPlane";
import { DefaultPlaneGeometry } from "@/models/UpComponents/ThreeJsModels/Geometry/DefaultPlaneGeometry";
import { DefaultTextureMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultTextureMaterial";

export class Wall extends DefaultPlane {
  constructor(
    width: number,
    height: number,
    texturePath?: string,
    widthSegments?: number,
    heightSegments?: number
  ) {
    super(
      new DefaultPlaneGeometry(width, height, widthSegments, heightSegments),
      new DefaultTextureMaterial(texturePath)
    );
  }
}
