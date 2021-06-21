/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const NumList = (props) => {
    return (
        props.num.map((item, index)=>(
            <TouchableOpacity
                style={styles.numList}
                key={index}
                onPress={() => props.delete(index)}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
        ))
    )
}

const styles = StyleSheet.create({

    numList: {
        backgroundColor: "#cecece",
        alignItems: "center",
        padding: 5,
        width: "100%",
        marginTop: 5
    }
})

export default NumList;
