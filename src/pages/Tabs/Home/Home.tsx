import React, {FC, useEffect} from 'react';
import {Button, Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View} from "react-native";
import {NavigationProp, } from "@react-navigation/native";
import {homeStyles} from "./HomeStyles";
import TopBarSearch from "../../../components/ui/TopBarSearch/TopBarSearch";
import HomePage from "../../../components/pagesComponents/HomePage/HomePage";

interface HomeProps {
    navigation: NavigationProp<any, any>;
}


const Home:FC<HomeProps> = ({navigation}) => {




    return (
        <TouchableWithoutFeedback
            onPress={()=>Keyboard.dismiss()}
        >
            <SafeAreaView
                style={homeStyles.container}
            >
                <HomePage/>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Home;