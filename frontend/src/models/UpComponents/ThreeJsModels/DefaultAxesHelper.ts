import { AxesHelper, Color } from "three";

export class DefaultAxesHelper {
  private _object: AxesHelper;
  private _size: number;
  private _xAxisColor: Color;
  private _yAxisColor: Color;
  private _zAxisColor: Color;

  constructor(size: number) {
    this._size = size;
    this._object = new AxesHelper(this.size);
    this._xAxisColor = DefaultAxesHelper.DEFAULT_X_COLOR;
    this._yAxisColor = DefaultAxesHelper.DEFAULT_Y_COLOR;
    this._zAxisColor = DefaultAxesHelper.DEFAULT_Z_COLOR;
    this.setColors(this.xAxisColor, this.yAxisColor, this.zAxisColor);
  }

  public setColors(xColor: Color, yColor: Color, zColor: Color): void {
    this.object.setColors(xColor, yColor, zColor);
  }
  get object(): AxesHelper {
    return this._object;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get xAxisColor(): Color {
    return this._xAxisColor;
  }

  get yAxisColor(): Color {
    return this._yAxisColor;
  }

  get zAxisColor(): Color {
    return this._zAxisColor;
  }

  public static DEFAULT_SIZE = 1;
  public static DEFAULT_X_COLOR = new Color("chartreuse");
  public static DEFAULT_Y_COLOR = new Color("cyan");
  public static DEFAULT_Z_COLOR = new Color("red");
}
