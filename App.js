import React from "react";

import { createStackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import WeatherScreen from './screens/WeatherScreen';
import ToDoList from './screens/ToDoList';

export default createStackNavigator(
    {
        LoginScreen_: LoginScreen,
        WeatherScreen_: WeatherScreen,
        ToDoList_: ToDoList,
    },
    {
        initialRouteName: 'LoginScreen',
    }
);
