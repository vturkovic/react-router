import { Nav, NavItem, NavLink } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { SidebarItemsInterface  } from '../interfaces';

export const SidebarComponent = ({ items } : SidebarItemsInterface) => {
  const location = useLocation();

  return (
    <Nav defaultActiveKey={location.pathname} className="flex-column">
      {items.map((item, i) => (
              <NavItem key={i}>
                <NavLink as={Link} to={item.route}>
                  {item.title}
                </NavLink>
              </NavItem>
      ))}
    </Nav>
  );
};
