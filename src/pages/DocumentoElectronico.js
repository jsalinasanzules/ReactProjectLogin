import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function DocumentoElectronico() {

    return (
        <>
        <Container>
            

            <Form>
                <Row>
                    <h1>Documento Electrónico</h1>
                </Row>
                <Row>
                &nbsp;
                </Row>

                <Row>
                    <Col>
                          <Form.Label>Fecha Emisión</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="" />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col>
                            <Form.Label>Tipo de Documento</Form.Label>
                    </Col>
                    <Col>
                        <Form.Select defaultValue="Cliente">
                            <option>Cliente</option>
                            <option>Proveedor</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select defaultValue="Factura">
                            <option>Factura</option>
                            <option>...</option>
                        </Form.Select>                    
                    </Col>
                    <Col>
                    </Col>
                </Row>

                <Row>
                    <Col>
                          <Form.Label>Establecimiento</Form.Label>
                    </Col>
                    <Col>
                        <Form.Select defaultValue="Factura">
                            <option>001</option>
                        </Form.Select>  
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col>
                          <Form.Label>P.Emisión</Form.Label>
                    </Col>
                    <Col>
                    <Form.Control type="text" placeholder="001" />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col>
                          <Form.Label># de Documento</Form.Label>
                    </Col>
                    <Col>
                    <Form.Control type="text" placeholder="001-001-000000001" />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col>
                          <Form.Label>Persona</Form.Label>
                    </Col>
                    <Col>
                    <Form.Control type="text" placeholder="..." />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col>
                          <Form.Label>Vendedor</Form.Label>
                    </Col>
                    <Col>
                        <Form.Select defaultValue="999999999">
                            <option>-------------</option>
                        </Form.Select> 
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row >
                    <Col>
                        <Form.Label>Orden Compra/Venta</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type="file" />
                    </Col>
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

        
        <Stack direction="horizontal" gap={1}>
                <Button variant="success" >
                        Guardar
                </Button>
        </Stack>
            
        </Container>
        <br/>
        <br/>
        </>
    );

}

export default DocumentoElectronico;