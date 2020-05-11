import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LineChart from '../components/Amcharts/Line';

function Amcharts() {
  return (
      <Row>
          <Col sm={12} md={6} lg={4}>
              <LineChart></LineChart>
          </Col>
      </Row>
  );
}

export default Amcharts;
