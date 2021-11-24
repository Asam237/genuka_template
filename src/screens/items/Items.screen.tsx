import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppLayout } from "../layout/app.layout";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { COLORS, SPACING } from "../../assets/themes/globla.theme";
import { MyText } from "../../components/myText/MyText.component";

export const Items = () => {
  return (
    <AppLayout>
      <View style={styles.container__header}>
        <TouchableOpacity onPress={() => null}>
          <FontAwesomeIcon
            icon={faBars}
            size={20}
            style={{ color: COLORS.black }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <FontAwesomeIcon
            icon={faSearch}
            size={20}
            style={{ color: COLORS.black }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container__header__name}>
        <MyText
          variant="title"
          myColor={COLORS.black}
          myFontWeight="bold"
          myText="Hello Abba Sali"
          fontSize={20}
          marginVertical={2}
        />
        <MyText
          fontSize={14}
          variant="subTitle"
          myColor="#504C47"
          myText="Lets gets somethings?"
        />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container__header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SPACING.small,
  },
  container__header__name: {
    marginVertical: SPACING.xlarge,
  },
});
