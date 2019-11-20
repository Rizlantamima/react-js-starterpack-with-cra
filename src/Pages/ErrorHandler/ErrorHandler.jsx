import React from 'react';
import { withRouter } from "react-router";
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import image from './error.png';

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    const { history } = this.props;
    this.state = { hasError: false };
    history.listen((location, action) => {
      if (this.state.hasError) {
        this.setState({
          hasError: false,
        });
      }
    });
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ 
      hasError: true, 
      error: error, 
      info: info,
      errorMessage:error.toString()
    });

    //   logErrorToMyService(error, info);
  }

  render() {
    const { hasError, error, info, errorMessage } = this.state;
    

    if (hasError) {
      return (
        <div>
          <Navbar />
          <Container divClass='bg-white' >
            <h1>Something went wrong!</h1>
            <p style={{background:'pink',border:'solid 1px red',padding:'10px'}}>{errorMessage}</p>
            <img src={image} style={{minHeight:'20px'}} />
          </Container>
        </div>
      );
    }
    return this.props.children;
  }
}

export default withRouter(ErrorHandler);