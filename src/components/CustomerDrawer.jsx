import React from 'react';
import { Drawer, DrawerSize } from '@blueprintjs/core';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
`;

const CustomerDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} size={DrawerSize.SMALL} onClose={onClose}>
      <Container>this is some drawer content</Container>
    </Drawer>
  );
};

export default CustomerDrawer;