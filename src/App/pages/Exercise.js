import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput,
    Media,
    Modal, 
    ModalHeader, 
    ModalBody
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from '../components/CustomButton';
import CustomCard from '../components/CustomCard';

class Exercise extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          exercise: null,
          exerciseInfo: null,
          apiLoaded: false,
          modal: false
        };
    }

    componentDidMount() {
        const { handle } = this.props.match.params;
        fetch(`/api/exercise/${handle}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    exercise: json
                });
                return fetch(`http://localhost:3000/exercises/${this.state.exercise.exerciseFolder}/info.json`)
            }).then(res => res.json())
            .then(json => {
                this.setState({
                    exerciseInfo: json,
                    apiLoaded: true
                });
            });
    }

    toggleModal = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {
        const apiLoaded = this.state.apiLoaded;
        let exerciseBlock;

        if(apiLoaded) {
            exerciseBlock = <React.Fragment>
                                <Col xl="6" className="pt-5 scroll-y">
                                    <p><CustomButton color="primary" size="sm" className="btn-rounded mb-0" tag={Link} to="/unit">{this.state.exercise.unitName}</CustomButton></p>
                                    <h3 className="mb-4">{this.state.exercise.exerciseName}</h3>
        
                                    <CustomCard>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exerciseName">Nombre del Ejercicio</Label>
                                                <Input type="text" id="exerciseName" name="exerciseName" />
                                            </FormGroup>
                                            <Media>
                                                <Media left >
                                                    <img className="mr-3" src={`http://localhost:3000/exercises/${this.state.exercise.exerciseFolder}/poster.jpg`} width="120" height="120" alt="" />
                                                </Media>
                                                <Media body>
                                                    <h5 className="mt-0">Nombre original: {this.state.exerciseInfo.name}</h5>
                                                    <p className="mb-1"><strong>Tipo de ejercicio: {this.state.exerciseInfo.type}</strong></p>
                                                    <p>{this.state.exerciseInfo.description}</p>
                                                </Media>
                                            </Media>
                                            <FormGroup row className="mt-3">
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
                                            <CustomButton color="primary">Guardar</CustomButton>
                                        </Form>
                                        <CustomButton color="secondary" className="mt-2" onClick={this.toggleModal}>Probar Ejercicio</CustomButton>
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
                                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                                    <ModalHeader toggle={this.toggleModal}>{this.state.exercise.exerciseName}</ModalHeader>
                                    <ModalBody>
                                        <iframe src={`http://localhost:3000/exercises/${this.state.exercise.exerciseFolder}`} title={this.toggleModal}>{this.state.exercise.exerciseName}></iframe>
                                    </ModalBody>
                                </Modal>
                            </React.Fragment>;
        } else {
            exerciseBlock = <div>Loading</div>;
        }

        return(
            <React.Fragment>
                { exerciseBlock }
            </React.Fragment>
        );
    }
}

export default Exercise;