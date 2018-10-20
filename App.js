import React from "react";

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import WeatherScreen from './screens/WeatherScreen';
import ToDoList from './screens/ToDoList';

export default createStackNavigator(
    {
        LoginScreen: LoginScreen,
        MainScreen: createBottomTabNavigator({
            WeatherScreen: { screen: WeatherScreen },
            ToDoList: { screen: ToDoList },
        })

    },
    {
        initialRouteName: 'LoginScreen',
    }
);
