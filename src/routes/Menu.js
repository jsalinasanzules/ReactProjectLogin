import React, {useEffect,useState} from 'react';
import Cookies from 'universal-cookie';
import '../css/Menu.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';




function Menu() {

    const cookies = new Cookies();
    let navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cerrarSesion=()=>{
        

        cookies.remove('id', {path: '/'});
        cookies.remove('apellido_paterno', {path: '/'});
        cookies.remove('apellido_materno', {path: '/'});
        cookies.remove('nombre', {path: '/'});
        cookies.remove('correo', {path: '/'});
        cookies.remove('username', {path: '/'});
        cookies.remove('password', {path: '/'});
        navigate('/');
        //props.history.push('./');
    }

    useEffect(()=>{
        if(!cookies.get('id')){
            
            navigate('/');            
        }
          },[]);

    return (
        <>
       
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
            <Button variant="outline-secondary" onClick={handleShow}>
                Menú
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Navbar.Brand href="#home">Facturación Electrónica</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                {cookies.get('id') ? <Navbar.Text>Hola: <a href="#login">{cookies.get('username')}</a></Navbar.Text> : null}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {cookies.get('id') ? <Button variant="outline-danger"   onClick={()=>cerrarSesion()}>Cerrar Sesión</Button>    : null}
                   
            </Navbar.Collapse>

            <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menú</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/principal">Home</Nav.Link>
                        <Nav.Link href="/documentoelectronico" >Documento Electrónico</Nav.Link>
                        <NavDropdown
                            title="Dropdown"
                            id={`offcanvasNavbarDropdown-expand-xxl`}
                        >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        
                </Offcanvas.Body>
            </Offcanvas>
            
            </Container>
        </Navbar>
        

        </>
        
    );

    /*return (
        <div className="containerMenu">
            <br />
            <button className="btn btn-danger" onClick={()=>cerrarSesion()}>Cerrar Sesión</button>
            <br />
            <h5>ID: {cookies.get('id')}</h5>
            <br />
            <h5>Apellido Paterno: {cookies.get('apellido_paterno')}</h5>
            <br />
            <h5>Apellido Materno: {cookies.get('apellido_materno')}</h5>
            <br />
            <h5>Nombre: {cookies.get('nombre')}</h5>
            <br />
            <h5>Correo: {cookies.get('correo')}</h5>
            <br />
            <h5>Username: {cookies.get('username')}</h5>
            <br />
            <h5>Password: {cookies.get('password')}</h5>
            <br />
        </div>
    );*/
}

export default Menu;