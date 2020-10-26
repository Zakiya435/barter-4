import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    < WelcomeScreen />
  );
}

const switchNavigator = createSwitchNavigator({
  HomeScreen:{screen: HomeScreen},
  ExchangeScreen:{screen: ExchangeScreen}
})

const AppContainer =  createAppContainer(switchNavigator);