import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import {AppConsumer} from '../AppContext';
import styled from 'styled-components';
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

import * as Datetime from 'react-datetime';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from '../components/CustomButton';
import CustomCard from '../components/CustomCard';
import Loading from '../components/Loading';

const StyledIframe = styled.iframe`
    border: none;
    width: 100%;
`;

const StyledModal = styled(Modal)`
    .modal-content {
        height: 400px;
    }
`;

class Exercise extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          exercise: null,
          exerciseInfo: null,
          apiLoaded: false,
          modal: false,
          redirect: false
        };
    }

    componentDidMount() {

        const { handle } = this.props.match.params;

        fetch(`${process.env.BACKEND}/api/exercise/${handle}`)
            .then(res => {
                if(res.status === 200) return res.json();
                else throw new Error(res.status);
            })
            .then(json => {
                this.setState({
                    exercise: json
                });
                return fetch(`${process.env.BACKEND}/exercises/${this.state.exercise.exerciseFolder}/info.json`)
            })
            .then(res => {
                if(res.status === 200) return res.json();
                else throw new Error(res.status);
            })
            .then(json => {
                this.setState({
                    exerciseInfo: json,
                    apiLoaded: true
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    removeExercise = (ev) => {
        ev.preventDefault();
        const { handle } = this.props.match.params;

        fetch(`/api/exercise/${handle}`, {
          method: 'DELETE',
        }).then((res) => {
            if(res.status === 200) {
                this.setState({ redirect: true });
                return fetch(`${process.env.BACKEND}/remove/${handle}`, {
                    method: 'DELETE'
                });
            }
            else throw new Error(res.status);
        })
        .then( () => {
            this.props.updateAlert(true, 'success', 'Archivo eliminado');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/unit' />
        }
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
                                {this.renderRedirect()}
                                <Col xl="6" className="pt-5 scroll-y">
                                    <p><CustomButton color="primary" size="sm" className="btn-rounded mb-0" tag={Link} to="/unit">{this.state.exercise.unitName}</CustomButton></p>
                                    <h3 className="mb-4">{this.state.exercise.exerciseName}</h3>

                                    <CustomCard>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exerciseName">Nombre del Ejercicio</Label>
                                                <Input type="text" id="exerciseName" name="exerciseName" defaultValue={this.state.exercise.exerciseName} />
                                            </FormGroup>
                                            <Media>
                                                <Media left >
                                                    <img className="mr-3" src={`${process.env.BACKEND}/exercises/${this.state.exercise.exerciseFolder}/poster.jpg`} width="120" height="120" alt="" />
                                                </Media>
                                                <Media body>
                                                    <h5 className="mt-0">Nombre original: {this.state.exerciseInfo.name}</h5>
                                                    <p className="mb-1"><strong>Autor:</strong>  {this.state.exerciseInfo.author}</p>
                                                    <p className="mb-1"><strong>Tipo de ejercicio:</strong> {this.state.exerciseInfo.type}</p>
                                                    <p>{this.state.exerciseInfo.description}</p>
                                                </Media>
                                            </Media>
                                            <FormGroup row className="mt-3">
                                                <Col md="6">
                                                    <Label for="exerciseState">Estado</Label>
                                                    <CustomInput type="select"
                                                        id="exerciseState"
                                                        name="exerciseState"
                                                        value={this.state.exerciseState}
                                                    >
                                                        <option value="published">Publicado</option>
                                                        <option value="draft">Borrador</option>
                                                        <option value="pending">Pendiente</option>
                                                    </CustomInput>
                                                </Col>
                                                <Col md="6">
                                                    <Label for="publicationDate">Fecha de publicación</Label>
                                                    <Datetime id="publicationDate"
                                                              name="publicationDate"
                                                              timeFormat={false}
                                                              closeOnSelect={true}
                                                              value={this.state.exercise.publicationDate}
                                                              dateFormat="DD/MM/YYYY"
                                                    />
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
                                    <CustomButton color="danger" className="mt-3" onClick={this.removeExercise} ><FontAwesomeIcon icon="trash-alt" className="mr-2" /> Eliminar este Ejercicio</CustomButton>
                                </Col>
                                <StyledModal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                                    <ModalHeader toggle={this.toggleModal}>{this.state.exercise.exerciseName}</ModalHeader>
                                    <ModalBody className="d-flex align-items-stretch">
                                        <StyledIframe sandbox="" src={`${process.env.BACKEND}/exercise/${this.state.exercise.exerciseFolder}`}></StyledIframe>
                                    </ModalBody>
                                </StyledModal>
                            </React.Fragment>;
        } else {
            exerciseBlock = <div className="w-100 d-flex align-items-center justify-content-center"><Loading /></div>;
        }

        return(
            <React.Fragment>
                { exerciseBlock }
            </React.Fragment>
        );
    }
}

export default props => (
    <AppConsumer>
      {context => <Exercise {...props} updateAlert={context} />}
    </AppConsumer>
);