import React from "react";
import { StyleSheet, Text } from "react-native";
import { FONT_SIZE, SPACING } from "../../assets/themes/globla.theme";

const TEXT_STYLE = {
    normal: "normal",
    title: "title",
    subTitle: "subTitle"
}

const changeByVariant = (variant: any) => {
    if (variant === TEXT_STYLE.normal) {
        return styles.normal
    }
    if (variant === TEXT_STYLE.title) {
        return styles.title
    }
    if (variant === TEXT_STYLE.subTitle) {
        return styles.subTitle
    }
}

export const MyText = (props: any) => {
    return <Text style={[changeByVariant(props.myVariant), { color: props.myColor, textAlign: props.myTextAlign, fontWeight: props.myFontWeight, marginVertical: props.myMarginVertical, lineHeight: props.myLineHeight }]}>{props.myText}</Text>
}

const styles = StyleSheet.create({
    normal: {
        fontSize: FONT_SIZE.normal
    },
    subTitle: {
        fontSize: FONT_SIZE.subTitle,
    },
    title: {
        fontSize: FONT_SIZE.title,
    }
})