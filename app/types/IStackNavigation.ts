export interface IStackNavigation {
  pop(): void;
  goBack(): void;
  popToTop(): void;
  canGoBack(): boolean;
  isFocused(): boolean;
  reset(state: any): void;
  dangerouslyGetState(): any;
  dangerouslyGetParent(): any;
  dispatch(action: any): void;
  setParams(params: any): void;
  setOptions(options: any): void;
  push(routeName: string, params: any): void;
  replace(routeName: string, params?: any): void;
  navigate(routeName: string, params?: any): void;
  removeListener: (type: string, callback: Function) => void;
  emit({ type, target }: { type: string; target: string }): void;
  addListener: (type: string, callback: Function) => Function;
}
