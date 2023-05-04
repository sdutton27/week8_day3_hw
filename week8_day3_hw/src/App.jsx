import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Signup from './views/Signup'
import Login from './views/Login'
import Todo from './views/Todo'

import { Routes, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        user:{}
    }
}
  
  switchUser = () => {
    if (this.state.user.username === 'sho') {
      this.setState({user: {username:'sarah'}})
    } else {
      this.setState({user: {username:'sho'}})
    }
  }

  logMeIn = (user) => {
    this.setState ({user:user})
  }

  logMeOut = () => {
    this.setState({user: {}}) //logs the user out, sets the state of the user back to {}
  }

  render() {
    return (
      <div>
        <Navbar user={this.state.user} switchUser={this.switchUser} logMeOut = {this.logMeOut}/>
        <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<Login logMeIn = {this.logMeIn} />}/>
            <Route path='/to-do' element={<Todo/>}/>
        </Routes>
      </div>
    )
  }
}
