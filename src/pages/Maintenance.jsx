import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../index.css'; // Make sure this imports the calendar overrides

const Maintenance = () => {
  const [date, setDate] = useState(new Date());

  const handleBook = () => {
    alert(`Tank cleaning booked successfully for ${date.toDateString()}!`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '24px 0' }}>
      
      <div className="glass-panel" style={{ padding: '40px', maxWidth: '500px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>Tank Maintenance Booking</h2>
          <p style={{ color: 'var(--color-white-muted)' }}>Secure steady, predictable cleanings from our experts. Select a date below.</p>
        </div>

        <div style={{ width: '100%', background: 'rgba(0,0,0,0.2)', padding: '16px', borderRadius: '16px' }}>
          <Calendar 
            onChange={setDate} 
            value={date} 
            className="custom-calendar"
            minDate={new Date()}
          />
        </div>

        <div style={{ width: '100%', textAlign: 'center' }}>
          <p style={{ marginBottom: '16px', fontSize: '1.1rem' }}>Selected Date: <strong style={{ color: 'var(--color-cyan)' }}>{date.toDateString()}</strong></p>
          <button className="btn btn-orange" style={{ width: '100%', fontSize: '1.2rem', padding: '16px' }} onClick={handleBook}>
            Confirm Booking
          </button>
        </div>
      </div>

    </div>
  );
};

export default Maintenance;
