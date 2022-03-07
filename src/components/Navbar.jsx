import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 224px;
  min-height: 100vh;
  border-right: 1px solid lightgrey;
`;

const TabLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  :hover {
    background-color: #e5e4e4;
    cursor: pointer;
    text-decoration: none;
  }
  ${pps => pps.selected && 'background-color: #e5e4e4'}
`;

const TabText = styled.span`
  border-bottom: 1px solid lightgrey;
  margin: 0 16px;
  padding: 24px;
  flex: 1;
  text-transform: uppercase;
  font-size: 14px;

`;

const Tab = ({ title, to }) => {
  const location = useLocation();
  const selected = location.pathname === to;
  return (
    <TabLink to={to} selected={selected}>
      <TabText>{title}</TabText>
    </TabLink>
  );
}

const Navbar = () => (
  <NavbarContainer>
    <Tab title="Calendar" to="/" />
    <Tab title="Customers" to="/customers" />
    <Tab title="Invoices" to="/invoices" />
    <Tab title="History" to="/history" />
  </NavbarContainer>
);

export default Navbar;