import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import About from './components/About';

const App = StackNavigator({
    Home: {screen: Home},
    About: {screen: About},
  },{
    headerMode: 'none',
  }

);

export default App;
