import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import firebase from './firebase/firebase'
import LoginForm from './components/LoginForm'
import ReduxThunk from 'redux-thunk'
class App extends Component {
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
      <LoginForm />
    </Provider>
    );
  }
}

export default App