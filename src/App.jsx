import React from 'react'
import Home from './Home'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <Header />
     
      <Switch>
        <Route exact path="/" component={Home}></Route>
     </Switch> <Login/>
     <Footer/>
    </>
  );
};
export default App;