/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StatusBar, SafeAreaView, useColorScheme} from 'react-native';

import {Card} from './src/components';
import {HomeScreen} from './src/screens';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
