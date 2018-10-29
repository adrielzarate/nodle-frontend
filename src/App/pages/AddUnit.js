import React from 'react';

import { 
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput
} from 'reactstrap';

import CustomButton from '../components/CustomButton';
import CustomCard from '../components/CustomCard';

const AddUnit = () => (
    <Col xl="6" className="pt-5 scroll-y">

        <h3 className="mb-4">Agregar Unidad</h3>

        <CustomCard>
            <Form>
                
                <FormGroup>
                    <Label for="unitName">Nombre de la Unidad</Label>
                    <Input type="text" id="unitName" name="unitName" />
                </FormGroup>
                
                <FormGroup>
                    <Label for="unitDescription">Descripción</Label>
                    <Input type="textarea" id="unitDescription" name="unitDescription" />
                </FormGroup>

                <FormGroup row>
                    <Col md="6">
                        <Label for="unitState">Estado</Label>
                        <CustomInput type="select" id="unitState" name="unitState">
                            <option value="">Borrador</option>
                            <option>Publicado</option>
                            <option>Pendiente</option>
                        </CustomInput>
                    </Col>
                    <Col md="6">
                        <Label for="unitDate">Fecha de publicación</Label>
                        <Input type="date" id="unitDate" name="unitDate" />
                    </Col>
                </FormGroup>

                <CustomButton color="primary">Guardar</CustomButton>

            </Form>
        </CustomCard>
    </Col>
);

export default AddUnit;