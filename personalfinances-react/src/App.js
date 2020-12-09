import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';
import Sidemenu from './components/Sidemenu';


function App() {
    return (
        <Router>
            <Header />
            
            <Sidemenu />
            
            <Routes />
        </Router>
    );
}

export default App;
