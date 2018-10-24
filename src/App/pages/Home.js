import React from 'react';

import { Col } from 'reactstrap';

import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import CustomCard from '../components/CustomCard';

const Home = () => (
    <Layout>
        <Col xl="6" className="py-5 scroll-y">
            <h3 className="mb-4">Ultimas entregas</h3>

            <CustomCard cardtype={"recent"} deliverystate={"success"} />
            <CustomCard cardtype={"recent"} deliverystate={"success"} />
            <CustomCard cardtype={"recent"} deliverystate={"fail"} />
            <CustomCard cardtype={"recent"} deliverystate={"success"} />
            <CustomCard cardtype={"recent"} deliverystate={"fail"} />
            <CustomCard cardtype={"recent"} deliverystate={"success"} />

            <CustomButton color="primary" className="mb-5">Ver todas las entregas</CustomButton>
        </Col>
        <Col xl="6" className="py-5 scroll-y">
            <h3 className="mb-4">Estado de la materia</h3>
            <p><strong>Unidades incompletas</strong></p>

            <CustomCard>
                <p><CustomButton color="primary" size="sm" className="btn-rounded" tag="a" href="#">Unidad 3</CustomButton></p>
                <CustomCard cardtype={"incomplete"} deliverystate={"pending"} />
                <CustomCard cardtype={"incomplete"} deliverystate={"pending"} />
                <CustomCard cardtype={"incomplete"} deliverystate={"pending"} />
            </CustomCard>

            <p><strong>Unidades completas</strong></p>

            <CustomCard>
                <p><CustomButton color="primary" size="sm" className="btn-rounded" tag="a" href="#">Unidad 2</CustomButton></p>

                <CustomCard cardtype={"complete"} deliverystate={"fail"} />
                <CustomCard cardtype={"complete"} deliverystate={"success"} />
                <CustomCard cardtype={"complete"} deliverystate={"success"} />
                <CustomCard cardtype={"incomplete"} deliverystate={"pending"} />
                <CustomCard cardtype={"complete"} deliverystate={"fail"} />
                <CustomCard cardtype={"complete"} deliverystate={"fail"} />

            </CustomCard>

        </Col>
    </Layout>
);

export default Home;