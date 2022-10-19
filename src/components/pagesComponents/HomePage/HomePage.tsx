import React from 'react';
import {View} from "react-native";
import {Styles} from "./Styles";
import TopBarSearch from "../../ui/TopBarSearch/TopBarSearch";

const HomePage = () => {


    return (
        <View style={Styles.container}>
            <View style={Styles.topBar}>
                <TopBarSearch/>
            </View>
        </View>
    );
};

export default HomePage;