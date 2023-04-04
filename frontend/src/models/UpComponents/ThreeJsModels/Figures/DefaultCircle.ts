import { DefaultStandardMaterial } from "@/models/UpComponents/ThreeJsModels/Materials/DefaultStandardMaterial";
import { Color, ColorRepresentation, MeshStandardMaterial } from "three";
import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";
import { BaseFigure } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseFigure";
import { DefaultCircleGeometry } from "@/models/UpComponents/ThreeJsModels/Geometry/DefaultCircleGeometry";

export class DefaultCircle extends BaseFigure {
  constructor() {
    super(
      DefaultCircle.DEFAULT_ROTATION,
      DefaultCircle.DEFAULT_POSITION,
      DefaultCircle.DEFAULT_SCALE,
      new DefaultCircleGeometry(),
      new DefaultStandardMaterial()
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
