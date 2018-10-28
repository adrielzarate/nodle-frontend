import React from 'react';

import { Col } from 'reactstrap';

import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import CustomCard from '../components/CustomCard';
import ExerciseUpload from '../components/ExerciseUpload';

class AddExercise extends React.Component {

    render() {
        return(
            <Layout>
                <Col xl="6" className="pt-5 scroll-y">

                    <p><CustomButton color="primary" size="sm" className="btn-rounded mb-0" tag="a" href="#">Nombre Unidad</CustomButton></p>
                    <h3 className="mb-4">Agregar Ejercicio</h3>

                    <CustomCard>
                        <ExerciseUpload />
                    </CustomCard>
                </Col>

            </Layout>
        );
    }
}

export default AddExercise;