import * as React from "react";
import "@fullcalendar/react/dist/vdom"; // need this to get fullcalendar to work with vite
import FullCalendar from "@fullcalendar/react"; // this import must go before the plugin imports
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from 'moment';
import { useModal } from "react-modal-hook";
import CreateEventModal from '../components/modals/CreateEventModal';
import ExistingEventModal from '../components/modals/ExistingEventModal';
import { fetchEvents, selectEvents } from '../store';
import { useSelector, useDispatch } from 'react-redux'

const Calendar = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const [selectedStartDateTime, setSelectedStartDateTime] = React.useState(null);
  const [selectedEndDateTime, setSelectedEndDateTime] = React.useState(null);
  const [showCreateEventModal, hideCreateEventModal] = useModal(() => (
    <CreateEventModal
      onClose={hideCreateEventModal}
      startDateTime={selectedStartDateTime}
      endDateTime={selectedEndDateTime}
    />
  ), [selectedStartDateTime, selectedEndDateTime]);
  const [showExistingEventModal, hideExistingEventModal] = useModal(() => (
    <ExistingEventModal onClose={hideExistingEventModal} />
  ), []);

  const handleDateClick = pps => {
    const end = pps.allDay ? moment(pps.end).subtract(1, 'd') : moment(pps.end);
    setSelectedStartDateTime(moment(pps.start));
    setSelectedEndDateTime(end);
    showCreateEventModal();
  };

  const handleEventChanged = pps => {
    console.log('event changed to:', pps.startStr, '->', pps.endStr)
  };

  const showEventModal = pps => {
    showExistingEventModal();
    const range = pps.event._instance.range;
    console.log('event clicked:', range.start, '->', range.end)
  };

  // fetch events on mount
  React.useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <FullCalendar
      scrollTime={moment().subtract(1, 'hours').format('HH:00:00')}
      height="100%"
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        start: "prev,next today",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay"
      }}
      slotDuration={'00:15:00'}
      snapDuration={'00:15:00'}
      // views={{
      //   resourceTimelineDay: {
      //     type: 'resourceTimelineDay',
      //     buttonText: 'Daily',
      //     slotDuration: '00:10:00',
      //     eventMinWidth: 1,
      //     slotMinWidth: 40
      //   },
      //   resourceTimelineWeekDays: {
      //     type: 'resourceTimelineWeek',
      //     duration: { weeks: 1 },
      //     slotDuration: { days: 1 },
      //     slotLabelFormat: [
      //       { month: 'long', year: 'numeric' }, // top level of text
      //       {
      //         day: 'numeric',
      //         weekday: 'short',
      //         omitCommas: true,
      //       },
      //     ],
      //     buttonText: 'Weekly',
      //   },
      // }}
      // eventTimeFormat={{
      //   hour: 'numeric',
      //   minute: '2-digit',
      //   hour12: true,
      // }}
      // nextDayThreshold={'03:00'}
      initialView="dayGridMonth"
      events={events}
      lazyFetching={false}
      editable={true}
      selectable={true}
      select={handleDateClick}
      eventChange={handleEventChanged}
      // dateClick={handleDateClick}
      eventClick={showEventModal}
      timeZone={'none'}
    />
  );
};

export default Calendar;

