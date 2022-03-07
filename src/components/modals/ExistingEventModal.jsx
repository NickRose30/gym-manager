import React from 'react';
import { Dialog, Button, Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import moment from 'moment';

const Body = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  justify-content: right;
  margin: 0 16px;
  button {
    margin-left: 8px;
  }
`;

const BodyText = styled.span`
  margin-bottom: 8px;
`;

const CustomerSection = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  margin: 24px 0 8px 0;
  justify-content: space-around;
`;

const CustomerSubsection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 16px;
`;

const EventAttribute = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const EventAttributeSubsection = styled.div`
  & + & {
    margin-left: 32px;
  }
`;

const Label = styled.span`
  margin-left: 8px;
`;

const CustomerName = styled.span`
  font-size: 16px;
  margin-top: 8px;
`;

const PaymentHeader = styled.span`
  font-weight: bold;
  margin: 16px 0;
`;

const AttributeIcon = ({ value }) => value ? <Icon icon="tick-circle" color="green" /> : <Icon icon="cross" color="red" />;

const ExistingEventModal = ({ onClose, startDateTime = moment(), endDateTime = moment() }) => {
  const [attended, setAttended] = React.useState(true);
  const [paid, setPaid] = React.useState(false);

  const onEdit = () => { };

  return (
    <Dialog isOpen title="Event: Customer #1" onClose={onClose}>
      <Body>
        <BodyText><b>Start:</b> {startDateTime.utc().format("LLLL")}</BodyText>
        <BodyText><b>End:</b> {endDateTime.utc().format("LLLL")}</BodyText>
        <CustomerSection>
          <CustomerSubsection>
            <Icon icon="user" size={96} color="grey" />
            <CustomerName>Customer #1 Name</CustomerName>
          </CustomerSubsection>
          <CustomerSubsection>
            <EventAttribute>
              <EventAttributeSubsection>
                <AttributeIcon value={attended} />
                <Label>{attended ? 'Attended' : 'Unattended'}</Label>
              </EventAttributeSubsection>
              <EventAttributeSubsection>
                <Button
                  text={`Mark as ${attended ? 'un' : ''}attended`}
                  onClick={() => setAttended(!attended)}
                  small
                  minimal
                  outlined
                />
              </EventAttributeSubsection>
            </EventAttribute>
            <EventAttribute>
              <EventAttributeSubsection>
                <AttributeIcon value={paid} />
                <Label>{paid ? 'Paid' : 'Unpaid'}</Label>
              </EventAttributeSubsection>
              <EventAttributeSubsection>
                <Button
                  text={`Mark as ${paid ? 'un' : ''}paid`}
                  onClick={() => setPaid(!paid)}
                  small
                  minimal
                  outlined
                />
              </EventAttributeSubsection>
            </EventAttribute>
          </CustomerSubsection>
        </CustomerSection>
        <PaymentHeader>Payment Details</PaymentHeader>
        <div style={{ color: 'grey' }}>Add payment details</div>
        <PaymentHeader>Notes</PaymentHeader>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </div>
      </Body>
      <Footer>
        <Button onClick={onClose} text="Close" />
        <Button onClick={onEdit} text="Go to Customer" icon="person" />
        <Button onClick={onEdit} text="Edit Event" icon="edit" />
      </Footer>
    </Dialog>
  );
};

export default ExistingEventModal;