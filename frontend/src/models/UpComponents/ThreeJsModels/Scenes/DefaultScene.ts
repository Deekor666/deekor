import { BaseScene } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseScene";
import { DefaultLight } from "@/models/UpComponents/ThreeJsModels/SystemModels/Lights/DefaultLight";
import { CubeStandard } from "@/models/UpComponents/ThreeJsModels/Figures/CubeStandard";
import { DefaultRotation } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultRotation";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultScale } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultScale";
import { OtherCube } from "@/models/UpComponents/ThreeJsModels/Figures/OtherCube";
import { Floor } from "@/models/UpComponents/ThreeJsModels/Figures/Floor";
import { WallXY } from "@/models/UpComponents/ThreeJsModels/Figures/WallXY";
import { WallYZ } from "@/models/UpComponents/ThreeJsModels/Figures/WallYZ";

export class DefaultScene extends BaseScene {
  constructor(parentContainer: HTMLDivElement, width: number, height: number) {
    super(parentContainer, width, height);

    const light = new DefaultLight();
    light.setPosition(new DefaultPosition(4, 2, 10));
    light.setIntensity(4);
    light.setColor("#ffffff");
    this.addLightInScene(light);

    // this.getScene().background = new Color("black");

    this.getCamera().setPosition(new DefaultPosition(2, 4, 10));
    this.getCamera().setScale(new DefaultScale(1, 1, 1));
    this.getCamera().setRotation(new DefaultRotation(-0.2, 0, 0));

    const cube = new CubeStandard("color");
    cube.setRotation(new DefaultRotation(-0.8, -0.1, 0.8));
    cube.setPosition(new DefaultPosition(2, 2, 2));
    cube.setScale(new DefaultScale(1, 2, 2));
    cube.setColor("#8066bd");
    this.addFigureInScene(cube);

    const cube2 = new OtherCube();
    cube2.setRotation(new DefaultRotation(-0.8, -0.1, 0.8));
    cube2.setPosition(new DefaultPosition(6, 2, 2));
    cube2.setScale(new DefaultScale(1, 1, 2));
    cube2.setColor("#1790f3");
    this.addFigureInScene(cube2);

    const floor = new Floor();
    this.addFigureInScene(floor);

    const wall1 = new WallXY("texture", "/pngTextures/harshbricks-albedo.png");
    this.addFigureInScene(wall1);

    const wall2 = new WallYZ("texture", "/pngTextures/harshbricks-albedo.png");
    this.addFigureInScene(wall2);

    this.looper.addFigureInUpdates(cube);
    // this.looper.addFigureInUpdates(light);
    // this.looper.addFigureInUpdates(this.getCamera());

    this.onAxes();
  }
}
