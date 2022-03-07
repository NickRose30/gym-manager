import * as React from 'react';
import CustomersTable from '../components/CustomersTable';
import CustomerDrawer from '../components/CustomerDrawer';
import styled from 'styled-components';
import { Button, InputGroup } from '@blueprintjs/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .MuiPaper-root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .MuiTableContainer-root {
    flex: 1;
  }
  .MuiTableRow-root {
    :hover {
      cursor: pointer;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SearchBar = styled(InputGroup)`
  width: 288px;
`;

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = React.useState(null);
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

  const openDrawer = () => setDrawerIsOpen(true);
  const closeDrawer = () => setDrawerIsOpen(false);

  return (
    <Container>
      <CustomerDrawer isOpen={drawerIsOpen} onClose={closeDrawer} />
      <Header>
        <SearchBar type="search" placeholder="Search..." leftIcon="search" />
        <Button text="Add New Customer" onClick={() => { }} intent="primary" icon="new-person" />
      </Header>
      <CustomersTable onRowClick={openDrawer} />
    </Container>
  );
};

export default Customers;