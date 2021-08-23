import { Today } from '@material-ui/icons';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Schedule({ jobDate, setJobDate, dateCahnged }) {
  return (
    <div>
      <Calendar minDate={new Date()} style={{ margin: '10px', color: 'black' }}
        onChange={() => {
          setJobDate();
          dateCahnged;
        }
        }
        value={jobDate}
      />
    </div>
  );
}

export default Schedule
