import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { COLORS, SPACING } from "../../assets/themes/globla.theme";
import { MyButton } from "../../components/myButton/MyButton.component";
import { MyInput } from "../../components/myInput/MyInput.component";
import { LANGUAGES } from "../../constants/languages";
import { Formik } from "formik";
import { AppLayout } from "../layout/app.layout";
import { registerService } from "../../services/auth.service";

export const BUTTON_SIZE = 60;

export const Signup = (navigation: any) => {
  let initialValues = {
    email: "",
    tel: "",
    firstname: "",
    lastname: "",
    password: "",
    company_id: "",
    fromApi: true,
  };

  const submit = async (value: any) => {
    await registerService(
      value.email,
      value.tel,
      value.firstname,
      value.lastname,
      value.password,
      value.company_id,
      value.fromApi
    );

    console.log(value);
    await navigation.navigation.navigate("login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={COLORS.primaryColor} />
        <Formik
          initialValues={initialValues}
          onSubmit={(values: any) => submit(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <AppLayout>
              <View style={styles.container__items}>
                <MyInput
                  onChangeText={handleChange("firstname")}
                  myMarginTop={SPACING.large}
                  myPlaceHolder={LANGUAGES.login.firstName}
                />
                <MyInput
                  onChangeText={handleChange("lastname")}
                  myMarginTop={SPACING.xlarge}
                  myPlaceHolder={LANGUAGES.login.lastName}
                />
                <MyInput
                  onChangeText={handleChange("email")}
                  myMarginTop={SPACING.xlarge}
                  myPlaceHolder={LANGUAGES.login.mail}
                />
                <MyInput
                  onChangeText={handleChange("tel")}
                  myMarginTop={SPACING.xlarge}
                  myPlaceHolder={LANGUAGES.login.password}
                />
                <MyInput
                  onChangeText={handleChange("password")}
                  myMarginTop={SPACING.xlarge}
                  myPlaceHolder={LANGUAGES.login.tel}
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
                    myNavigation={() => handleSubmit()}
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
                    marginTop: SPACING.medium,
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
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container__items: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: SPACING.medium,
    width: SPACING.full,
  },
});
