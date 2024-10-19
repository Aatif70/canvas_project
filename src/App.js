import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import AuthPage from './components/Auth/AuthPage'; // Import the new AuthPage

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/auth" component={AuthPage} /> {/* Add the AuthPage route */}
            </Switch>
        </Router>
    );
};

export default App;
