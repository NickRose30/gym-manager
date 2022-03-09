import React from 'react';
import { Drawer, DrawerSize } from '@blueprintjs/core';
import styled from 'styled-components';
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  padding: 16px;
`;

const CustomerDrawer = () => {
  const navigate = useNavigate();
  const { customerId } = useParams();
  const onClose = () => navigate('/customers');
  return (
    <Drawer isOpen size={DrawerSize.SMALL} onClose={onClose}>
      <Container>This is customer #{customerId}</Container>
    </Drawer>
  );
};

export default CustomerDrawer;