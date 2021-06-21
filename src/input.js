import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from "react-native";

const Input = () => {
    const [myTextInput, setMyTextInput] = useState('asdfasdf')
    const onChangeInput = useCallback((e)=>{
        setMyTextInput(e)
    },[])
    return (
        <View style={styles.mainView}>
            <TextInput value={myTextInput}
                       style={styles.input}
                       onChangeText={onChangeInput}
                       multiline={true}
                       maxLength={100}
                       
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        width: '100%',

    },
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 30,
        fontSize: 25,
        padding: 10
    }
})

export default Input;
