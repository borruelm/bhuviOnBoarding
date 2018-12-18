import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Welcome from './Welcome'
import Login from './Login'
import { Switch, Route, Link } from 'react-router-dom'


const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route path='/Login' component={Login}/>
    </Switch>
    <aside className="primary-aside">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Login">Login</Link></li>
          </ul>
    </aside>
  </main>
)

class Menu extends Component{
  render(){
    return(<div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </div>)



  }
}

export default Menu;
