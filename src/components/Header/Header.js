import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {NavLink, useNavigate} from 'react-router-dom'
import { ABOUT_ROUTE, CURS_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../../utils/consts';
const Header = () => {
    const navigate = useNavigate()
    const login = () => {
        navigate(LOGIN_ROUTE)
    }
    const registration = () => {
        navigate(REGISTER_ROUTE)
    }
    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>IT Школа</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className='text-decoration-none text-dark me-3' to={CURS_ROUTE}>Курсы</NavLink>
            <NavLink to={ABOUT_ROUTE} className='text-decoration-none text-dark'>О нас</NavLink>
          </Nav>
          <div>
          <Button variant="outline-dark" className='me-2' onClick={login}>Вход</Button>
          <Button variant="outline-dark" onClick={registration}>Регистрация</Button>
          </div>
        </Container>
      </Navbar>
    );
};

export default Header;