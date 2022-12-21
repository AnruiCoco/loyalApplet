//global全局数据声明
export interface Global {
  //是否为开发环境
  debug: boolean;
  console: any;
  /*****设备相关信息*******/
  iphoneX: boolean;
  SDKVersion: any;
  brand: any;
  fontSizeSetting: number;
  language: any;
  model: any;
  pixelRatio: number;
  platform: string;
  screenHeight: number;
  screenWidth: number;
  statusBarHeight: number;
  system: string;
  version: any;
  windowHeight: number;
  safeArea: {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
  },
}
