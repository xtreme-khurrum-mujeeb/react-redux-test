import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import reducers from './reducers';


const App = () => {
  return (
    <Provider store={createStore(reducers)}>
        <View >
          <Header headText="Tech Stack" />
        </View>
    </Provider>
  );
};


export default App;
