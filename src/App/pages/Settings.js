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

const Setings = () => (
    <Col xl="6" className="py-5 scroll-y">

        <h3 className="mb-4">Settings</h3>

        <CustomCard>
            <Form>
                <FormGroup>
                    <Label for="subjectDescription">Descripción de la materia</Label>
                    <Input type="textarea" id="subjectDescription" name="subjectDescription"></Input>
                </FormGroup>
                <FormGroup>
                    <div className="d-flex align-items-center">
                        <img className="rounded-circle mr-2 mt-2" src="img/pic.jpg" width="60" height="60" alt="" />
                        <div>
                            <Label for="subjectImage">Cambiar la imagen</Label>
                            <CustomInput type="file" id="subjectImage" name="subjectImage" />
                        </div>
                    </div>
                </FormGroup>

                <CustomButton color="primary">Guardar</CustomButton>

            </Form>

        </CustomCard>
    </Col>
);

export default Setings;