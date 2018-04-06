import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Wizard from '../../views/Wizard';
import Profiles from '../../views/Profiles';
import List from '../../views/List';
import Temp from '../../views/Temp';
import Framework from '../../views/Frameworks/Framework';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/wizard" name="Wizard" component={Wizard}/>
                <Route path="/profiles" name="Profiles" component={Profiles}/>
                <Route path="/list" name="List" component={List}/>
                <Route path="/list/Angular" name="Framework" component={Framework}/>
                <Route path="/frameworks/:name" name="Framework" component={Framework}/>
                <Route path="/temp" name="Temp" component={Temp}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
