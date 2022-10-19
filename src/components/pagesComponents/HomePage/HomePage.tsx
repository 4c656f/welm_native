import React from 'react';
import {View} from "react-native";
import {Styles} from "./Styles";
import TopBarSearch from "../../ui/TopBarSearch/TopBarSearch";
import PostFeed from "../../ui/PostFeed/PostFeed";

const HomePage = () => {


    return (
        <View style={Styles.container}>
            <View style={Styles.topBar}>
                <TopBarSearch/>
            </View>
            <PostFeed/>
        </View>
    );
};

export default HomePage;