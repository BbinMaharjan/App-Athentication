import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import MainNavigator from './navigations/MainNavigation';
const App = () => {
  return (
    <PaperProvider>
      <MainNavigator />
    </PaperProvider>
  );
};

export default App;
