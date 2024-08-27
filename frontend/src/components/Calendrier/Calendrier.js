import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import './Calendrier.css';
import icons from '../importAllSvg';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, Button, TextField } from '@mui/material';
// Set moment locale to French
moment.locale('fr');

// Initialize localizer
const localizer = momentLocalizer(moment);

const App = () => {
  const [events, setEvents] = useState(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    return savedEvents;
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [selectEvent, setSelectEvent] = useState(null);
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('01:00');
  const [titleError, setTitleError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [timeRangeError, setTimeRangeError] = useState(false);
  const [eventLocation, setEventLocation] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const startOfMonth = moment().startOf('month').startOf('day').toDate();
    const endOfMonth = moment().endOf('month').endOf('day').toDate();
  
    const eventsThisMonth = events.filter(event => {
      const eventStart = moment(event.start).toDate();
      const eventEnd = moment(event.end).toDate();
  
      return (
        (eventStart >= startOfMonth && eventStart <= endOfMonth) ||
        (eventEnd >= startOfMonth && eventEnd <= endOfMonth) ||
        (eventStart < startOfMonth && eventEnd > endOfMonth)
      );
    });
  
    setFilteredEvents(eventsThisMonth);
  }, [events]);
  
  
  
  

  useEffect(() => {
    // Save events to localStorage whenever the events state changes
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);
  
  
  const handleSelectSlot = (slotInfo) => {
    setShowModal(true);
    setSelectedDate(slotInfo.start);
    setEventTitle('');
    setEventLocation(''); // Reset location for new event
    setSelectEvent(null);
    setStartTime('00:00');
    setEndTime('01:00');
  };

  const handleSelectedEvent = (event) => {
    setShowModal(true);
    setSelectEvent(event);
    setEventTitle(event.title);
    setEventLocation(event.location || '');
    setStartTime(moment(event.start).format('HH:mm'));
    setEndTime(moment(event.end).format('HH:mm'));
  };

  const saveEvent = () => {
    setTitleError(false);
    setTimeError(false);
    setTimeRangeError(false);
  
    if (!eventTitle.trim()) {
      setTitleError(true);
      return;
    }
  
    if (!startTime || !endTime) {
      setTimeError(true);
      return;
    }
  
    const start = moment(selectedDate)
      .set({
        hour: moment(startTime, 'HH:mm').hour(),
        minute: moment(startTime, 'HH:mm').minute(),
      })
      .toDate();
  
    const end = moment(selectedDate)
      .set({
        hour: moment(endTime, 'HH:mm').hour(),
        minute: moment(endTime, 'HH:mm').minute(),
      })
      .toDate();
  
    if (start >= end) {
      setTimeRangeError(true);
      return;
    }
  
    // Check if an event with the same title exists
    const existingEvent = events.find(event => event.title === eventTitle);
  
    let eventColor;
    if (existingEvent) {
      // Use the color of the existing event
      eventColor = existingEvent.color;
    } else {
      // Generate a new color if it's a new title
      eventColor = generateRandomColor();
    }
  
    if (eventTitle.trim() && startTime && endTime && start < end) {
      if (selectEvent) {
        const updatedEvent = { ...selectEvent, title: eventTitle, start, end, location: eventLocation, color: eventColor };
        const updatedEvents = events.map((event) =>
          event === selectEvent ? updatedEvent : event
        );
        setEvents(updatedEvents);
      } else {
        const newEvent = {
          title: eventTitle,
          start,
          end,
          location: eventLocation,
          color: eventColor,
        };
        setEvents([...events, newEvent]);
      }
      setShowModal(false);
      setEventTitle('');
      setEventLocation('');
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

  const clearAllEvents = () => {
    if (window.confirm('Are you sure you want to clear all events?')) {
      setEvents([]); // Clear events from state
      localStorage.removeItem('events'); // Clear events from localStorage
    }
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const eventPropGetter = (event) => {
    const backgroundColor = event.color || '#3174ad';
    return { style: { backgroundColor } };
  };

  return (
    <div className="calendrier-container">
      <div className="top-bar">
        <h2>Calendrier</h2>
        <div className="admin-info">
          <IconButton className="icon-button">
            <img src={icons.parameter} alt="Settings" />
          </IconButton>
          <div className="admin-details">
            <span className="admin-name">Prénom Admin</span>
            <span className="admin-role">Admin</span>
          </div>
          <img src={icons.services} alt="Avatar" className="admin-avatar" />
        </div>
      </div>
    <div style={{ height: '100vh' }}>
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px' }}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectedEvent}
        views={['month', 'week', 'day', 'agenda']}
        defaultView={Views.MONTH}
        eventPropGetter={eventPropGetter}
        components={{
          event: ({ event }) => (
            <span style={{ color: '#fff' }}>{event.title}</span>
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

      <button 
        className="btn btn-danger clear-btn"
        onClick={clearAllEvents}
      >
        Clear All Events
      </button>

      {showModal && (
        <div
          className="modal"
          style={{
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.5)',
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
                  <label htmlFor="eventLocation" className="form-label">
                    Lieu de l'événement (optionnel):
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eventLocation"
                    value={eventLocation}
                    autoComplete="off"
                    onChange={(e) => setEventLocation(e.target.value)}
                  />
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
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowModal(false);
                    setEventTitle('');
                    setSelectEvent(null);
                    setTitleError(false);
                    setTimeError(false);
                    setTimeRangeError(false);
                  }}
                >
                  Annuler
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveEvent}
                >
                  {selectEvent ? 'Enregistrer les modifications' : 'Enregistrer l\'événement'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default App;
