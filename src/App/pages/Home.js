import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

import CustomButton from '../components/CustomButton';
import CustomCard from '../components/CustomCard';

const Home = () => (
    <React.Fragment>
        <Col xl="6" className="py-5 scroll-y">
            <h3 className="mb-4">Ultimas entregas</h3>

            <CustomCard cardtype={"recent"} cardstyle={"success"} />
            <CustomCard cardtype={"recent"} cardstyle={"success"} />
            <CustomCard cardtype={"recent"} cardstyle={"fail"} />
            <CustomCard cardtype={"recent"} cardstyle={"success"} />
            <CustomCard cardtype={"recent"} cardstyle={"fail"} />
            <CustomCard cardtype={"recent"} cardstyle={"success"} />

            <CustomButton color="primary" className="mb-5" tag={Link} to="/recent-deliveries">Ver todas las entregas</CustomButton>
        </Col>
        <Col xl="6" className="py-5 scroll-y">
            <h3 className="mb-4">Estado de la materia</h3>
            <p><strong>Unidades incompletas</strong></p>

            <CustomCard>
                <p><CustomButton color="primary" size="sm" className="btn-rounded" tag={Link} to="#">Unidad 3</CustomButton></p>
                <CustomCard cardtype={"common"} cardstyle={"pending"} />
                <CustomCard cardtype={"common"} cardstyle={"pending"} />
                <CustomCard cardtype={"common"} cardstyle={"pending"} />
            </CustomCard>

            <p><strong>Unidades completas</strong></p>

            <CustomCard>
                <p><CustomButton color="primary" size="sm" className="btn-rounded" tag={Link} to="#">Unidad 2</CustomButton></p>

                <CustomCard cardtype={"common"} cardstyle={"fail"} />
                <CustomCard cardtype={"common"} cardstyle={"success"} />
                <CustomCard cardtype={"common"} cardstyle={"success"} />
                <CustomCard cardtype={"common"} cardstyle={"pending"} />
                <CustomCard cardtype={"common"} cardstyle={"fail"} />
                <CustomCard cardtype={"common"} cardstyle={"fail"} />

            </CustomCard>

        </Col>
    </React.Fragment>
);

export default Home;