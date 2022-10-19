import {StyleSheet} from "react-native"
import {indexStyleVariables} from "../../../materials/styles";


export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "transparent",
        padding: 10,
        paddingBottom: 15

    },
    insideContainer: {
        display: "flex",
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // @ts-ignore
        backgroundColor: "#eaeaea",
        borderRadius: indexStyleVariables.defaultButtonBorderRadius + 8
    },
    routeContainer: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center",

    },
    font: {
        color: indexStyleVariables.defaultElementColor,
        fontSize: 12,
        marginTop: 5
    },

    button: {
        borderRadius: indexStyleVariables.defaultButtonBorderRadius,
    },
    activeButton: {
        backgroundColor: indexStyleVariables.defaultButtonBgActive
    },
    nonActiveButton: {

        backgroundColor: indexStyleVariables.defaultButtonBg
    }
});