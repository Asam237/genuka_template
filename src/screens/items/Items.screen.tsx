import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppLayout } from "../layout/app.layout";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../assets/themes/globla.theme";

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
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container__header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
