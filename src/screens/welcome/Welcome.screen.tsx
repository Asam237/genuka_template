import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyText } from "../../components/MyText.component";
import { AppLayout } from "../layout/app.layout";

export const Welcome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AppLayout>
                <View>
                    <MyText myText="Hello my Texte !" myVariant="title" />
                </View>
            </AppLayout>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})