import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import { RootNavigation } from './app/navigation/rootNavigation';
import 'react-native-gesture-handler';

const App: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
