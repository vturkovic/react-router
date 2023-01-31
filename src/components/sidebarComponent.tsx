import React from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const SidebarComponent = () => {
  const location = useLocation();

  return (
    <Nav defaultActiveKey={location.pathname} className="flex-column">
      <NavItem>
        <NavLink as={Link} to="/">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} to="/dashboard">
          Dashboard
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} to="/profile">
          Profile
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SidebarComponent;

{/* <Router>

<Routes>
  <Route path="/" element={<HomeComponent/>} />
  <Route path="/about" element={<AboutComponent/>} />
  <Route path="/dashboard" element={<DashboardComponent/>} />
  <Route path="/profile" element={<ProfileComponent/>} />
</Routes>

<SidebarMenu className="expanded"> 
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
  </ul>
</SidebarMenu> 

</Router> */}