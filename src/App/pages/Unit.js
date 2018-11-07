import React from 'react';
import { Link } from 'react-router-dom';
import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from '../components/CustomButton';
import CustomCard from '../components/CustomCard';
import ExerciseCard from '../components/ExerciseCard';
import Loading from '../components/Loading';

class Unit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          exercises: [],
          errorUploading: false,
          apiLoaded: false
        };
    }

    componentDidMount() {

        fetch(`http://localhost:3000/api/exercises`)
            .then(res => {
                if(res.status === 200) return res.json();
                else throw new Error(res.status);
            })
            .then(data => {
                this.setState({
                    exercises: data,
                    apiLoaded: true
                });
            })
            .catch(error => {
                console.error('Error:', error);
                this.setState({
                    apiLoaded: true
                });
            });
    }

    render() {

        const apiLoaded = this.state.apiLoaded;
        let unitBlock;

        if(apiLoaded) {

            unitBlock = <React.Fragment>
                            <Col xl="6" className="pt-5 scroll-y">

                                <h3 className="mb-4">Nombre de la Unidad</h3>

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

                                        <CustomButton color="primary">Crear Unidad</CustomButton>

                                    </Form>
                                </CustomCard>
                            </Col>

                            <Col xl="6" className="pt-5 scroll-y">
                                <h3 className="mb-4">Ejercicios</h3>

                                <CustomCard>

                                    <p><CustomButton color="primary" size="sm" className="btn-rounded" tag={Link} to="/add-exercise"><FontAwesomeIcon icon="plus-circle" className="mr-2" /> Agregar Ejercicio</CustomButton></p>

                                    { this.state.exercises.map((exercise, i) => (
                                    <ExerciseCard key={i}
                                        exerciseName={exercise.exerciseName}
                                        exerciseState={exercise.exerciseState}
                                        exerciseFolder={exercise.exerciseFolder}
                                    />
                                    )) }

                                </CustomCard>

                            </Col>

                            <Col className="py-5">
                                <CustomButton color="danger" className="mt-3"><FontAwesomeIcon icon="trash-alt" className="mr-2" /> Eliminar esta Unidad</CustomButton>
                            </Col>

                        </React.Fragment>;
        } else {
            unitBlock = <div className="w-100 d-flex align-items-center justify-content-center"><Loading /></div>;
        }

        return(
            <React.Fragment>
                { unitBlock }
            </React.Fragment>
        );
    }
}


export default Unit;