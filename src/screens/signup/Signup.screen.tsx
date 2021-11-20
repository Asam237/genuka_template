import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { COLORS, SPACING } from "../../assets/themes/globla.theme";
import { MyButton } from "../../components/myButton/MyButton.component";
import { MyInput } from "../../components/myInput/MyInput.component";
import { LANGUAGES } from "../../constants/languages";
import { AppLayout } from "../layout/app.layout";

const BUTTON_SIZE = 60;

export const Signup = (navigation: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryColor} />
      <AppLayout>
        <View style={styles.container__items}>
          <MyInput myPlaceHolder={LANGUAGES.login.username} />
          <MyInput
            myMarginTop={SPACING.xmedium}
            myPlaceHolder={LANGUAGES.login.mail}
          />
          <MyInput
            myMarginTop={SPACING.xmedium}
            myPlaceHolder={LANGUAGES.login.password}
          />
          <View
            style={{
              width: SPACING.full,
              flexDirection: "row",
              height: 50,
              marginTop: SPACING.xlarge,
            }}
          >
            <MyButton
              myBorderRadius={BUTTON_SIZE / 2}
              myNavigation={() => navigation.navigation.navigate("home")}
              myButtonColor={COLORS.primaryColor}
              myButtonTextColor={COLORS.secondaryColor}
              myButtonText={LANGUAGES.login.signupTitle}
            />
          </View>
          <View
            style={{
              width: SPACING.full,
              flexDirection: "row",
              height: 50,
              marginTop: SPACING.small,
            }}
          >
            <MyButton
              myBorderRadius={BUTTON_SIZE / 2}
              myNavigation={() => navigation.navigation.navigate("login")}
              myButtonColor={COLORS.secondaryColor}
              myButtonTextColor="#000"
              myButtonText={LANGUAGES.login.login}
              myBorderColor={COLORS.primaryColor}
              myBorderWidth={1}
            />
          </View>
        </View>
      </AppLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container__items: {
    flex: 3,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: SPACING.medium,
    width: SPACING.full,
  },
});
