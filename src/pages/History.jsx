import * as React from 'react';
import HistoryTable from '../components/HistoryTable';
import styled from 'styled-components';
import { InputGroup } from '@blueprintjs/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SearchBar = styled(InputGroup)`
  width: 288px;
`;

const History = () => {
  return (
    <Container>
      <Header>
        <SearchBar type="search" placeholder="Search..." leftIcon="search" />
      </Header>
      <HistoryTable onRowClick={() => { }} />
    </Container>
  );
};

export default History;