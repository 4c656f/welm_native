import React, {FC} from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {ITickerDescription} from "../../../../types/ITickerDescription";
import {Styles} from "./Styles";
import {indexStyles, indexStyleVariables} from "../../../../utils/styles";



interface SearchTickerItemProps extends  ITickerDescription{
    // onClick:any;
    // selection:number;
    index:number
}

const SearchItem:FC<SearchTickerItemProps> = ({ticker, id, exchange, company_name, index}) => {

    return (


            <View
                style={Styles.search_card}

            >
                <TouchableHighlight
                    style={{flex: 1, borderRadius: indexStyleVariables.defaultButtonBorderRadius}}
                    activeOpacity={indexStyleVariables.defaultButtonBgHoverOp}
                    onPress={()=>console.log("press")}
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