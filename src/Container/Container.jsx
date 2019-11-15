import React from 'react';
import './Container.css';
  
export default class Container extends React.Component {

    render() {
        const {children} = this.props;
        return (
            <div className="container">
                {children}
            </div>
        );
    }
}