// import { StatusBar } from 'expo-status-bar';
import { Appbar } from 'react-native-paper';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Businesses from './src/businesses';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

function App() {
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.nav}>
                {/* <Appbar.Action
                    icon="home"
                    onPress={() => console.log('pressed home')} // this would return the user back home
                /> */}
                <Appbar.Content
                    title="Darwin Street Food"
                    style={styles.TitleText}
                ></Appbar.Content>
            </Appbar.Header>

            <Businesses></Businesses>
        </View>
    );
}
export default App;

const styles = StyleSheet.create({
    buttonColor: {
        color: '#006FBA',
        fontFamily: 'bree,sans-serif',
    },

    nav: {
        textAlign: 'center',
        marginLeft: 60,
        marginRight: 50,
        left: 0,
        right: 0,
        // bottom: -5,
        // top: 30,
        zIndex: 0,
        backgroundColor: '#00936c',
    },
    TitleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
