import React from 'react';
import styled from 'styled-components';
import { Dialog, Button } from '@blueprintjs/core';

const Body = styled.div`
  margin: 16px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: right;
  margin: 0 16px;
  button {
    margin-left: 8px;
  }
`;

const AddCustomerModal = ({ onClose }) => {
  return (
    <Dialog isOpen title="Create New Customer" onClose={onClose}>
      <Body>
        <div>Coming soon...</div>
      </Body>
      <Footer>
        <Button onClick={onClose} text="Cancel" />
        <Button disabled onClick={() => { }} text="Add Customer" intent="primary" />
      </Footer>
    </Dialog>
  );
}

export default AddCustomerModal;