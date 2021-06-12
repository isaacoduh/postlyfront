import React from 'react';
// eslint-disable-next-line
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// eslint-disable-next-line
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