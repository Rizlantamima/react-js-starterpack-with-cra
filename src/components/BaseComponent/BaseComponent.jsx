import React from 'react';
import './BaseComponent.css';
  
export default class BaseComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                BaseComponent
            </div>
        );
    }
}