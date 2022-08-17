import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../../assets/images/Logo.png';
import './style.css';


function Header  () {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' variant='dark' >

                <Container>
                    <img alt='logo' src={Logo} />
                    <Navbar.Toggle className='menu' aria-controls='responsive-navbar-nav' />
                    <div className='header-container'>

                        <Navbar.Collapse id='responsive-navbar-nav'>
                      
                            <Nav className="justify-content-end" activeKey="/home">
                      <Nav.Item>
                         <Nav.Link 
                          activeClass="active"
                          offset={-70}
                          duration={100}
                          href="/">Home</Nav.Link>

                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link 
                           activeClass="active"
                           offset={-70}
                           duration={100}
                           href="/Category">Categoria</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link href="/Geration">Geração</Nav.Link>
                       </Nav.Item>
                           </Nav>
                        </Navbar.Collapse>

                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;