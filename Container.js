import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./src/pages/Home";
import Detail from "./src/pages/Details";
import Landing from "./src/pages/Landing";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import AddList from "./src/pages/AddList";
import AddCategory from "./src/pages/AddCategory";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: () => {
          return null;
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name == "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
            return <Ionicons name={iconName} size={20} color="red" />;
          } else if (route.name == "AddList") {
            iconName = focused ? "list" : "list-outline";
            return <Ionicons name={iconName} size={20} color="red" />;
          } else if (route.name == "AddCategory") {
            iconName = focused ? "document-text" : "document-text-outline";
            return <Ionicons name={iconName} size={20} color="red" />;
          }
        },
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddList" component={AddList} />
      <Stack.Screen name="AddCategory" component={AddCategory} />
    </Tab.Navigator>
  );
}

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyTab"
          component={MyTab}
          options={{
            headerShown: false,
            headerTintColor: "white",
            headerMode: "screen",
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: "Home",
            headerShown: true,
            headerTintColor: "black",
            headerMode: "screen",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
