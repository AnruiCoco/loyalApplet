import { Component, PropsWithChildren } from 'react'
import Taro from "@tarojs/taro";
import './app.scss'

class App extends Component<PropsWithChildren> {

  componentDidMount () {
    Taro.getSystemInfo({
      success: res => {
        global = Object.assign(global, res, { debug: false });
        console.log(res)
        if (res.model && res.model.includes('iPhone X')) {
          global.iphoneX = true;
        } else if (res.platform === 'ios' && res.screenHeight === 812 && res.screenWidth === 375 ||
          res.screenHeight === 896 && res.screenWidth === 414) {
          global.iphoneX = true;
        } else {
          global.iphoneX = false;
        }
      }
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
