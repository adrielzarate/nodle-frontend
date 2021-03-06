import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Col,
    Media
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CustomButton from '../components/CustomButton';
import CustomCard from '../components/CustomCard';

const Asistant = () => (
    <React.Fragment>
        <Col xl="6" className="py-5 scroll-y">
            <Media className="d-flex align-items-center mb-5">
                <Media left >
                    <img className="rounded-circle mr-4" src="/img/user-a.jpg" width="120" height="120" alt="" />
                </Media>
                <Media body>
                    <h5 className="mt-0">Nombre Apellido Colaborador</h5>
                    <p>nombre-apellido@colaborador.com</p>
                </Media>
            </Media>
            <CustomButton color="warning" className="mr-2 mb-2"><FontAwesomeIcon icon="ban" className="ml-2" /> Suspender esta cuenta</CustomButton>
            <CustomButton color="danger"><FontAwesomeIcon icon="trash-alt" className="ml-2" /> Eliminar esta cuenta</CustomButton>
        </Col>
        <Col xl="6" className="py-5 scroll-y">

            <h3 className="mb-4">Ejercicios creados</h3>

            <CustomCard>
                <div className="d-flex align-items-center pb-4 pt-2">
                    <div className="flex-grow-1"><CustomButton color="primary" size="sm" className="btn-rounded" tag={Link} to="#">Unidad 3</CustomButton></div>
                </div>
                <CustomCard cardtype={"common"} cardstyle={"default"} />
                <CustomCard cardtype={"common"} cardstyle={"default"} />
                <CustomCard cardtype={"common"} cardstyle={"default"} />
            </CustomCard>

            <CustomCard>
                <div className="d-flex align-items-center pb-4 pt-2">
                    <div className="flex-grow-1"><CustomButton color="primary" size="sm" className="btn-rounded" tag={Link} to="#">Unidad 2</CustomButton></div>
                </div>
                <CustomCard cardtype={"common"} cardstyle={"default"} />
                <CustomCard cardtype={"common"} cardstyle={"default"} />
                <CustomCard cardtype={"common"} cardstyle={"default"} />
                <CustomCard cardtype={"common"} cardstyle={"default"} />
                <CustomCard cardtype={"common"} cardstyle={"default"} />
                <CustomCard cardtype={"common"} cardstyle={"default"} />
            </CustomCard>

        </Col>
    </React.Fragment>
);

export default Asistant;