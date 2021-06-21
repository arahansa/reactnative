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
        <View>
            <Text>Hello World</Text>
        </View>
        <View>
            <Text>Hello World</Text>
        </View>
        <View>
            <Text>Hello World</Text>
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
  }
});

export default App;
