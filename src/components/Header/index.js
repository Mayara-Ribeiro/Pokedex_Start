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
                            <Nav >
                                <a href="/">Home</a>
                                
                                <a href="/Category">Categoria</a>
                                
                                <a href="/Geration">Geração</a>
                            </Nav>
                        </Navbar.Collapse>

                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;