import React from 'react';

import { 
    Col,
    Media
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import CustomCard from '../components/CustomCard';

const Student = () => (
    <Layout>
        <Col xl="6" className="py-5 scroll-y">
            <Media className="d-flex align-items-center mb-5">
                <Media left >
                    <img className="rounded-circle mr-4" src="/img/user-a.jpg" width="120" height="120" alt="" />
                </Media>
                <Media body>
                    <h5 className="mt-0">Nombre Apellido Alumno</h5>
                    <p>nombre-apellido@alumno.com</p>
                </Media>
            </Media>
            <CustomButton color="warning" className="mr-2 mb-2"><FontAwesomeIcon icon="ban" className="ml-2" /> Suspender esta cuenta</CustomButton>
            <CustomButton color="danger"><FontAwesomeIcon icon="trash-alt" className="ml-2" /> Eliminar esta cuenta</CustomButton>
        </Col>
        <Col xl="6" className="py-5 scroll-y">

            <h3 className="mb-4">Estado de la materia</h3>
            <p><strong>Faltan 3 Ejercicios para tener la materia la día</strong></p>

            <CustomCard>
                <div className="d-flex align-items-center pb-4 pt-2">
                    <div className="flex-grow-1"><CustomButton color="primary" size="sm" className="btn-rounded" tag="a" href="#">Unidad 3</CustomButton></div>
                    <div>Incompleta</div>
                </div>
                <CustomCard cardtype={"common"} cardstyle={"pending"} />
                <CustomCard cardtype={"common"} cardstyle={"pending"} />
                <CustomCard cardtype={"common"} cardstyle={"fail"} />
            </CustomCard>

            <CustomCard>
                <div className="d-flex align-items-center pb-4 pt-2">
                    <div className="flex-grow-1"><CustomButton color="primary" size="sm" className="btn-rounded" tag="a" href="#">Unidad 2</CustomButton></div>
                    <div>Completada - <strong>Promedio</strong></div> <span className="score ml-2">9</span>
                </div>
                <CustomCard cardtype={"common"} cardstyle={"fail"} />
                <CustomCard cardtype={"common"} cardstyle={"success"} />
                <CustomCard cardtype={"common"} cardstyle={"success"} />
                <CustomCard cardtype={"common"} cardstyle={"pending"} />
                <CustomCard cardtype={"common"} cardstyle={"fail"} />
                <CustomCard cardtype={"common"} cardstyle={"fail"} />
            </CustomCard>

        </Col>
    </Layout>
);

export default Student;