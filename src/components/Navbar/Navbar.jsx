import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Navbar.css';
import Searchbox from '../Searchbox/Searchbox';
  
export default class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movie List</Link>
                    </li>
                    <li>
                        <Searchbox />
                    </li>
                </ul>
            </nav>
        );
    }
}