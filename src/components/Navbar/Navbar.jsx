import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Navbar.css';
  
export default class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movie List</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}