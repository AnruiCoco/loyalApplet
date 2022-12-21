一、路由配置
app.condfig.ts 文件中新增路由配置

二、路由跳转
import Taro from "@tarojs/taro";
Taro.navigateTo({ url: "/pages/team/index" })

三、IOS 底部安全区

四、分享
Taro.showShareMenu({
withShareTicket: true
})
