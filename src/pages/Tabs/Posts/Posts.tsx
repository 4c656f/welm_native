import React, {FC} from 'react';
import {Button, SafeAreaView, Text} from "react-native";
import {NavigationProp} from "@react-navigation/native";


interface HomeProps {
    navigation: NavigationProp<any, any>;
}

const Posts: FC<HomeProps> = ({navigation}) => {


    return (
        <SafeAreaView>
            <Text>
                posts
            </Text>
            <Button title={"navigate to post"} onPress={() => navigation.navigate("FullPost")}/>
        </SafeAreaView>
    );
};

export default Posts;