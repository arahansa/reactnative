/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useState} from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button, TextInput, TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from  './src/header'
import Generator from "./src/generator";
import NumList from "./src/numlist";
import Input from "./src/input";



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [appName] = useState('My First App')
  const [random, setRandom] = useState([36,9999])

  const onAddRandomNum = useCallback(()=>{
      const randomNum = Math.floor(Math.random()*100) + 1;
      setRandom(prev => [...prev, randomNum])
  },[])

    const onNumDelete = useCallback((position)=>{
        const newArr = random.filter((num, index) => position != index)
        setRandom(newArr)
    },[random])



    const [myTextInput, setMyTextInput] = useState('asdfasdf')
    const [alphabet, setAlphabet] = useState(['a', 'b', 'c', 'd'])

    const onAddTextInput = useCallback(()=>{
        setAlphabet(prev => [...prev, myTextInput])
        setMyTextInput('')
    },[myTextInput])


    const onChangeInput = useCallback((e)=>{
        setMyTextInput(e)
    },[])

    const sayHi = () =>{
      alert('hi')
    }



  return (
    <View style={styles.mainView}>
        <TextInput value={myTextInput}
                   style={styles.input}
                   onChangeText={onChangeInput}
                   multiline={true}
                   maxLength={100}

        />
        <TouchableOpacity
            onPress={onAddTextInput}>
            <Text>hi</Text>
        </TouchableOpacity>
        <Button title={'Add Text Input'}
            onPress={onAddTextInput}
        />
        <ScrollView style={{width: '100%'}}>
            {
                alphabet.map((item, index)=>(
                    <Text style={styles.mainText} key={index}>
                        {item}
                    </Text>
                ))
            }
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
      flex: 1,
      backgroundColor: "white",
      height: "100%",
      alignItems: "center",
  },
  subView: {
      backgroundColor: "yellow",
      marginBottom: 10,
  },
  anotherSubView: {
      flex: 2,
      backgroundColor: "yellow",
      marginBottom: 10,
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
  },
    mainText: {
      fontSize: 20,
      fontWeight: "normal",
        color: "red",
        padding: 20,
        margin: 20,
        backgroundColor:'pink'
    },
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 30,
        fontSize: 25,
        padding: 10
    }
});

export default App;
