import React from 'react';

import { 
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput,
    Media
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import CustomCard from '../components/CustomCard';

const Exercise = () => (
    <Layout>
        <Col xl="6" className="pt-5 scroll-y">

            <p><CustomButton color="primary" size="sm" className="btn-rounded mb-0" tag="a" href="#">Nombre Unidad</CustomButton></p>
            <h3 className="mb-4">Nombre Ejercicio</h3>

            <CustomCard>
                <Form>
                    
                    <FormGroup>
                        <Label for="exerciseName">Nombre del Ejercicio</Label>
                        <Input type="text" id="exerciseName" name="exerciseName" />
                    </FormGroup>

                    <Media>
                        <Media left >
                            <img className="mr-3" src="/img/pic.jpg" width="120" height="120" alt="" />
                        </Media>
                        <Media body>
                            <h5 className="mt-0">Nombre original del ejercicio: (dado por el autor)</h5>
                            <p className="mb-1"><strong>Tipo de ejercicio: (dado por el autor)</strong></p>
                            <p>Descripcion del ejercicio (dada por el autor) cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </Media>
                    </Media>

                    <FormGroup row>
                        <Col md="6">
                            <Label for="exerciseState">Estado</Label>
                            <CustomInput type="select" id="exerciseState" name="exerciseState">
                                <option value="">Borrador</option>
                                <option>Publicado</option>
                                <option>Pendiente</option>
                            </CustomInput>
                        </Col>
                        <Col md="6">
                            <Label for="exerciseDate">Fecha de publicación</Label>
                            <Input type="date" id="exerciseDate" name="exerciseDate" />
                        </Col>
                    </FormGroup>

                    <CustomButton color="secondary" className="mr-2">Probar Ejercicio</CustomButton>
                    <CustomButton color="primary">Guardar</CustomButton>

                </Form>
            </CustomCard>
        </Col>
        <Col xl="6" className="pt-5 scroll-y">
            <h3 className="mb-4">Estado de Entregas</h3>
            <CustomCard>
                <p><strong>Faltan 2 alumnos</strong></p>
                <ul>
                    <li><a href="/">Nombre Apellido Alumno</a></li>
                    <li><a href="/">Nombre Apellido Alumno</a></li>
                </ul>
            </CustomCard>
        </Col>

        <Col className="py-5">
            <CustomButton color="danger" className="mt-3"><FontAwesomeIcon icon="trash-alt" className="mr-2" /> Eliminar este Ejercicio</CustomButton>
        </Col>

    </Layout>
);

export default Exercise;