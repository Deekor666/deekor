import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { DefaultBasicMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultBasicMaterial";
import { DefaultCubeGeometry } from "@/models/UpComponents/ThreeJsModels/Geometry/DefaultCubeGeometry";
import { BaseFigure } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseFigure";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";
import { Color, ColorRepresentation, MeshStandardMaterial } from "three";

export class CubeBasic extends BaseFigure {
  constructor() {
    super(
      CubeBasic.DEFAULT_ROTATION,
      CubeBasic.DEFAULT_POSITION,
      CubeBasic.DEFAULT_SCALE,
      new DefaultCubeGeometry(),
      new DefaultBasicMaterial()
    );
  }

  public setFigureColor(color: string): void {
    (this.object.material as MeshStandardMaterial).color = new Color(
      color as ColorRepresentation
    );
  }

  public static DEFAULT_ROTATION = new DefaultRotation(0.1, 0.1, 0.1);
  public static DEFAULT_POSITION = new DefaultPosition(5, 5, 5);
  public static DEFAULT_SCALE = new DefaultScale(3, 3, 3);
}
