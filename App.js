/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppHeader from './src/components/app-header/AppHeader';
import AppCard from './src/components/app-card/AppCard';
import AppSearchbar from './src/components/app-searchbar/AppSearchbar';
import IADevsColors from './src/constants/colors';
import { back } from 'react-native/Libraries/Animated/Easing';
import AppCurrencies from './src/components/app-currencies/AppCurrencies';
import { getCurrencies } from './src/helper/crypto/Currencies'
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
      getCurrencies()
      .then((data) => {
        console.log("res")
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  const backgroundStyle = {
    backgroundColor: IADevsColors.background,
  }

  const filterCurrencies = () => {
    const first11 = data.slice(0, 11)
    first11.splice( first11.findIndex(c => c.symbol == 'BUSD'), 1)
    //first11[0].changePercent24Hr = "-0.77"
    return first11
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <AppSearchbar></AppSearchbar>
          {isLoading ? <ActivityIndicator /> : <AppCurrencies currencies={filterCurrencies()}></AppCurrencies>}

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
