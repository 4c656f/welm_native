import React, {FC} from 'react';
import {Keyboard, SafeAreaView, TouchableWithoutFeedback} from "react-native";
import {NavigationProp,} from "@react-navigation/native";
import {homeStyles} from "./HomeStyles";
import HomePage from "../../../components/pagesComponents/HomePage/HomePage";

interface HomeProps {
    navigation: NavigationProp<any, any>;
}


const Home: FC<HomeProps> = ({navigation}) => {


    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
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