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

  return (
    <View style={styles.mainView}>
        <Header name={appName} />
        <View style={styles.subView}>
            <Text style={styles.mainText}>Hello World</Text>
        </View>
        <Generator add={onAddRandomNum} />
        <NumList num={random} delete={onNumDelete}  />
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
        padding: 20
    }
});

export default App;
