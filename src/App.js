import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
  render() {

    return (
      <div>
       <Router>

          <NavBar></NavBar>
          <Switch>

              <Route exact path="/">  <News key="general" country = "in" category ="general" heading="GENERAL NEWS"></News> </Route>
              <Route exact path="/business">  <News key="business" country = "in" category ="business" heading="BUSINESS NEWS"></News> </Route>
              <Route exact path="/entertainment">  <News key="entertainment" country = "in" category ="entertainment" heading="ENTERTAINMENT NEWS"></News> </Route>
              <Route exact path="/health">  <News key="health" country = "in" category ="health" heading="HEALTH NEWS"></News> </Route>
              <Route exact path="/science">  <News key="science" country = "in" category ="science" heading="SCIENCE NEWS"></News> </Route>
              <Route exact path="/sports">  <News key="sports" country = "in" category ="sports" heading="SPORTS NEWS"></News > </Route>
              <Route exact path="/technology">  <News key="technology" country = "in" category ="technology" heading="TECHNOLOGY NEWS"></News> </Route>
              
          </Switch>

      </Router>
      </div>
    )
  }
}
