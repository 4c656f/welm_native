import {RouteProp} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type IHomeStackParams = {
    Home: undefined;
    TickerPage: {
        ticker: string;
    };
    FullPost: {
        Id: number;
    };
};

export type ITickerPageScreenRouteProp = RouteProp<IHomeStackParams,
    'TickerPage'>;

export type IHomeNavigationProps = NativeStackNavigationProp<IHomeStackParams>