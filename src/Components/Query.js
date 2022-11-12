import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import './query.css';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  Appointments,
  TodayButton,
  MonthView,
  DayView,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';


const schedulerData = [
  { startDate: '2022-11-11T09:45', endDate: '2022-11-11T11:00', title: 'Meeting' },
  { startDate: '2022-11-11T12:00', endDate: '2022-11-11T13:30', title: 'Go to a gym' },
];

export function Query(props) {
  const [currentDate, setCurrentDate] = useState('2022-11-11');
  const [currentViewName, setCurrentViewName] = useState('work-week');
  const currentDateChange = (currentDate) => { setCurrentDate(currentDate); };
  const currentViewNameChange = (currentViewName) => {
    setCurrentViewName(currentViewName);
  };
  const Appointment = ({
    children, style, ...restProps
  }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: '#FFC107',
        borderRadius: '8px',
      }}
    >
      {children}
    </Appointments.Appointment>
  );
  const [query, setQuery] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/getquery/").then(res => {
      if (res.ok) {
        // console.log(res);
        return res.json()
      }
    }).then(jsonRes => setQuery(jsonRes[jsonRes.length - 1].activity));
  })
  console.log(query, "hello")
  return (
    <div className="pp">
      <h1 className="heading">Scheduler</h1>
      <Paper>
        <Scheduler
          data={query}
        >
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={currentDateChange}
            currentViewName={currentViewName}
            onCurrentViewNameChange={currentViewNameChange}
          />
          <WeekView
            startDayHour={0}
            endDayHour={24}
          />
          <WeekView
            name="work-week"
            displayName="Work Week"
            excludedDays={[0, 6]}
            startDayHour={0}
            endDayHour={24}
          />
          <MonthView />
          <DayView />
          <AllDayPanel />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <Appointments appointmentComponent={Appointment} />
        </Scheduler>
      </Paper>
    </div>
  );
}