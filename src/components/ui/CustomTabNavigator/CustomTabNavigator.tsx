import React, {FC, useEffect} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./style";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'
import {indexStyles} from "../../../utils/styles";
import HomeIcon from "../TabNavigatorIcons/HomeIcon";
import PostsIcon from "../TabNavigatorIcons/PostsIcon";



const CustomTabNavigator:FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {

    const RenderIcon = (routeName:string, focus:boolean) => {

        switch (routeName){
            case "Home":
                return <HomeIcon focus={focus}/>
            case "Posts":
                return <PostsIcon focus={focus}/>
        }
    }


    return (
        <View style={styles.container}>
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
                    >
                        <View style={[styles.routeContainer, isFocused?indexStyles.defaultActiveButton:indexStyles.defaultButton]}>
                            {
                                RenderIcon(route.name, isFocused)
                            }
                            <Text key={index} style={indexStyles.defaultFontStyle}>
                                {route.name}
                            </Text>
                        </View>
                    </TouchableOpacity>

                )
            })}

        </View>
    );
};

export default CustomTabNavigator;