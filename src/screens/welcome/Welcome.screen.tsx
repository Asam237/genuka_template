import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MyButton } from "../../components/myButton/MyButton.component";
import { MyText } from "../../components/MyText.component";
import { AppLayout } from "../layout/app.layout";

export const Welcome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AppLayout>
                <View>
                    <MyText myText="Hello my Texte !" myVariant="title" />
                    <View style={{ height: 100 }}>
                        <MyButton myNavigation={() => console.log("Hello alert !")} myButtonColor="red" myButtonTextColor="white" myButtonText="valider" />
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