import React, {FC} from 'react';
import {Text, TouchableHighlight, View} from "react-native";
import {ITickerDescription} from "../../../../types/ITickerDescription";
import {Styles} from "./Styles";
import {indexStyles, indexStyleVariables} from "../../../../materials/styles";


interface SearchTickerItemProps extends ITickerDescription {
    onClick: () => void;
    // selection:number;
    index: number;
}

const SearchItem: FC<SearchTickerItemProps> = (props) => {

    const {
        ticker,
        id,
        exchange,
        company_name,
        index,
        onClick
    } = props


    return (


        <View
            style={Styles.search_card}

        >
            <TouchableHighlight
                style={{flex: 1, borderRadius: indexStyleVariables.defaultButtonBorderRadius}}
                activeOpacity={indexStyleVariables.defaultButtonBgHoverOp}
                onPress={() => onClick()}
                underlayColor={indexStyleVariables.defaultButtonBgHover}

            >
                <View
                    style={Styles.btnContainer}

                >
                    <View style={Styles.ticker}>
                        <Text style={[indexStyles.font, Styles.tickerFont]}>{ticker}</Text>
                    </View>
                    <View style={Styles.exchange}>
                        <Text style={[indexStyles.font, Styles.exchangeFont]}>{exchange}</Text>
                        <Text style={[indexStyles.font, Styles.companyFont]}>{company_name}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>

    );
};

export default SearchItem;