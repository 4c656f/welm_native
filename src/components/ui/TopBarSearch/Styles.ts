import {Dimensions, StyleSheet} from "react-native";
import {indexStyleVariables} from "../../../materials/styles";

const screen = Dimensions.get("screen");
export const Styles = StyleSheet.create({
    container: {
        backgroundColor: indexStyleVariables.defaultButtonBg,
        borderRadius: indexStyleVariables.defaultButtonBorderRadius,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    input: {
        color: "white",
        width: "100%",
        height: 50,
        paddingVertical: 13,
        paddingLeft: 20,
    },
    resultsContainer: {
        position: "absolute",
        top: 70,
        width: "100%",
        height: screen.height / 2,

    },
    cancelText: {
        fontSize: 10,

    },
    cancelTextContainer: {
        position: "absolute",
        right: 0,
        marginRight: 20,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",

    },
    fetchingText: {
        position: "absolute",
        right: 0,
        marginRight: 20,
        fontSize: 10,
    },
})