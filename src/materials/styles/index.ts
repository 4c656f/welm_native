import {StyleSheet} from "react-native";

export const indexStyleVariables = {


    //fonts
    defaultElementActiveColor: "white",
    defaultElementColor: "gray",
    secondColor: "#5b5b5b",

    defaultElementActiveColorOpposite: "white",
    defaultElementColorOpposite: "gray",

    //buttons
    defaultButtonBg: "#232323",
    defaultButtonBgHover: "#3a3a3a",
    defaultButtonBgHoverOp: 0.5,
    defaultButtonBgActive: undefined,
    defaultButtonBorderRadius: 7,
    defaultButtonBorderColor: "#333333",


    //theme
    defaultBg: "black"

}
export const indexStyles = StyleSheet.create({
        font: {
            color: indexStyleVariables.defaultElementActiveColor
        }
    }
)
