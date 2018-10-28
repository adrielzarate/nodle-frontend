import React from 'react';

import { Col } from 'reactstrap';

import Layout from '../components/Layout';
import CustomCard from '../components/CustomCard';

const RecentDeliveries = () => (
    <Layout>
        <Col xl="6" className="py-5 scroll-y">
            <h3 className="mb-4">Ultimas entregas</h3>

            <CustomCard cardtype={"recent"} cardstyle={"success"} />
            <CustomCard cardtype={"recent"} cardstyle={"success"} />
            <CustomCard cardtype={"recent"} cardstyle={"fail"} />
            <CustomCard cardtype={"recent"} cardstyle={"success"} />
            <CustomCard cardtype={"recent"} cardstyle={"fail"} />
            <CustomCard cardtype={"recent"} cardstyle={"success"} />
            <CustomCard cardtype={"recent"} cardstyle={"success"} />
            <CustomCard cardtype={"recent"} cardstyle={"success"} />
            <CustomCard cardtype={"recent"} cardstyle={"fail"} />
            <CustomCard cardtype={"recent"} cardstyle={"success"} />
            <CustomCard cardtype={"recent"} cardstyle={"fail"} />
            <CustomCard cardtype={"recent"} cardstyle={"success"} />
        </Col>
</Layout>
);

export default RecentDeliveries;