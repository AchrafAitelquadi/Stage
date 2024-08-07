import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

// Set moment locale to French
moment.locale('fr');

// Initialize localizer
const localizer = momentLocalizer(moment);

const App = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [selectEvent, setSelectEvent] = useState(null);
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('01:00');
  const [titleError, setTitleError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [timeRangeError, setTimeRangeError] = useState(false);

  useEffect(() => {
    // Load events from localStorage
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);
  }, []);

  useEffect(() => {
    // Save events to localStorage
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleSelectSlot = (slotInfo) => {
    setShowModal(true);
    setSelectedDate(slotInfo.start);
    setSelectEvent(null);
  };

  const handleSelectedEvent = (event) => {
    setShowModal(true);
    setSelectEvent(event);
    setEventTitle(event.title);
    setStartTime(moment(event.start).format('HH:mm'));
    setEndTime(moment(event.end).format('HH:mm'));
  };

  const saveEvent = () => {
    setTitleError(false);
    setTimeError(false);
    setTimeRangeError(false);

    if (!eventTitle.trim()) {
      setTitleError(true);
    }

    if (!startTime || !endTime) {
      setTimeError(true);
    }

    const start = moment(selectedDate).set({
      hour: moment(startTime, 'HH:mm').hour(),
      minute: moment(startTime, 'HH:mm').minute(),
    }).toDate();
    const end = moment(selectedDate).set({
      hour: moment(endTime, 'HH:mm').hour(),
      minute: moment(endTime, 'HH:mm').minute(),
    }).toDate();

    if (start >= end) {
      setTimeRangeError(true);
    }

    if (eventTitle.trim() && startTime && endTime && start < end) {
      if (selectEvent) {
        const updatedEvent = { ...selectEvent, title: eventTitle, start, end };
        const updatedEvents = events.map((event) =>
          event === selectEvent ? updatedEvent : event
        );
        setEvents(updatedEvents);
      } else {
        const newEvent = {
          title: eventTitle,
          start,
          end,
          color: generateRandomColor(), // Generate random color for new events
        };
        setEvents([...events, newEvent]);
      }
      setShowModal(false);
      setEventTitle('');
      setSelectEvent(null);
      setStartTime('00:00');
      setEndTime('01:00');
    }
  };

  const deleteEvents = () => {
    if (selectEvent) {
      const updatedEvents = events.filter((event) => event !== selectEvent);
      setEvents(updatedEvents);
      setShowModal(false);
      setEventTitle('');
      setSelectEvent(null);
      setStartTime('00:00');
      setEndTime('01:00');
    }
  };

  // Function to generate random colors
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ height: '100vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px' }}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectedEvent}
        views={['month', 'week', 'day', 'agenda']}
        components={{
          event: ({ event }) => (
            <span style={{ backgroundColor: event.color }}>{event.title}</span>
          ),
        }}
        messages={{
          date: 'Date',
          time: 'Heure',
          event: 'Événement',
          allDay: 'Toute la journée',
          week: 'Semaine',
          work_week: 'Semaine de travail',
          day: 'Jour',
          month: 'Mois',
          previous: 'Précédent',
          next: 'Suivant',
          yesterday: 'Hier',
          tomorrow: 'Demain',
          today: "Aujourd'hui",
          agenda: 'Agenda',
          noEventsInRange: 'Aucun événement dans cette période',
          showMore: (total) => `+ ${total} plus`,
        }}
      />

      {showModal && (
        <div
          className="modal"
          style={{
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.5)', // This is the black overlay
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content" style={{ backgroundColor: '#fff' }}>
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectEvent ? 'Modifier l\'événement' : 'Ajouter un événement'}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false);
                    setEventTitle('');
                    setSelectEvent(null);
                    setTitleError(false);
                    setTimeError(false);
                    setTimeRangeError(false);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="eventTitle" className="form-label">
                    Titre de l'événement:
                  </label>
                  <input
                    type="text"
                    className={`form-control ${titleError ? 'is-invalid' : ''}`}
                    id="eventTitle"
                    value={eventTitle}
                    autoComplete="off"
                    onChange={(e) => setEventTitle(e.target.value)}
                  />
                  {titleError && (
                    <div className="invalid-feedback">
                      Veuillez saisir un titre pour l'événement.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="startTime" className="form-label">
                    Heure de début:
                  </label>
                  <TimePicker
                    onChange={setStartTime}
                    value={startTime}
                    disableClock={true}
                    format="HH:mm"
                    className={`form-control ${timeError || timeRangeError ? 'is-invalid' : ''}`}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="endTime" className="form-label">
                    Heure de fin:
                  </label>
                  <TimePicker
                    onChange={setEndTime}
                    value={endTime}
                    disableClock={true}
                    format="HH:mm"
                    className={`form-control ${timeError || timeRangeError ? 'is-invalid' : ''}`}
                  />
                  {timeError && (
                    <div className="invalid-feedback">
                      Veuillez sélectionner une heure de fin valide.
                    </div>
                  )}
                  {timeRangeError && (
                    <div className="invalid-feedback">
                      L'heure de fin doit être après l'heure de début.
                    </div>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                {selectEvent && (
                  <button
                    type="button"
                    className="btn btn-danger me-2"
                    onClick={deleteEvents}
                  >
                    Supprimer l'événement
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveEvent}
                >
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
