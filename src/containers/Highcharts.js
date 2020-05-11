import React from 'react';
import LineChart from '../components/Highcharts/Line';
import { Row, Col } from 'react-bootstrap';

function Highcharts() {
  return (
    <Row>
        <Col sm={12} md={6} lg={4}>
            <LineChart></LineChart>
        </Col>
    </Row>
  );
}

export default Highcharts;
