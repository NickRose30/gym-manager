import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ModalProvider } from "react-modal-hook";
import Calendar from './pages/Calendar';
import Customers from './pages/Customers';
import Invoices from './pages/Invoices';
import History from './pages/History';
import NotFound from './pages/404';
import styled, { createGlobalStyle } from "styled-components";
import Navbar from './components/Navbar';
import initFirebase from './initFirebase';
import { store } from './store'
import { Provider as ReduxProvider } from 'react-redux'

import '@blueprintjs/core/lib/css/blueprint.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #232129;
    font-family: -apple-system, Roboto, sans-serif, serif;
    // calendar styles
    .fc-scroller {
      :hover {
        cursor: pointer;
      }
    }
  }
`;

const AppContainer = styled.div`
  display: flex;
`;

const Workspace = styled.div`
  padding: 32px;
  flex: 1;
  height: 100vh;
`;

const App = () => {
  initFirebase();
  return (
    <ReduxProvider store={store}>
      <ModalProvider>
        <Router>
          <GlobalStyle />
          <AppContainer>
            <Navbar />
            <Workspace>
              <Routes>
                <Route exact path="/" element={<Calendar />} />
                <Route exact path="/customers" element={<Customers />} />
                <Route exact path="/invoices" element={<Invoices />} />
                <Route exact path="/history" element={<History />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Workspace>
          </AppContainer>
        </Router>
      </ModalProvider>
    </ReduxProvider>
  );
};

export default App;