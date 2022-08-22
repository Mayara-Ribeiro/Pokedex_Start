import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../../assets/images/Logo.png';
import './style.css';

const Header = () => {
        
return (
    <>
        <Navbar collapseOnSelect fixed='top' expand='sm' variant='dark' >

            <Container>
             <a href='/'> <img alt='logo' src={Logo} /></a>


                            
                <Navbar.Toggle className='menu' aria-controls='responsive-navbar-nav' />
                <div className='header-container'>

                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav >
                     <Nav.Item>
                             <Nav.Link href="/">Home</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                             <Nav.Link href="/Category">Categoria</Nav.Link>
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