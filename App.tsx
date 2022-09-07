import { StyleSheet, Text, View } from 'react-native';
import {FC} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/pages/Tabs/Home/Home";
import Posts from "./src/pages/Tabs/Posts/Posts";

import CustomTabNavigator from "./src/components/ui/CustomTabNavigator/CustomTabNavigator";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FullPost from "./src/pages/Tabs/SharedStack/FullPost/FullPost";




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
  return (
    <NavigationContainer >
      <TabNavigator.Navigator
          screenOptions={{headerShown:false}}
          tabBar={(props => <CustomTabNavigator {...props}/>)}
      >
        <TabNavigator.Screen name={"Home"} component={HomeStackScreen}/>
        <TabNavigator.Screen name={"Posts"} component={PostsStackScreen}/>
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}
export default App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
