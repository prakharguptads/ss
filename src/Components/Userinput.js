import React, { useState } from "react";
import { Activity } from "./activity";
import "./style.css";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Query } from "./Query";
function Userinput() {

  const [serviceList, setServiceList] = useState([]);
  const [eventName, setEventName] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
  const [startDate, setStartDate] = useState("");
  const [activityName, setActivityName] = useState("football");

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (e, index) => {
    e.preventDefault();
    let modArray = serviceList.filter((val, idx) => {
      return idx !== index;
    });
    setServiceList([...modArray]);
  };

  const handleChange1 = (event) => {
    setEventName(event.target.value)
    console.log(eventName)
  }

  const handleChange2 = (event) => {
    setNoOfDays(event.target.value)
    console.log(noOfDays)
  }

  const handleChange3 = (event) => {
    setStartDate(event.target.value)
    console.log(startDate)
  }

  const handleServiceAdd = () => {
    setServiceList([...serviceList, {}]);
  };

  const myFunction = (e) => {
    e.preventDefault();
    window.location = "https://www.timeanddate.com/calendar/";
  };

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    console.log(eventName,
      activityName,
      noOfDays,
      startDate, serviceList);
    const configuration = {
      method: "post",
      url: "http://localhost:5000/tasks/",
      data: {
        eventName,
        activityName,
        noOfDays,
        startDate,
        serviceList,
      },
    };

    axios(configuration)
      .then((result) => {

      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <div className="formbody">
      <h2>Schedule Creator</h2>
      <hr></hr>
      <div className="form-row1">
        <div className="form-group col-md-5 div2">
          <label htmlFor="inputEmail4">
            <strong>Event Name</strong>
          </label>
          <br />
          <input
            type="text"
            className="form-control"
            id="event_name"
            placeholder="Enter event Name" onChange={handleChange1} />
        </div>
        <div className="form-row">
          <div className="form-group col-md-5 div2">
            <label htmlFor="inputEmail4">
              <strong>No of Days</strong>
            </label>
            <br />
            <input
              type="number"
              className="form-control"
              id="no_of_days"
              placeholder="0" onChange={handleChange2} />
          </div>
        </div>
        <div className="form-group col-md-5 st_col">
          <label htmlFor="dt">
            <strong>Start date:</strong>
          </label>
          <input type="date" className="form-control" id="date" onChange={handleChange3}></input>
        </div>
        <br />
        <h5> Add Your Activities...</h5>
        <form className="App" autoComplete="off">
          <div className="form-field">
            {serviceList.map((singleService, index) => (
              <Activity
                key={index}
                index={index}
                value={singleService.service}
                deleteActivity={handleServiceRemove}
                handleServiceChange={handleServiceChange} />
            ))}
            <button
              type="button"
              onClick={handleServiceAdd}
              className="buttonAdd">
              Add
            </button>
          </div>
        </form>

        <br />
        <button
          type="button"
          className="btn btn-primary submitBT"
          // data-toggle="modal"
          // data-target="#exampleModalCenter"
          onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
        {/* <form className="App" autoComplete="off">
          <div className="form-field">
            {serviceList.map((singleService, index) => (
              <Query
                serviceList={serviceList} />
            ))}
            <button
              type="button"
              onClick={handleServiceAdd}
              className="buttonAdd">
              Add
            </button>
          </div>
        </form> */}
        <div className="title"> <a className="btn btn-primary submitBT" type="button" href="/query">Schedule</a></div>
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content pop">
            <div className="modal-header pop">
              <h5 className="modal-title pop" id="exampleModalLongTitle">
                Thank You!!!
              </h5>
              <button
                type="button"
                className="close pop"
                data-dismiss="modal"
                aria-label="Close">
                <span className="pop" aria-hidden="true">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body pop">
              Do you want to schedule events ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal">
                NO
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={myFunction}>
                YES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userinput;