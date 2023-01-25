import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';
import '../css/Menu.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Menu(props) {

    const cookies = new Cookies();
    let navigate = useNavigate();

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
            //props.history.push('./');
        }
          },[]);

    return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Facturación Electrónica</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            Hola: <a href="#login">{cookies.get('username')}</a>    
            </Navbar.Text>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button  className="btn btn-danger" onClick={()=>cerrarSesion()}>Cerrar Sesión</button>         
               

        </Navbar.Collapse>
        </Container>

        
        
    </Navbar>
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