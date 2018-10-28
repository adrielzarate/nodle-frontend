import React from 'react';
import { Redirect } from 'react-router-dom'

import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput
} from 'reactstrap';

// import axios from 'axios';

import * as Datetime from 'react-datetime';

import CustomButton from '../components/CustomButton';

class ExerciseUpload extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDate: Datetime.moment().format('DD/MM/YYYY'),
            selectedState: 'published',
            datePickerDisabled: false
        };

        this.yesterday = Datetime.moment().subtract( 1, 'day' );
        this.valid = current => current.isAfter( this.yesterday );

        this.unitName = 'Nombre Unidad';
        this.exerciseName = React.createRef();
        this.exerciseState = React.createRef();
        this.exerciseDateRef = React.createRef();
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

        if ( ev.target.value === 'published' ) this.setState({ selectedDate: Datetime.moment().format('DD/MM/YYYY') });

        if ( ev.target.value === 'pending' ) {
            this.setState({ selectedDate: Datetime.moment().add(1, 'days').format('DD/MM/YYYY') });
        }

        if ( ev.target.value === 'draft' ) {
            this.setState({ selectedDate: null });
            this.setState({ datePickerDisabled: true });
        } else {
            this.setState({ datePickerDisabled: false });
        }
    };
    
    handleUpload = (ev) => {
        ev.preventDefault();
    
        const data = new FormData();
        
        data.append('unitName', this.unitName);
        data.append('exerciseName', this.exerciseName.value);
        data.append('exerciseState', this.exerciseState.value);
        data.append('exerciseDate', this.state.selectedDate);
        data.append('file', this.exercisePackage.files[0]);
    
        fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: data,
        }).then((res) => {
            return <Redirect to='/unit' />
        });
    };
   
    render() {
        return(

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
                                     innerRef={select => (this.exerciseState = select)}
                                     onChange={this.updateState}
                        >
                            <option value="published">Publicado</option>
                            <option value="draft">Borrador</option>
                            <option value="pending">Pendiente</option>
                        </CustomInput>
                    </Col>
                    <Col md="6">
                        <Label for="exerciseDate">Fecha de publicación</Label>
                        <Datetime isValidDate={ this.valid }
                                  timeFormat={false} 
                                  dateFormat="DD/MM/YYYY"
                                  id="exerciseDate" 
                                  name="exerciseDate" 
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


        );
    }
 }

 export default ExerciseUpload;