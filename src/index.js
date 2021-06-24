import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from "react-router-dom"
import './styles/index.css'
import App from './routes/App'

ReactDOM.render(
<Router>
<App />
</Router>, document.getElementById('app'));
