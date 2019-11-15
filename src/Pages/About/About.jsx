import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../Container/Container';

export default class About extends React.Component {

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