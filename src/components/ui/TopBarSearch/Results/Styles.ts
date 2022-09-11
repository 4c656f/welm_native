import {StyleSheet} from "react-native";
import {indexStyleVariables} from "../../../../utils/styles";


export const Styles = StyleSheet.create({
    search_card:{

        height: 70,
        width: "100%",

        marginBottom: 10,

    },
    btnContainer:{
        flex: 1,
        color: indexStyleVariables.defaultElementColor,
        display: "flex",
        backgroundColor: indexStyleVariables.defaultButtonBg,
        borderRadius: indexStyleVariables.defaultButtonBorderRadius,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: indexStyleVariables.defaultButtonBorderColor
    },

    ticker:{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 10
    },
    exchange:{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-around"
    },
    tickerFont:{
        fontSize: 20,
        fontWeight: "600"
    },
    exchangeFont:{

    },
    companyFont:{
        fontSize: 10,
        fontWeight: "300"
    }
}
)