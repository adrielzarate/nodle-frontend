import React from 'react';
import { Link } from 'react-router-dom';

import { Col } from 'reactstrap';

import CustomButton from '../components/CustomButton';
import CustomCard from '../components/CustomCard';
import ExerciseUpload from '../components/ExerciseUpload';

class AddExercise extends React.Component {

    render() {
        return(
            <Col xl="6" className="pt-5 scroll-y">

                <p><CustomButton color="primary" size="sm" className="btn-rounded mb-0" tag={Link} to="/unit">Nombre Unidad</CustomButton></p>
                <h3 className="mb-4">Agregar Ejercicio</h3>

                <CustomCard>
                    <ExerciseUpload />
                </CustomCard>
            </Col>
        );
    }
}

export default AddExercise;