import React from 'react';
import { Dialog, Button, TextArea, Popover, Menu, MenuItem, Position } from '@blueprintjs/core';
import styled from 'styled-components';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import * as api from '../../api';
import { useDispatch } from 'react-redux';
import { fetchEvents } from '../../store';

const format = 'h:mm a';

const DEFAULT_START = moment().startOf('hour');
const DEFAULT_END = moment().endOf('hour').add(1, 'minute');

const momentToJs = momentDate => {
  const jsDate = new Date();
  // date
  jsDate.setFullYear(momentDate.utc().year());
  jsDate.setMonth(momentDate.utc().month());
  jsDate.setDate(momentDate.utc().date());
  // time
  jsDate.setHours(momentDate.utc().hour());
  jsDate.setMinutes(momentDate.utc().minute());
  jsDate.setSeconds(0);
  return jsDate;
};

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

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  .rc-time-picker {
    margin-left: 8px;
  }
`;

const BodyText = styled.span`
  margin-bottom: 8px;
`;

const TimeSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CustomerSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  span {
    margin-right: 8px;
  }
  button {
    width: 184px;
    justify-content: left;
  }
`;

const CustomerMenu = () => (
  <Menu>
    <MenuItem icon="person" onClick={() => { }} text="Customer #1" />
    <MenuItem icon="person" onClick={() => { }} text="Customer #2" />
    <MenuItem icon="person" onClick={() => { }} text="Customer #3" />
  </Menu>
);

const CreateEventModal = ({ onClose, startDateTime = DEFAULT_START, endDateTime = DEFAULT_END }) => {
  const dispatch = useDispatch();
  const [startTime, setStartTime] = React.useState(startDateTime);
  const [endTime, setEndTime] = React.useState(endDateTime);
  const [notes, setNotes] = React.useState('');

  const onStartChange = value => {
    setStartTime(value && moment(value));
  };

  const onEndChange = value => {
    setEndTime(value && moment(value));
  };

  const handleAddEvent = async () => {
    await api.fetchAddEvent({
      title: 'New Event',
      attended: false,
      paid: false,
      customerId: '2MEiCCRPAtZ7KoW8qnyP',
      startDateTime: momentToJs(startTime),
      endDateTime: momentToJs(endTime),
      eventGroupId: null,
      notes,
    });
    dispatch(fetchEvents());
    onClose();
  };

  return (
    <Dialog isOpen title="Create New Event" onClose={onClose}>
      <Body>
        <BodyContainer>
          <BodyText>Create Event for {startDateTime.utc().format("dddd, MMMM Do YYYY")}</BodyText>
          <CustomerSection>
            <span>Customer</span>
            <Popover content={<CustomerMenu />} position={Position.BOTTOM} minimal>
              <Button icon="caret-down" text="Select Customer" />
            </Popover>
          </CustomerSection>
          <TimeSection>
            <div>
              <span>Start time:</span>
              <TimePicker
                showSecond={false}
                defaultValue={moment(startTime).utc()}
                onChange={onStartChange}
                format={format}
                use12Hours
                minuteStep={5}
                focusOnOpen
              />
            </div>
            <div>
              <span>End time:</span>
              <TimePicker
                showSecond={false}
                defaultValue={moment(endTime).utc()}
                onChange={onEndChange}
                format={format}
                use12Hours
                minuteStep={5}
              />
            </div>
          </TimeSection>
          <span style={{ marginTop: 8, marginBottom: 8 }}>Notes</span>
          <TextArea
            growVertically
            onChange={e => setNotes(e.target.value)}
            value={notes}
          />
        </BodyContainer>
      </Body>
      <Footer>
        <Button onClick={onClose} text="Cancel" />
        <Button onClick={handleAddEvent} text="Create Event" intent="primary" />
      </Footer>
    </Dialog>
  );
};

export default CreateEventModal;