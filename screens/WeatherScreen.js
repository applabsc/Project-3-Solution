import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

export default class WeatherScreen extends Component {
    constructor(props) {
        super(props);
        this.fetchWeatherData = this.fetchWeatherData.bind(this);
        this.API_KEY = "534695a9249e02707edde0c2485f4c3a";
    }

// Complete this function
    fetchWeatherData() {
        fetch('api.openweathermap.org/data/2.5/weather?q=' + this.state.cityName)
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                console.log(jsonResponse);
            })
            .catch(error => console.log(error))
        // Call the OpenWeather API
        // The format of the API URL is (without the {})
        // api.openweathermap.org/data/2.5/weather?q={city name}
        // Take cityName from this.state then paste it into the API URL
        // Call the URL and handle the response with promises & promise chaining
        // Assign the relevant response parameters (i.e. temperature) in this.state
        // replace "weather info goes here" with the temperature from this.state
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.header}>
                    weather info goes here
                </Text>

                <Text style={styles.paragraph}>
                    Input a city name and then press submit
                </Text>

                <TextInput
                    style={styles.textfield}
                    onChange={cityName => this.setState(cityName)}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}
