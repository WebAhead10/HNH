import { Today } from '@material-ui/icons';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Schedule() {
  const [date, setDate] = useState(new Date());
  console.log(date);
  return (
    <div>
      <Calendar minDate={new Date()} style={{margin:'10px',color:'black'}}
        onChange={setDate}
        value={date}
      />
    </div>
  );
}

export default Schedule
