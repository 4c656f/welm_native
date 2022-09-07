import React, {FC, useEffect} from 'react';
import {Button, SafeAreaView, Text, View} from "react-native";
import {NavigationProp, } from "@react-navigation/native";


interface HomeProps {
    navigation: NavigationProp<any, any>;
}


const Home:FC<HomeProps> = ({navigation}) => {




    return (
        <SafeAreaView>
            <Text>
                Home
            </Text>
            <Button title={"navigate to post"} onPress={()=> navigation.navigate("FullPost")} />
        </SafeAreaView>
    );
};

export default Home;