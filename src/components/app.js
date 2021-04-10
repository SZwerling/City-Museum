import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Events from './Events';
import Visit from './Visit';
import Members from './Members';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.css'

const App = () => {
    return (
        <div>
            <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/visit' component={Visit} />
                    <Route path='/events' component={Events} />
                    <Route path='/members' component={Members} />
                    <Redirect to='/home' />
                </Switch>   
            <Footer />
        </div>
    
    )
}

export default withRouter(connect(null, null)(App));