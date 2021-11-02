import React from "react";
import { Text, SafeAreaView, View, StatusBar, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SPACING } from "../../assets/themes/globla.theme";
import { MyButton } from "../../components/myButton/MyButton.component";
import { MyInput } from "../../components/myInput/MyInput.component";
import { MyText } from "../../components/myText/MyText.component";
import { LANGUAGES } from "../../constants/languages";
import { AppLayout } from "../layout/app.layout";

const HEADER_HEIGHT = 180;

export const Login = (navigation: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primaryColor} />
            <View style={styles.container__header}>
                <MyText myVariant="title" myColor={COLORS.secondaryColor} myText={LANGUAGES.login.login} />
                <MyText myMarginVertical={SPACING.small} myLineHeight={SPACING.xlarge} myVariant="subTitle" myColor={COLORS.secondaryColor} myText={LANGUAGES.welcome.subTitle} />
            </View>
            <View style={styles.container__items}>
                <MyInput myPlaceHolder={LANGUAGES.login.username} />
                <MyInput myMarginTop={SPACING.xmedium} myPlaceHolder={LANGUAGES.login.password} />
                <View style={{ width: SPACING.full, flexDirection: 'row', height: 50, marginTop: SPACING.xlarge }}>
                    <MyButton myBorderRadius={60 / 2} myNavigation={() => navigation.navigation.navigate("home")} myButtonColor={COLORS.primaryColor} myButtonTextColor={COLORS.secondaryColor} myButtonText={LANGUAGES.login.login} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', marginHorizontal: SPACING.small }}>
                    <View style={styles.container__line} />
                    <MyText myText="Or" myMarginHorizontal={10} myMarginVertical={10} />
                    <View style={styles.container__line} />
                </View>
                <TouchableOpacity>
                    <MyText myVariant="normal" myText={LANGUAGES.login.signup} />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container__header: {
        backgroundColor: COLORS.primaryColor,
        flex: 1,
        padding: SPACING.medium,
        borderBottomLeftRadius: SPACING.large,
        borderBottomRightRadius: SPACING.large
    },
    container__items: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: SPACING.medium,
        width: SPACING.full,
    },
    container__line: {
        height: 1,
        backgroundColor: "#cdcdcd",
        flex: 1

    }
})