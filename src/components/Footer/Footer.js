import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
<Navbar collapseOnSelect expand="lg" className="mt-auto bg-body-tertiary">
      <Container>
        <Navbar.Collapse className='d-flex flex-column' id="responsive-navbar-nav">
          <Nav>
            <span>IT Школа</span>
            <Nav>
            Для связи: support@школа-ит.рф
            </Nav>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link>Оферта</Nav.Link>
            <Nav.Link>
            Политика конфиденциальности
            </Nav.Link>
            <Nav.Link>Условия использования</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Footer;