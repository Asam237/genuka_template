import React from "react";
import { Text, SafeAreaView, View, StatusBar, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SPACING } from "../../assets/themes/globla.theme";
import { MyButton } from "../../components/myButton/MyButton.component";
import { MyInput } from "../../components/myInput/MyInput.component";
import { MyText } from "../../components/myText/MyText.component";
import { LANGUAGES } from "../../constants/languages";
import { BUTTON_SIZE } from "../signup/Signup.screen";
import { Formik } from "formik";
import { loginService } from "../../services/auth.service";
const navigationRef = React.createRef();

const HEADER_HEIGHT = 180;

export const Login = (navigation: any) => {
  const initialValues = {
    username: "",
    password: "",
    fromApi: true,
  };

  let submit = async (value: any) => {
    await loginService(value.email, value.password);
    await navigation.navigation.navigate("home");
    // if (value.username === "asam" && value.password == "123456") {
    //   console.log("Success !", value);
    //   await navigation.navigation.navigate("home");
    // } else {
    //   console.log("Informations not valid");
    // }
  };
  const toSignup = () => {
    return navigation.navigation.navigate("signup");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryColor} />
      <View style={styles.container__header}>
        <MyText
          myVariant="subTitle"
          myFontWeight="bold"
          myColor={COLORS.secondaryColor}
          myText={LANGUAGES.login.login}
        />
        <MyText
          myMarginVertical={SPACING.small}
          myLineHeight={SPACING.xlarge}
          myVariant="normal"
          myColor={COLORS.secondaryColor}
          myText={LANGUAGES.welcome.subTitle}
        />
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={(value: any) => submit(value)}
      >
        {({ handleChange, handleSubmit }) => (
          <View style={styles.container__items}>
            <MyInput
              onChangeText={handleChange("email")}
              myPlaceHolder={LANGUAGES.login.username}
            />
            <MyInput
              myMarginTop={SPACING.xlarge}
              myPlaceHolder={LANGUAGES.login.password}
              onChangeText={handleChange("password")}
            />
            <View
              style={{
                width: SPACING.full,
                flexDirection: "row",
                height: 50,
                marginTop: SPACING.large,
              }}
            >
              <MyButton
                myBorderRadius={BUTTON_SIZE / 2}
                // myNavigation={() => navigation.navigation.navigate("home")}
                myNavigation={() => handleSubmit()}
                myButtonColor={COLORS.primaryColor}
                myButtonTextColor={COLORS.secondaryColor}
                myButtonText={LANGUAGES.login.login}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: SPACING.small,
              }}
            >
              <View style={styles.container__line} />
              <MyText
                myText="Or"
                myMarginHorizontal={10}
                myMarginVertical={10}
              />
              <View style={styles.container__line} />
            </View>
            <TouchableOpacity onPress={() => toSignup()}>
              <MyText myVariant="normal" myText={LANGUAGES.login.signup} />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container__header: {
    backgroundColor: COLORS.primaryColor,
    flex: 2 / 3,
    padding: SPACING.medium,
    borderBottomLeftRadius: SPACING.large,
    borderBottomRightRadius: SPACING.large,
  },
  container__items: {
    flex: 3,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: SPACING.medium,
    width: SPACING.full,
  },
  container__line: {
    height: 1,
    backgroundColor: "#cdcdcd",
    flex: 1,
  },
});
