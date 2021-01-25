import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import React from "react";
import GlobalRouter from './Pages/GloablRouter';

function App() {
    return (
        <div className="App">
            <Router>
                <GlobalRouter />
            </Router>
        </div>
    );
}

export default App;
