import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, Text, Box, ListView, Stack } from "native-base";
import Container  from "./Container";

export default function App() {

  const Stack = createStackNavigator

  return (
    <NativeBaseProvider>
      <Container/>
    </NativeBaseProvider>
  );
}