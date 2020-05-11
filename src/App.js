import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Chartjs from './containers/Chartjs';
import Amcharts from './containers/Amcharts';
import Plotly from './containers/Plotly';
import Highcharts from './containers/Highcharts';

function App() {
  const [ location, setLocation ] = useState({});

  useEffect(() => {
    setLocation(window.location);
  }, [location]);

  return (
    <Router>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Brand href="/chartjs">React Chart Dashboard</Navbar.Brand>
      </Navbar>
      <Container fluid className="h-100">
        <Row className="h-100 border-top">
          <Col xs={12} sm={4} md={3} lg={2}>
            <Nav activeKey={location.pathname} className="flex-column">
              <Nav.Link href="/chartjs" className="border-bottom">ChartJS</Nav.Link>
              <Nav.Link href="/highcharts" className="border-bottom">Highcharts</Nav.Link>
              <Nav.Link href="/amcharts" className="border-bottom">Amcharts</Nav.Link>
              <Nav.Link href="/plotly" className="border-bottom">Plotly</Nav.Link>
            </Nav>
          </Col>
          <Col className="border-left h-100 py-3">
            <Switch>
              <Route path="/chartjs">
                <Chartjs />
              </Route>
              <Route path="/highcharts">
                <Highcharts />
              </Route>
              <Route path="/amcharts">
                <Amcharts />
              </Route>
              <Route path="/plotly">
                <Plotly />
              </Route>
              <Route path="/">
                <Chartjs />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
