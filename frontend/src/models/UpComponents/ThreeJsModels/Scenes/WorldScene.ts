import { BaseScene } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseScene";
import { DefaultCubeBasic } from "@/models/UpComponents/ThreeJsModels/Figures/DefaultCubeBasic";
import { DefaultLight } from "@/models/UpComponents/ThreeJsModels/SystemModels/Lights/DefaultLight";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { OtherCube } from "@/models/UpComponents/ThreeJsModels/Figures/OtherCube";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";
export class WorldScene extends BaseScene {
  constructor(container: HTMLDivElement, width: number, height: number) {
    super(container, width, height);

    const light = new DefaultLight();
    light.setPosition(new DefaultPosition(10, 10, 20));
    this.addLightInScene(light);

    this.getCamera().setPosition(new DefaultPosition(2, 6, 30));
    this.getCamera().setScale(new DefaultScale(1, 1, 1));
    this.getCamera().setRotation(new DefaultRotation(-0.2, 0, 0));

    const cubeFigure1 = new DefaultCubeBasic();
    cubeFigure1.setRotation(new DefaultRotation(-0.8, -0.1, 0.8));
    cubeFigure1.setPosition(new DefaultPosition(1, 1, 1));
    cubeFigure1.setFigureColor("chartreuse");

    const circleFigure2 = new OtherCube();
    circleFigure2.setRotation(new DefaultRotation(-0.8, -0.1, 0.8));
    circleFigure2.setPosition(new DefaultPosition(-1, -1, -1));
    circleFigure2.setColor("red");
    this.addFigureInScene(cubeFigure1);
    this.addFigureInScene(circleFigure2);

    this.onAxes();
  }
}
