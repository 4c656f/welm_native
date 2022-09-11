import React, {FC, useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from "react-native";
import {styles} from "./style";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'

import HomeIcon from "../TabNavigatorIcons/HomeIcon";
import PostsIcon from "../TabNavigatorIcons/PostsIcon";
import {indexStyleVariables} from "../../../utils/styles";

export const RenderIcon = (routeName:string, focus:boolean) => {

    switch (routeName){
        case "Home":
            return <HomeIcon focus={focus}/>
        case "Posts":
            return <PostsIcon focus={focus}/>
    }
}

const CustomTabNavigator:FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {




    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.insideContainer}>
            {state.routes.map((route, index)=>{

                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };


                return(
                    <TouchableOpacity
                        onPress={onPress}
                        key={route.key}
                        activeOpacity={0.8}

                    >
                        <View style={[styles.routeContainer]}>
                            {
                                RenderIcon(route.name, isFocused)
                            }
                            <Text key={index} style={[styles.font, {
                                color: isFocused?indexStyleVariables.defaultElementActiveColorOpposite:indexStyleVariables.defaultElementColorOpposite
                            }]}>
                                {route.name}
                            </Text>
                        </View>
                    </TouchableOpacity>

                )
            })}
            </SafeAreaView>
        </View>
    );
};

export default CustomTabNavigator;