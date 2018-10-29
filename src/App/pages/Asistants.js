import React from 'react';

import {
    Col,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import CustomButton from '../components/CustomButton';
import CustomCard from '../components/CustomCard';

const Asistants = () => (
    <Col xl="6" className="pt-5 scroll-y">

        <h3 className="mb-4">Colaboradores</h3>

        <CustomCard>
            <Form className="mb-4">
                <FormGroup row>
                    <Col>
                        <Label for="searchStudent">Buscar Colaborador</Label>
                        <Input type="text" id="searchStudent" name="searchStudent"/>
                    </Col>
                    <Col className="d-flex align-items-end">
                        <CustomButton color="primary">Agregar Colaborador</CustomButton>
                    </Col>
                </FormGroup>
            </Form>
            <CustomCard cardtype={"common"} cardstyle={"default"} />
            <CustomCard cardtype={"common"} cardstyle={"default"} />
            <CustomCard cardtype={"common"} cardstyle={"default"} />
        </CustomCard>
    </Col>
);

export default Asistants;