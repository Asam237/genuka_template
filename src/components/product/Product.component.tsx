import React from "react";
import { Image, View } from "react-native";
import { COLORS } from "../../assets/themes/globla.theme";
import { MyText } from "../myText/MyText.component";

export const Product = (data: any) => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ height: 100, width: "95%" }}
        source={data.props.picture}
      />
      <MyText
        variant="title"
        myColor={COLORS.black}
        myFontWeight="bold"
        myText={data.props.name}
        fontSize={17}
        myLineHeight={25}
        marginVertical={2}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MyText
          variant="title"
          myColor={COLORS.black}
          myText={data.props.new_price}
          fontSize={14}
          myLineHeight={25}
          marginVertical={2}
          myFontWeight="bold"
        />
        <MyText
          variant="title"
          myColor={COLORS.black}
          myText={data.props.old_price}
          fontSize={12}
          myLineHeight={25}
          myMarginHorizontal={2}
        />
      </View>
    </View>
  );
};
