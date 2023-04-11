import { DefaultSphere } from "@/models/UpComponents/ThreeJsModels/Figures/default/DefaultSphere";
import { DefaultSphereGeometry } from "@/models/UpComponents/ThreeJsModels/Geometry/DefaultSphereGeometry";
import { DefaultTextureMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultTextureMaterial";

export class Sphere1 extends DefaultSphere {
  constructor(
    radius: number,
    widthSegments: number,
    heightSegments: number,
    texturePath?: string,
    phiStart?: number,
    phiLength?: number,
    thetaStart?: number,
    thetaLength?: number
  ) {
    super(
      new DefaultSphereGeometry(
        radius,
        widthSegments,
        heightSegments,
        phiStart,
        phiLength,
        thetaStart,
        thetaLength
      ),
      new DefaultTextureMaterial(texturePath)
    );
  }
}
