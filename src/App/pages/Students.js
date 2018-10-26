import React from 'react';

import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput
} from 'reactstrap';
import Switch from "react-switch";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import CustomCard from '../components/CustomCard';

class Students extends React.Component {

constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
    this.setState({ checked });
    }

    render() {
        return(
        <Layout>
            <Col xl="6" className="pt-5 scroll-y">
    
                <h3 className="mb-4">Alumnos</h3>
    
                <CustomCard>
                    <Form className="mb-4">
                        <FormGroup row>
                            <Col>
                                <Label for="searchStudent">Buscar Alumno</Label>
                                <Input type="text" id="searchStudent" name="searchStudent"/>
                            </Col>
                            <Col>
                                <Label for="studentOrder">Ordenar por</Label>
                                <div className="d-flex align-items-center mt-2">
                                    <span className="d-inline-block mr-2">Nombre</span>
                                    <Switch
                                        onChange={this.handleChange}
                                        checked={this.state.checked}
                                        className="react-switch"
                                        id="studentOrder"
                                    />
                                    <span className="d-inline-block ml-2">Estado</span>
                                </div>
                            </Col>
                        </FormGroup>
                    </Form>
                    <CustomCard cardtype={"common"} cardstyle={"fail"} />
                    <CustomCard cardtype={"common"} cardstyle={"pending"} />
                    <CustomCard cardtype={"common"} cardstyle={"success"} />
                </CustomCard>
            </Col>
        </Layout>
    
        );
    }
}

export default Students;