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
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';


const Header = (props) => {
    return (
        <TouchableOpacity
            style={styles.header}
            // onPress={()=>alert('hello world')}
            // onLongPress={()=>alert('hello world')}
            onPressIn={()=>alert('hello world')}
        >
            <View style={styles.header}>
                <Text>{props.name}</Text>
            </View>
        </TouchableOpacity>
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
