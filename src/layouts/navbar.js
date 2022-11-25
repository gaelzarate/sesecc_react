import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icono from '../icono.svg';

//import { Fragment } from 'react';
import {Outlet, Link} from "react-router-dom";

function BasicExample() {
  return (
      <>
       <div className='text-center navdiv'>2022, Año del Centenario de la Constitución Política del Estado Libre y Soberano de Oaxaca</div>
        <Navbar className='navBg shadow' bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to= "/"><img src={icono} className="App-icono" alt="icono" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to= "/">Inicio</Nav.Link>
            
            <NavDropdown title="¿Quiénes Somos?" id="basic-nav-dropdown">
              {/* <NavDropdown.Item as={Link} to= "/about">Nosotros(opc)</NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to= "/misionvision">Misión, Visión y Objetivos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= "/about">Funciones</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= "/about">Titular de la Dependencia</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= "/directorio">Directorio</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= "/estructura">Estructura Orgánica</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= "/about">Manual de Organización</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= "/about">Marco Jurídico</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to= "/twitter">Transparencia</Nav.Link>
            <Nav.Link as={Link} to= "/about">Datos de Interés</Nav.Link>
            <Nav.Link as={Link} to= "/about">Trámites y Servicios</Nav.Link>
            <Nav.Link as={Link} to= "/about">Sala de Prensa</Nav.Link>
            <Nav.Link as={Link} to= "/contacto">Contacto</Nav.Link>
            
            {/* <Nav.Link target="_blank" href='https://secc-capacitacion.org/'>Capacitación</Nav.Link>
            <Nav.Link target="_blank" href="https://plataforma-digital-estatal.vercel.app">PDE</Nav.Link>
            <Nav.Link as={Link} to= "/contact">Contacto</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
        <Outlet></Outlet>
    </section>
      </>
  );
}

export default BasicExample;