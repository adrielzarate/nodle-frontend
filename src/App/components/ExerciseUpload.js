import React from 'react';
import { Redirect } from 'react-router-dom';

import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput
} from 'reactstrap';

import * as Datetime from 'react-datetime';

import CustomButton from '../components/CustomButton';
import Loading from '../components/Loading';

class ExerciseUpload extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDate: Datetime.moment(),
            selectedState: 'published',
            datePickerDisabled: false,
            redirect: false,
            uploadingForm: false
        };

        this.yesterday = Datetime.moment().subtract( 1, 'day' );
        this.valid = current => current.isAfter( this.yesterday );

        this.unitName = 'Nombre Unidad';
        this.exerciseName = React.createRef();
        this.publicationDateRef = React.createRef();
        this.exercisePackage = React.createRef();
    }
    
    updateDate = (date) => {

        this.setState({ selectedDate: date._d });

        if ( date.diff(Datetime.moment()) > 0  ) {
            this.setState({ selectedState: 'pending' });
        } else {
            this.setState({ selectedState: 'published' });
        }

    };

    updateState = (ev) => {

        this.setState({ selectedState: ev.target.value });

        if ( ev.target.value === 'published' ) this.setState({ selectedDate: Datetime.moment() });

        if ( ev.target.value === 'pending' ) {
            this.setState({ selectedDate: Datetime.moment().add(1, 'days') });
        }

        if ( ev.target.value === 'draft' ) {
            this.setState({ selectedDate: Datetime.moment() });
            this.setState({ datePickerDisabled: true });
        } else {
            this.setState({ datePickerDisabled: false });
        }
    };
    
    handleUpload = (ev) => {
        ev.preventDefault();
    
        this.setState({ uploadingForm: true });

        const data = new FormData();
        
        data.append('unitName', this.unitName);
        data.append('exerciseName', this.exerciseName.value);
        data.append('exerciseState', this.state.selectedState);
        data.append('publicationDate', this.state.selectedDate);
        data.append('file', this.exercisePackage.files[0]);
    
        fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: data
        })
        .then(res => {
            if(res.status === 200) return res.json();
            else throw new Error(res.status);
        })
        .then( () => {
            this.setState({ 
                uploadingForm: false,
                redirect: true,
            });
            this.props.updateAlert(true, 'success', 'Carga del ejercicio exitosa');
        })
        .catch(error => {
            console.error('Error:', error);
            this.props.updateAlert(true, 'warning', 'Hubo un problema cargando el ejercicio');
        })
        .finally(() => {
            this.setState({ 
                uploadingForm: false,
                redirect: true
            });
        })
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/unit' />
        }
    }
   
    render() {

        const uploadingForm = this.state.uploadingForm;
        let uploadForm;

        if(!uploadingForm) {
            uploadForm = <React.Fragment>
                            {this.renderRedirect()}
                            <Form onSubmit={this.handleUpload}>
                                <FormGroup>
                                    <Label for="exerciseName">Nombre del Ejercicio</Label>
                                    <Input type="text" id="exerciseName" name="exerciseName" innerRef={input => (this.exerciseName = input)} />
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="6 mb-3 mb-md-0">
                                        <Label for="exerciseState">Estado</Label>
                                        <CustomInput type="select" 
                                                    id="exerciseState" 
                                                    name="exerciseState" 
                                                    value={this.state.selectedState}
                                                    onChange={this.updateState}
                                        >
                                            <option value="published">Publicado</option>
                                            <option value="draft">Borrador</option>
                                            <option value="pending">Pendiente</option>
                                        </CustomInput>
                                    </Col>
                                    <Col md="6">
                                        <Label for="publicationDate">Fecha de publicación</Label>
                                        <Datetime isValidDate={ this.valid }
                                                timeFormat={false} 
                                                dateFormat="DD/MM/YYYY"
                                                id="publicationDate" 
                                                name="publicationDate" 
                                                onChange={this.updateDate} 
                                                value={this.state.selectedDate}
                                                closeOnSelect={true}
                                                inputProps={{ disabled: this.state.datePickerDisabled }}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exercisePackage">Importar Ejercicio</Label>
                                    <CustomInput type="file" id="exercisePackage" name="exercisePackage" innerRef={input => (this.exercisePackage = input)} />
                                </FormGroup>                    

                                <CustomButton color="primary">Guardar</CustomButton>

                            </Form>
                        </React.Fragment>;
        } else {
            uploadForm = <Loading />;
        }

        return(
            <React.Fragment>
                { uploadForm }
            </React.Fragment>
        );

    }
 }

 export default ExerciseUpload;