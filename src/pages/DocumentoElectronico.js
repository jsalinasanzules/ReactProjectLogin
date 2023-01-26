import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../css/DocumentoElectronico.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'


function DocumentoElectronico() {

    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            
        <Container>
            

            <Form>
                <Row>
                    <h3>Documento Electrónico</h3>
                </Row>
                <Row>
                &nbsp;
                </Row>

                <Row>
                    <Col className='right-align'>
                          <Form.Label>Fecha Emisión :</Form.Label>
                    </Col>
                    <Col xs={3}>
                        <DatePicker className="mb-2 form-control"
                                dateFormat="dd/MM/yyyy"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col className='right-align'>
                            <Form.Label>Tipo de Documento :</Form.Label>
                    </Col>
                    <Col xs={3}>
                        <Form.Select className="mb-2" defaultValue="Cliente">
                            <option>Cliente</option>
                            <option>Proveedor</option>
                        </Form.Select>
                    </Col>
                    <Col >
                        <Form.Select  defaultValue="Factura">
                            <option>Factura</option>
                            <option>...</option>
                        </Form.Select>                    
                    </Col>
                    <Col>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col className='right-align'>
                          <Form.Label>Establecimiento :</Form.Label>
                    </Col>
                    <Col xs={3}>
                        <Form.Select className="mb-2" defaultValue="Factura">
                            <option>001</option>
                        </Form.Select>  
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col className='right-align'>
                          <Form.Label>P.Emisión :</Form.Label>
                    </Col>
                    <Col xs={3}>
                    <Form.Control className="mb-2" type="text" placeholder="001" />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col className='right-align'>
                          <Form.Label># de Documento :</Form.Label>
                    </Col>
                    <Col xs={3}>
                    <Form.Control className="mb-2" type="text" placeholder="001-001-000000001" />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col className='right-align'>
                          <Form.Label>Persona :</Form.Label>
                    </Col>
                    <Col xs={3}>
                    <Form.Control className="mb-2" type="text" placeholder="..." />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col className='right-align'>
                          <Form.Label>Vendedor :</Form.Label>
                    </Col>
                    <Col xs={3}>
                        <Form.Select className="mb-2" defaultValue="999999999">
                            <option>-------------</option>
                        </Form.Select> 
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row >
                    <Col className='right-align'>
                        <Form.Label>Orden Compra/Venta :</Form.Label>
                    </Col>
                    <Col xs={3}>
                        <Form.Control className="mb-2" type="file" />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

            </Form>
        </Container>
<br/>
<br/>
        <Container>

            <Tabs
            defaultActiveKey="productos"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            >
            <Tab eventKey="productos" title="Productos">
                <Table striped>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                </Table>
            </Tab>
            <Tab eventKey="pagos" title="Formas de Pago">
            </Tab>
            </Tabs>

        </Container>
        <br/>
        <br/>
        <Container >

        
        <Row >
                    <Col className='right-align'>
                    <Button variant="success" >
                            Guardar
                    </Button>
                    </Col>
        </Row>
        
            
        </Container>
        <br/>
        <br/>
        </>
    );

}

export default DocumentoElectronico;