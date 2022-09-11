import { StyleSheet, Platform} from 'react-native';
import React, {FC, useEffect} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import Home from "./src/pages/Tabs/Home/Home";
import Posts from "./src/pages/Tabs/Posts/Posts";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import CustomTabNavigator, {RenderIcon} from "./src/components/ui/CustomTabNavigator/CustomTabNavigator";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FullPost from "./src/pages/Tabs/SharedStack/FullPost/FullPost";
import {indexStyleVariables} from "./src/utils/styles";
import HomeIcon from "./src/components/ui/TabNavigatorIcons/HomeIcon";
import PostsIcon from "./src/components/ui/TabNavigatorIcons/PostsIcon";




const HomeStack = createNativeStackNavigator()

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{headerShown:false}}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="FullPost" component={FullPost} />
        </HomeStack.Navigator>
    );
}



const PostsStack = createNativeStackNavigator();

function PostsStackScreen() {
    return (
        <PostsStack.Navigator screenOptions={{headerShown:false}}>
            <PostsStack.Screen name="Posts" component={Posts} />
            <PostsStack.Screen name="FullPost" component={FullPost} />
        </PostsStack.Navigator>
    );
}





const TabNavigator = createBottomTabNavigator()


const App:FC = ()=>{


    useEffect(()=>{
        registerForPushNotificationsAsync().then(token=>console.log(token))
    },[])
  return (
    <NavigationContainer >
      <TabNavigator.Navigator

          screenOptions={{
              headerShown:false,
              // tabBarStyle:{
              //     backgroundColor: 'white',
              //     position: 'absolute',
              //     bottom: 20,
              //     marginHorizontal: 20,
              //     // Max Height...
              //     height: 60,
              //     borderRadius: 10,
              //     paddingHorizontal: 20,
              // },
              // tabBarIcon:({focused})=>{return RenderIcon("home", focused)}
          }}

          tabBar={(props => <CustomTabNavigator {...props}/>)}
      >
        <TabNavigator.Screen
            name={"Home"}
            component={HomeStackScreen}
        />
        <TabNavigator.Screen
            name={"Posts"}
            component={PostsStackScreen}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}
export default App

async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
