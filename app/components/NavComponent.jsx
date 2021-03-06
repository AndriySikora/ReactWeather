import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink, Link} from 'react-router'

export default class NavComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Nav Component</h2>
                <IndexLink to="/">Get Weather</IndexLink>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
};
