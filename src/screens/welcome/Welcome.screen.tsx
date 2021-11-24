import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MyButton } from "../../components/myButton/MyButton.component";
import { MyText } from "../../components/myText/MyText.component";
import { AppLayout } from "../layout/app.layout";
import ShoppingBag from "../../assets/img/logo.png";
import mobile from "../../assets/img/app.png";
import { LANGUAGES } from "../../constants/languages";
import { COLORS, SPACING } from "../../assets/themes/globla.theme";

const IMAGE_SIZE = 80;
const IMAGE_HEADER = 35;
const CONTAINER__IMG = 200;

export const Welcome = (navigation: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppLayout>
        <View style={styles.container__header}>
          <Image source={mobile} style={styles.container__header__img} />
          <MyText
            myLineHeight={SPACING.large}
            myFontWeight="bold"
            myMarginVertical={SPACING.medium}
            myTextAlign="center"
            myText={LANGUAGES.welcome.titleApp}
            myVariant="subTitle"
            fontSize={18}
            width={140}
          />
        </View>
        <View style={styles.container__main__logo}>
          <View style={styles.container__main__logo__style}>
            <Image
              style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
              source={ShoppingBag}
            />
          </View>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MyText
            myFontWeight="bold"
            myText={LANGUAGES.welcome.title}
            myVariant="subTitle"
            fontSize={22}
            myTextAlign="center"
          />
          <MyText
            myLineHeight={SPACING.large}
            myMarginVertical={SPACING.medium}
            myTextAlign="center"
            myText={LANGUAGES.welcome.subTitle}
            myVariant="normal"
            width={300}
          />
          <View
            style={{
              width: SPACING.full,
              flexDirection: "row",
              paddingHorizontal: SPACING.xlarge,
              height: 50,
            }}
          >
            <MyButton
              myBorderRadius={20 / 2}
              myNavigation={() => navigation.navigation.navigate("login")}
              myButtonColor={COLORS.primaryColor}
              myButtonTextColor={COLORS.secondaryColor}
              myButtonText={LANGUAGES.welcome.started}
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
  container__header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container__header__img: {
    width: IMAGE_HEADER,
    height: IMAGE_HEADER,
  },
  container__main__logo: {
    justifyContent: "center",
    alignItems: "center",
  },
  container__main__logo__style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryColor,
    width: CONTAINER__IMG,
    height: CONTAINER__IMG,
    borderRadius: CONTAINER__IMG / 2,
  },
});
