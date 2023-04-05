import { BaseFigure } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseFigure";
import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";
import { DefaultCubeGeometry } from "@/models/UpComponents/ThreeJsModels/Geometry/DefaultCubeGeometry";
import { DefaultStandardMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultStandardMaterial";

export class WallYZ extends BaseFigure {
  constructor(materialType = "color", texturePath = "") {
    super(
      new DefaultRotation(0, 0, 0),
      new DefaultPosition(0, 0, 0),
      new DefaultScale(0.1, 30, 30),
      new DefaultCubeGeometry(),
      new DefaultStandardMaterial(materialType, texturePath)
    );
  }
}
