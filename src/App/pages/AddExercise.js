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

const AddExercise = () => (
    <Layout>
        <Col xl="6" className="pt-5 scroll-y">

            <p><CustomButton color="primary" size="sm" className="btn-rounded mb-0" tag="a" href="#">Nombre Unidad</CustomButton></p>
            <h3 className="mb-4">Agregar Ejercicio</h3>

            <CustomCard>
                <Form>
                    
                    <FormGroup>
                        <Label for="exerciseName">Nombre del Ejercicio</Label>
                        <Input type="text" id="exerciseName" name="exerciseName" />
                    </FormGroup>

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

                    <FormGroup>
                        <Label for="importExercise">Importar Ejercicio</Label>
                        <CustomInput type="file" id="importExercise" name="importExercise" />
                    </FormGroup>                    

                    <CustomButton color="primary">Guardar</CustomButton>

                </Form>
            </CustomCard>
        </Col>

    </Layout>
);

export default AddExercise;