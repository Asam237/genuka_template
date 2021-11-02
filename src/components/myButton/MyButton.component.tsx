import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SPACING } from "../../assets/themes/globla.theme";
import { MyText } from "../myText/MyText.component";

export const MyButton = (props: any) => {
    return (
        <View style={[styles.container, { backgroundColor: props.myButtonColor, borderRadius: props.myBorderRadius, borderColor: props.myBorderColor, borderWidth: props.myBorderWidth }]}>
            <TouchableOpacity onPress={() => props.myNavigation()}>
                <MyText myText={props.myButtonText} myColor={props.myButtonTextColor} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})