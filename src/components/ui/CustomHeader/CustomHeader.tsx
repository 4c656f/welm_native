import React, {FC} from 'react';
import {View} from "react-native";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";
import {styles} from "./style";

interface CustomHeaderProps extends NativeStackHeaderProps {

}

const CustomHeader: FC<CustomHeaderProps> = (props) => {

    const {
        back,
        route,
        options,
        navigation
    } = props


    return (
        <View style={styles.container}>

            {/*<TopBarSearch/>*/}

        </View>
    );
};

export default CustomHeader;