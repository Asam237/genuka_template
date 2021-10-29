import React from "react"
import { StyleSheet, View } from "react-native"
import { SPACING } from "../../assets/themes/globla.theme"

export const AppLayout = (props: any) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SPACING.xsmall
    }
})