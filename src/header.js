/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';


const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text>{props.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header : {
        backgroundColor: "pink",
        alignItems: "center",
        padding: 5,
        width: "100%"
    }
});

export default Header;
