import React from 'react';
import logo from './logo.svg';
import './App.css';
 import Par from './components/par';
import Todo from './components/todo';
import Nav from './components/nav';
import About from './components/about';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     count: 0
  };

 this.tick = this.tick.bind(this);

 }

 tick(){
  this.setState({
  count: this.state.count+1,
  });

}


render() {
return(
  <Router>
  <div className = ''>
<Nav/>
<Route path = '/' component={Home}/>
<Route path = '/Todo' component={Todo}/>
<Route path = '/About' component={About}/>
<Par count  = {this.state.count}/>
<h1>{this.state.count}</h1>
<button onClick = {this.tick}>Click Me</button>

</div>
</Router>
);
}
}
 
export default App;
