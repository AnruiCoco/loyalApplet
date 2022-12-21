import { Component, PropsWithChildren } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Global } from "../../const/global";

declare let global: Global;

interface Props {
  customStyle?: any;
  children?: any;
  notNeedBottomPadding?: boolean;
}

interface State {}

class CustomSafeAreaView extends Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    let { customStyle, children, notNeedBottomPadding } = this.props;

    console.log("global.screenHeight", global.screenHeight);
    return (
      <View
        style={{
          width: "100%",
          paddingBottom: notNeedBottomPadding
            ? "0px"
            : `${global.screenHeight - global.safeArea.bottom}px`,
          ...customStyle,
        }}
      >
        {children}
      </View>
    );
  }
}

export default CustomSafeAreaView;
