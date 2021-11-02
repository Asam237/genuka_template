import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MyButton } from "../../components/myButton/MyButton.component";
import { MyText } from "../../components/myText/MyText.component";
import { AppLayout } from "../layout/app.layout";
import ShoppingBag from "../../assets/img/shopping.png"
import { LANGUAGES } from "../../constants/languages";
import { COLORS, SPACING } from "../../assets/themes/globla.theme";

const IMAGE_SIZE = 155

export const Welcome = (navigation: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <AppLayout>
                <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Image style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }} source={ShoppingBag} />
                </View>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <MyText myFontWeight="bold" myText={LANGUAGES.welcome.title} myVariant="title" />
                    <MyText myLineHeight={SPACING.large} myMarginVertical={SPACING.medium} myTextAlign="center" myText={LANGUAGES.welcome.subTitle} myVariant="subTitle" />
                    <View style={{ width: SPACING.full, flexDirection: 'row', paddingHorizontal: SPACING.xlarge, height: 50 }}>
                        <MyButton myBorderRadius={50 / 2} myNavigation={() => navigation.navigation.navigate("login")} myButtonColor={COLORS.primaryColor} myButtonTextColor={COLORS.secondaryColor} myButtonText={LANGUAGES.welcome.started} />
                    </View>
                </View>
            </AppLayout>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})