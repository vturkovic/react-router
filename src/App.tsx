import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import SidebarComponent from './components/sidebarComponent';
import HomeComponent from './components/homeComponent';
import AboutComponent from './components/aboutComponent';
import DashboardComponent from './components/dashboardComponent';
import ProfileComponent from './components/profileComponent';
import { SidebarItemInterface } from './interfaces';

const App = () => {

  const sidebarItems: SidebarItemInterface[] = [
    {
      title: 'Home',
      route: '/'
    },
    {
      title: 'About',
      route: '/about'
    },
    {
      title: 'Dashboard',
      route: '/dashboard'
    },
    {
      title: 'Profile',
      route: '/profile'
  }];

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={1}>
            <SidebarComponent items={sidebarItems}/>
          </Col>
          <Col>
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