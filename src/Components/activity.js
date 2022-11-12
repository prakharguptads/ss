import React from "react";
import "./act.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Activity(props) {
    const { index, deleteActivity, handleServiceChange, value } = props;
    return (
        <div className="services">
            <div className="first-division align-item-centre">
                <div className="form-group col-md-3 col-md-5 st_col">
                    <label htmlFor="x">
                        <strong>Name of the Activity </strong>
                    </label>
                    <input
                        name="title"
                        type="text"
                        id="service"
                        className="form-control"
                        // value={value}
                        onChange={(e) => handleServiceChange(e, index)}
                        required
                    />
                </div>

                <div className="form-group col-md-3 col-md-5 st_col int">
                    <div>
                        <label htmlFor="datetime-local">
                            <strong> Time and Date</strong>
                        </label>
                        <input
                            name="startDate"
                            timer="time"
                            type="datetime-local"
                            className="form-control "
                            id="datetime-local"
                            onChange={(e) => handleServiceChange(e, index)}
                        />
                    </div>
                    <div className="duration">
                        <label htmlFor="time">
                            <strong>Duration Time</strong>
                        </label>
                        <input
                            timer="time"
                            type="datetime-local"
                            name="endDate"
                            className="form-control"
                            id="datetime-local"
                            onChange={(e) => handleServiceChange(e, index)}
                        />
                    </div>
                </div>


                <button
                    type="button"
                    onClick={(e) => deleteActivity(e, index)}
                    className="remove">
                    Delete
                </button>

            </div>
        </div>
    );
}