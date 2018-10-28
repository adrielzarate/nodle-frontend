import React from 'react';

import {
    Col,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import CustomCard from '../components/CustomCard';

const AddAssistant = () => (
    <Layout>
        <Col xl="6" className="pt-5 scroll-y">

            <h3 className="mb-4">Agregar Colaborador</h3>

            <CustomCard>
                <Form>

                    <FormGroup row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="assistantFirstName">Nombre del colaborador</Label>
                                <Input type="text" id="assistantFirstName" name="assistantFirstName" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="assistantLastName">Apellido del colaborador</Label>
                                <Input type="text" id="assistantLastName" name="assistantLastName" />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="assistantEmail">Email del colaborador</Label>
                        <Input type="email" id="assistantEmail" name="assistantEmail" />
                    </FormGroup>

                    <CustomButton color="primary">Guardar</CustomButton>

                </Form>
            </CustomCard>
        </Col>

    </Layout>
);

export default AddAssistant;