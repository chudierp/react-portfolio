import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Chudier Chuol',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Chudier creates',
        subTitle: 'projects that make a difference',
        text: 'checkout my projects below'
      },
      about: {
        title: 'About me',
      },
      contact: {
        title: 'Lets talk ',
      }
    }
  }
  
  render() {
    return (
     <Router>
       <Container className='p-0' fluid={true}>
        
        <Navbar className='border-bottom' bg='transparent' expand='lg'>
          <Navbar.Brand>Chudier Chuol</Navbar.Brand>

          <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
          <Navbar.Collapse id='navbar-toggle'>
            <Nav className='ml-auto'>
              <Link className='nav-link' to='/'>Home</Link>
              <Link className='nav-link' to='/about'>About</Link>
              <Link className='nav-link' to='/contact'>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

       </Container>
     </Router>
      );
  }
  
}

export default App;
