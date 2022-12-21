import { Component, PropsWithChildren } from "react";
import { View, Text, Image, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import CustomSafeAreaView from "../../components/safeAreaView/index";
import "./index.scss";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  callPhoneNumber = () => {
    Taro.makePhoneCall({
      phoneNumber: "021-20569858",
    });
  };

  onShareAppMessage = (res) => {
    return {
      title: "正心谷资本",
      path: "/pages/index/index",
      imgeUrl: "", // todo
    };
  };

  render() {
    return (
      <View className="index">
        <Image
          src="https://m.loyalvalleycapital.com/images/mp/home/banner.png"
          mode="widthFix"
          style="width: 100%; background: #fff;"
        />
        <View className="container">
          <View className="flex mh-px-15 text-center">
            <View className="left">
              <View
                className="con_item item1 text-center"
                onClick={() =>
                  Taro.navigateTo({ url: "/pages/introduce/index" })
                }
              >
                <View>
                  <Image
                    className="logo"
                    src="https://m.loyalvalleycapital.com/images/mp/intro/icon-gsjj.png"
                  />
                  <Text className="f14 gray-333">公司简介</Text>
                </View>
              </View>
              <View
                className="con_item item2"
                onClick={() => Taro.navigateTo({ url: "/pages/team/index" })}
              >
                <View>
                  <Image
                    className="logo"
                    src="https://m.loyalvalleycapital.com/images/mp/intro/icon-team.png"
                  />
                  <Text className="f14 gray-333">团队</Text>
                </View>
              </View>
            </View>

            <View className="right">
              <View
                className="con_item item5"
                onClick={() => Taro.navigateTo({ url: "/pages/feature/index" })}
              >
                <View>
                  <Image
                    className="logo"
                    src="https://m.loyalvalleycapital.com/images/mp/intro/icon-differ.png"
                  />
                  <Text className="f14 gray-333 ">投资特色</Text>
                </View>
              </View>
              <View
                className="con_item item5"
                onClick={() => Taro.navigateTo({ url: "/pages/company/index" })}
              >
                <View>
                  <Image
                    className="logo"
                    src="https://m.loyalvalleycapital.com/images/mp/intro/icon-project.png"
                  />
                  <Text className="f14 gray-333 ">已投企业</Text>
                </View>
              </View>
              <View
                className="con_item item4"
                onClick={() => Taro.navigateTo({ url: "/pages/value/index" })}
              >
                <View>
                  <Image
                    className="logo"
                    src="https://m.loyalvalleycapital.com/images/mp/intro/icon-value.png"
                  />
                  <Text className="f14 gray-333 ">价值观</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="fixed">
          <CustomSafeAreaView customStyle={{ display: "flex" }}>
            <Button className="left" onClick={() => this.callPhoneNumber()}>
              <Text>联系我们</Text>
            </Button>
            <Button className="right" openType="contact">
              <Text>在线咨询</Text>
            </Button>
          </CustomSafeAreaView>
        </View>
      </View>
    );
  }
}
