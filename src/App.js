import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home.js';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;