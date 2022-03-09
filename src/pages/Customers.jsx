import * as React from 'react';
import CustomersTable from '../components/CustomersTable';
import CustomerDrawer from '../components/CustomerDrawer';
import styled from 'styled-components';
import { Button, InputGroup } from '@blueprintjs/core';
import AddCustomerModal from '../components/modals/AddCustomerModal';
import { useModal } from "react-modal-hook";
import { Routes, Route } from "react-router-dom";

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
  const [showAddCustomerModal, hideAddCustomerModal] = useModal(() => (
    <AddCustomerModal onClose={hideAddCustomerModal} />
  ), []);

  return (
    <Container>
      <Routes>
        <Route path=":customerId" element={<CustomerDrawer />} />
      </Routes>
      <Header>
        <SearchBar type="search" placeholder="Search..." leftIcon="search" />
        <Button text="Add New Customer" onClick={showAddCustomerModal} intent="primary" icon="new-person" />
      </Header>
      <CustomersTable />
    </Container>
  );
};

export default Customers;