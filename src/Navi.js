import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import './App.css';

function Example(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <Navbar color="faded" className='navbar'>
      <NavbarToggler onClick={toggleNavbar} className="me-2"/>
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      
      <Pagination aria-label="Page navigation example" size="md">
        <PaginationItem>
          <PaginationLink first href="#"/>
        </PaginationItem>
        
        <PaginationItem>
          <PaginationLink href="#" previous/>
        </PaginationItem>
      
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        
        <PaginationItem>
          <PaginationLink href="#" next/>
        </PaginationItem>
        
        <PaginationItem>
          <PaginationLink href="#" last/>
        </PaginationItem>
      </Pagination>
    </Navbar>
  );
}

export default Example;