import { Global } from "@/global";

export class BaseHtmlElement {
  protected _width: number;
  private _height: number;
  protected _className: string;
  public _htmlElementType: string;
  private _childList: HTMLElement[];
  protected _htmlElement: HTMLElement;

  constructor(htmlElement: string);
  constructor(
    htmlElement:
      | HTMLElement
      | HTMLDivElement
      | HTMLInputElement
      | HTMLSpanElement
  );
  constructor(htmlElement: string | HTMLElement) {
    if (htmlElement instanceof HTMLElement) {
      this._htmlElementType = htmlElement.tagName;
      this._htmlElement = htmlElement;
    } else {
      this._htmlElementType = htmlElement;
      this._htmlElement = this.createHtmlElement();
    }
    this._width = this.htmlElement.offsetWidth;
    this.width = this._width;

    this._height =
      this.htmlElement.style.height !== "0" &&
      this.htmlElement.style.height !== null &&
      this.htmlElement.style.height !== "NaN"
        ? parseInt(this.htmlElement.style.height, 10)
        : this.htmlElement.offsetHeight;
    this._className = this._htmlElement.className;
    this._childList = [];

    this.fillClassHtmlElement();
    this.fillDefaultStyleHtmlElement();
    this.fillChildList();
  }

  public setAttributeInDivElement(attrName: string, attrValue: string) {
    this._htmlElement.setAttribute(attrName, attrValue);
  }

  public setAttributeInInputElement(attrName: string, attrValue: string) {
    this.htmlElement.setAttribute(attrName, attrValue);
  }

  private createHtmlElement(elem?: string): HTMLElement {
    let tagName;
    if (elem === null || elem === undefined) {
      tagName = this.htmlElementType;
    } else {
      tagName = elem;
    }
    return document.createElement(tagName) as HTMLElement;
  }

  private fillDefaultStyleHtmlElement() {
    this._htmlElement.style.width = String(this._width) + Global.PX;
    this._htmlElement.style.height = String(this._height) + Global.PX;
  }

  private fillClassHtmlElement() {
    this._htmlElement.className = this._className;
  }

  private fillChildHtmlElement(elem: HTMLElement) {
    this._htmlElement.append(elem);
  }

  public fillChildList() {
    this.childList.forEach((elem: HTMLElement) => {
      this.fillChildHtmlElement(elem);
    });
  }

  public getCloneHtmlElement(): HTMLElement {
    return this._htmlElement.cloneNode(true) as HTMLElement;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._htmlElement.style.width = String(value) + Global.PX;
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this.htmlElement.style.height = String(value) + Global.PX;
    this._height = value;
  }

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
    this.htmlElement.className = value;
  }

  get htmlElementType(): string {
    return this._htmlElementType;
  }

  set htmlElementType(value: string) {
    this._htmlElementType = value;
  }
  get htmlElement(): HTMLElement {
    return this._htmlElement;
  }
  get childList(): HTMLElement[] {
    return this._childList;
  }

  set childList(value: HTMLElement[]) {
    this._childList = value;
  }
}
