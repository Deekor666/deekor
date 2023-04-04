import {
  AxesHelper,
  Color,
  ColorRepresentation,
  Light,
  Mesh,
  Scene,
} from "three";
import { BaseFigure } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseFigure";
import { DefaultCamera } from "@/models/UpComponents/ThreeJsModels/SystemModels/Camera/DefaultCamera";
import { DefaultRenderer } from "@/models/UpComponents/ThreeJsModels/SystemModels/DefaultRenderer";
import { DefaultLight } from "@/models/UpComponents/ThreeJsModels/SystemModels/Lights/DefaultLight";
import { DefaultCubeStandard } from "@/models/UpComponents/ThreeJsModels/Figures/DefaultCubeStandard";
import { DefaultPosition } from "@/models/UpComponents/ThreeJsModels/MoveEntity/DefaultPosition";
import { DefaultAxesHelper } from "@/models/UpComponents/ThreeJsModels/DefaultAxesHelper";
import { DefaultCubeBasic } from "@/models/UpComponents/ThreeJsModels/Figures/DefaultCubeBasic";
import { BaseLight } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseLight";

export class BaseScene {
  private _width: number;
  private _height: number;
  private _figures: BaseFigure[];
  private _lights: BaseLight[];
  private _camera: DefaultCamera;
  private _cameraPosition: DefaultPosition;
  private readonly _scene: Scene;
  private _background: Color;
  private _renderer: DefaultRenderer;
  private _axes: DefaultAxesHelper | null;
  private _parentContainer: HTMLDivElement;

  constructor(parentContainer: HTMLDivElement, width: number, height: number) {
    this._width = width;
    this._height = height;
    this._parentContainer = parentContainer;
    this._figures = [];
    this._lights = [];
    this._axes = null;
    this._scene = new Scene();
    this._renderer = new DefaultRenderer(parentContainer);

    this._cameraPosition = BaseScene._DEFAULT_CAMERA_POSITION;
    this._camera = new DefaultCamera(
      this._width / this._height,
      this._cameraPosition
    );

    this._background = BaseScene._DEFAULT_BACKGROUND;
    this.background = BaseScene._DEFAULT_BACKGROUND;
  }

  public onAxes() {
    this._axes = new DefaultAxesHelper(10);
    this.addScene(this._axes.object);
    this.render();
  }

  public offAxes() {
    if (this._axes !== null) {
      this._scene.remove(this._axes.object);
      this.render();
    }
  }
  public setLight(light: DefaultLight) {
    this.addLightInScene(light);
    this.render();
  }
  public setCamera(position: DefaultPosition) {
    this._cameraPosition = position;
    this._camera = new DefaultCamera(this._width / this._height, position);
    this.render();
  }
  public addLightInScene(light: DefaultLight): void {
    this.addScene(light.object);
    this._lights.push(light);
  }
  public addFigureInScene(figure: DefaultCubeStandard | DefaultCubeBasic) {
    this.addScene(figure.object);
    this._figures.push(figure);
  }

  public addScene(object: Light | Mesh | AxesHelper) {
    this._scene.add(object);
    this.render();
  }
  render() {
    this._renderer.object.setSize(this._width, this._height);
    this._camera.object.updateProjectionMatrix();
    this._renderer.object.setPixelRatio(window.devicePixelRatio);
    this._renderer.object.render(this._scene, this._camera.object);
  }

  set background(value: Color) {
    this._background = value;
    this._scene.background = new Color(value as ColorRepresentation);
    this.render();
  }

  get figures(): BaseFigure[] {
    return this._figures;
  }

  get lights(): BaseLight[] {
    return this._lights;
  }

  private static _DEFAULT_BACKGROUND = new Color("grey");
  private static _DEFAULT_CAMERA_POSITION = new DefaultPosition(0, 0, 20);
}
