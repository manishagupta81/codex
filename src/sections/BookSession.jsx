import React from 'react';
import CalendlyEmbed from '../components/CalendlyEmbed.jsx';
import useCalendlyEventTypes from '../hooks/useCalendlyEventTypes.js';

const renderStatusMessage = (status, error) => {
  if (status === 'loading') {
    return <p className="calendly-status">Loading Calendly availability…</p>;
  }

  if (status === 'missing-api-key') {
    return (
      <p className="calendly-status calendly-status--warning">
        Add <code>VITE_CALENDLY_API_KEY</code> to your <code>.env</code> file to fetch live event
        types from Calendly.
      </p>
    );
  }

  if (status === 'missing-owner-uri') {
    return (
      <p className="calendly-status calendly-status--warning">
        Add <code>VITE_CALENDLY_OWNER_URI</code> to your <code>.env</code> file so we know which
        Calendly owner to query.
      </p>
    );
  }

  if (status === 'error') {
    return (
      <p className="calendly-status calendly-status--error">
        We couldn&apos;t load event types from Calendly right now: {error}
      </p>
    );
  }

  return null;
};

const BookSession = () => {
  const { status, eventTypes, error } = useCalendlyEventTypes();

  return (
    <section className="section" id="book-session">
      <div className="container">
        <h2>Book a Session</h2>
        <p className="section__subtitle">
          Schedule a 30-minute homework help session without leaving the site.
        </p>
        <CalendlyEmbed />
        {renderStatusMessage(status, error)}
        {status === 'ready' && eventTypes.length > 0 && (
          <div className="calendly-event-types">
            <h3>Available Session Types</h3>
            <ul>
              {eventTypes.map((eventType) => (
                <li key={eventType.uri}>
                  <strong>{eventType.name}</strong> · {eventType.duration} minutes
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookSession;
