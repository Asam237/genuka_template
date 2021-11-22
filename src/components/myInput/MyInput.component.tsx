import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SPACING } from "../../assets/themes/globla.theme";

export const MyInput = (props: any) => {
  return (
    <View style={{ width: SPACING.full, marginTop: props.myMarginTop }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#cdcdcd",
          borderRadius: SPACING.xsmall,
        }}
        placeholder={props.myPlaceHolder}
        onChange={(e: any) => props.onChangeText!(e)}
      />
    </View>
  );
};
