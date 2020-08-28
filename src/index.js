import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {RecoilRoot} from "recoil";
import ReactTooltip from 'react-tooltip';

ReactDOM.render(
    <RecoilRoot>
        <App />
        <ReactTooltip type="light"/>
    </RecoilRoot>,
    document.getElementById('root'))