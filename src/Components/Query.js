import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2022-11-11';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

export function Query(props) {
  const [query, setQuery] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/getquery/").then(res => {
      if (res.ok) {
        // console.log(res);
        return res.json()
      }
    }).then(jsonRes => setQuery(jsonRes[jsonRes.length - 1].activity));
  })
  const [qres, setqres] = useState("");
  const handleChange2 = (event) => {
    setqres(event.target.value)
  }
  console.log(query, "hello")
  return (
    <Paper>
      <Scheduler
        data={query}
      >
        <ViewState
          currentDate={currentDate}
        />
        <DayView
          startDayHour={9}
          endDayHour={14}
        />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}