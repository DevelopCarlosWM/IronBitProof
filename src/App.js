import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
}from 'react-router-dom'
import ToDoList from './components/screens/toDoList'
import { Provider }from 'react-redux'
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/to-do-list' component={ToDoList}/>
          <Route path='tasks-completed'/>
          <Redirect from='/' to='/to-do-list'/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
