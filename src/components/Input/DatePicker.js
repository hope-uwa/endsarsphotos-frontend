import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const DatePickers = ({variant}) => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState ( 
    new Date ('2014-08-18T21:11:54')
  );

  const handleDateChange = date => {
    setSelectedDate (date);
  };

  return (
    <MuiPickersUtilsProvider style={{width: '100%'}} utils={DateFnsUtils}>
      {variant === 'date' &&
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          // label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />}
      {variant === 'time' &&
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          // label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />}

    </MuiPickersUtilsProvider>
  );
};
