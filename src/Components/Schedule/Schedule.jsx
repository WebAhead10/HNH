import { Today } from '@material-ui/icons';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Schedule({ jobDate, setJobDate, dateCahnged ,setJobTime}) {
  return (
    <div>
      <Calendar minDate={new Date()} style={{ margin: '10px', color: 'black' }}
        onChange={(data) => {
          setJobDate(data);
          dateCahnged;
          setJobTime("HH:MM");
          }
        }
        value={jobDate}
      />
    </div>
  );
}

export default Schedule
