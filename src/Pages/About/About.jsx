import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';

export default class About extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    About
                </Container>
            </div>
        );
    }
}