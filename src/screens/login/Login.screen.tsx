import React from "react";
import { Text, SafeAreaView, View, StatusBar, StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../assets/themes/globla.theme";
import { MyButton } from "../../components/myButton/MyButton.component";
import { MyInput } from "../../components/myInput/MyInput.component";
import { MyText } from "../../components/myText/MyText.component";
import { LANGUAGES } from "../../constants/languages";
import { AppLayout } from "../layout/app.layout";

const HEADER_HEIGHT = 180;

export const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primaryColor} />
            <View style={styles.container__header}>
                <MyText myVariant="title" myColor={COLORS.secondaryColor} myText="Login" />
                <MyText myMarginVertical={SPACING.small} myLineHeight={SPACING.xlarge} myVariant="subTitle" myColor={COLORS.secondaryColor} myText={LANGUAGES.welcome.subTitle} />
            </View>
            <View style={styles.container__items}>
                <MyInput myPlaceHolder="username" />
                <MyInput myMarginTop={SPACING.xmedium} myPlaceHolder="username" />
                <MyButton />
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
        padding: SPACING.medium
    },
    container__items: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: SPACING.medium,
        width: SPACING.full,
    }
})