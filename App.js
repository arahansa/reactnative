/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.mainView}>
        <View style={styles.subView}>
            <Text style={styles.mainText}>Hello World</Text>
        </View>
        <View style={styles.subView}>
            <Text>Hello World</Text>
        </View>
        <View style={styles.anotherSubView}>
            <Text style={styles.mainText}>Hello World</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
      flex: 1,
      backgroundColor: "green",
      height: "100%",
      alignItems: "center",
      justifyContent: "center"
  },
  subView: {
      flex: 1,
      backgroundColor: "yellow",
      marginBottom: 10,
      width: "50%"
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
      fontSize: 50,
      fontWeight: "bold",
        color: "red",
        padding: 20
    }
});

export default App;
