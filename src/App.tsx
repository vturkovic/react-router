import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import SidebarComponent from './components/sidebarComponent';
import HomeComponent from './components/homeComponent';
import AboutComponent from './components/aboutComponent';
import DashboardComponent from './components/dashboardComponent';
import ProfileComponent from './components/profileComponent';

const App = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={3}>
            <SidebarComponent />
          </Col>
          <Col xs={9}>
            <Routes>
              <Route path="/" element={<HomeComponent/>} />
              <Route path="/about" element={<AboutComponent/>} />
              <Route path="/dashboard" element={<DashboardComponent/>} />
              <Route path="/profile" element={<ProfileComponent/>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;