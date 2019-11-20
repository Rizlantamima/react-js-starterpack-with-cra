import React from 'react';
import './Container.css';
  
export default class Container extends React.Component {

    render() {
        const {children, divClass} = this.props;
        const classDiv = `container ${divClass}`;
        return (
            <div className={classDiv}>
                {children}
            </div>
        );
    }
}