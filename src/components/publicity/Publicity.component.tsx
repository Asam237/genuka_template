import React from "react";
import { Button, Text, View } from "react-native";
import { COLORS, SPACING } from "../../assets/themes/globla.theme";
import { MyButton } from "../myButton/MyButton.component";
import { MyText } from "../myText/MyText.component";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export const Publicity = (data: any) => {
  console.log(data.props.background);
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: `${data.props.background}`,
        height: 150,
        borderRadius: SPACING.xmedium,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: 200,
          marginLeft: SPACING.medium,
          height: "100%",
        }}
      >
        <View style={{ width: 180 }}>
          <MyText
            variant="title"
            myColor={COLORS.secondaryColor}
            myFontWeight="bold"
            myText={data.props.title}
            fontSize={17}
            myLineHeight={25}
            marginVertical={2}
          />
        </View>
        <View style={{ height: 30, width: 80, marginTop: SPACING.xmedium }}>
          <MyButton
            myButtonColor={COLORS.secondaryColor}
            myBorderRadius={20}
            myButtonText="Get Now"
            myButtonTextColor={COLORS.primaryColor}
            fontSize={12}
            fontWeight="bold"
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faShoppingBasket}
          size={50}
          style={{ color: COLORS.secondaryColor }}
        />
      </View>
    </View>
  );
};
