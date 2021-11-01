import React from "react";
import { Text, SafeAreaView, View, StatusBar, StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../assets/themes/globla.theme";
import { MyButton } from "../../components/myButton/MyButton.component";
import { MyInput } from "../../components/myInput/MyInput.component";
import { AppLayout } from "../layout/app.layout";

const HEADER_HEIGHT = 180;

export const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primaryColor} />
            <View style={styles.container__header}>
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
        flex: 1
    },
    container__items: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 3,
        paddingHorizontal: SPACING.small,
        width: SPACING.full
    }
})