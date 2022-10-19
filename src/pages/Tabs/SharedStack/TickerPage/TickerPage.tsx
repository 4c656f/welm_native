import React, {FC} from 'react';
import {useRoute} from '@react-navigation/native';
import {ITickerPageScreenRouteProp} from "../../../../types/IHomeStackParams";
import {Text, View} from "react-native";

interface TickerPageProps {

}

const TickerPage: FC<TickerPageProps> = () => {

    const route = useRoute<ITickerPageScreenRouteProp>()


    return (
        <View>
            <Text>
                {route.params.ticker}
            </Text>

        </View>
    );
};

export default TickerPage;