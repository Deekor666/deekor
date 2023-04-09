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
import { CubeStandard } from "@/models/UpComponents/ThreeJsModels/Figures/CubeStandard";
import { DefaultAxesHelper } from "@/models/UpComponents/ThreeJsModels/DefaultAxesHelper";
import { CubeBasic } from "@/models/UpComponents/ThreeJsModels/Figures/CubeBasic";
import { BaseLight } from "@/models/UpComponents/ThreeJsModels/BaseModels/BaseLight";
import { Looper } from "@/models/UpComponents/ThreeJsModels/Animation/Looper";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class BaseScene {
  private _width: number;
  private _height: number;
  private _figures: BaseFigure[];
  private _lights: BaseLight[];
  private _camera: DefaultCamera;
  private _scene: Scene;
  private _background: Color;
  private _renderer: DefaultRenderer;
  private _axes: DefaultAxesHelper | null;
  private _parentContainer: HTMLDivElement;
  private _looper: Looper;
  private _orbitControl: OrbitControls;

  constructor(parentContainer: HTMLDivElement, width: number, height: number) {
    this._width = width;
    this._height = height;
    this._parentContainer = parentContainer;
    this._figures = [];
    this._lights = [];
    this._axes = null;
    this._scene = new Scene();
    this._renderer = new DefaultRenderer(parentContainer);

    this._camera = new DefaultCamera(this._width / this._height);

    this._background = BaseScene._DEFAULT_BACKGROUND;
    this.background = BaseScene._DEFAULT_BACKGROUND;

    this._looper = new Looper(
      this._camera.object,
      this._scene,
      this._renderer.object
    );
    this._orbitControl = new OrbitControls(
      this._camera.object,
      this._parentContainer
    );
    // плавная прокрутка
    this._orbitControl.enableDamping = true;
  }

  public setSize() {
    this._camera.object.aspect =
      this._parentContainer.clientWidth / this._parentContainer.clientHeight;
    this._camera.object.updateProjectionMatrix();

    this._renderer.object.setSize(
      this._parentContainer.clientWidth,
      this._parentContainer.clientHeight
    );
    this._renderer.object.setPixelRatio(window.devicePixelRatio);
  }

  public offOrbitControl(): void {
    this._orbitControl.enabled = false;
  }

  public onOrbitControl(): void {
    this._orbitControl.enabled = true;
  }

  public start() {
    this._looper.start();
  }

  public stop() {
    this._looper.stop();
  }

  public getScene() {
    return this._scene;
  }

  public getCamera() {
    return this._camera;
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
  public addLightInScene(light: DefaultLight): void {
    this.addScene(light.object);
    this._lights.push(light);
  }
  public addFigureInScene(figure: CubeStandard | CubeBasic) {
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

  get looper(): Looper {
    return this._looper;
  }

  private static _DEFAULT_BACKGROUND = new Color("grey");
}
