import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBGqeYOuMY0h0KF4zEaAG91VaoIiNcmxrI',
      authDomain: 'postureapp-1bd5b.firebaseapp.com',
      databaseURL: 'https://postureapp-1bd5b.firebaseio.com',
      projectId: 'postureapp-1bd5b',
      storageBucket: 'postureapp-1bd5b.appspot.com',
      messagingSenderId: '267664743773'
		});
  }

	render() {
    return (
    <Provider store={createStore(reducers)}>
       <View>
         <Header headerText='POSTURE.IO' />
       </View>
    </Provider>
    );
  }
}

export default App;
