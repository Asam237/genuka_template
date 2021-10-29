import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MyButton } from "../../components/myButton/MyButton.component";
import { MyText } from "../../components/myText/MyText.component";
import { AppLayout } from "../layout/app.layout";

export const Welcome = (navigation: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <AppLayout>
                <View>
                    <MyText myText="Hello my Texte !" myVariant="title" />
                    <View style={{ height: 100 }}>
                        <MyButton myNavigation={() => navigation.navigation.navigate("home")} myButtonColor="red" myButtonTextColor="white" myButtonText="valider" />
                    </View>
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