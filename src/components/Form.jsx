import React, { useState } from "react";
import details from "./details";
import MainPage from "./MainPage";
const Form = () => {
  const [data, setData] = useState({
    name: "",
    rollno: "",
    checkin: "",
    checkout: "",
  });
  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    details.push(data);
    console.log(details);
    setData({ name: "", rollno: "", checkin: "", checkout: "" });
    alert("Details submitted");
  };
  return (
    <div className="details-form my-3">
      <form>
        <div className="mb-3">
          <label htmlFor="nameinput" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={data.name}
            className="form-control"
            id="nameinput"
            onChange={change}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rollno" className="form-label" onChange={change}>
            Roll No.
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Roll No."
            id="rollno"
            name="rollno"
            value={data.rollno}
            onChange={change}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="checkin">Checkin Time: </label>
          <input
            type="time"
            id="checkin"
            className="form-control"
            name="checkin"
            value={data.checkin}
            onChange={change}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="checkout">Checkout Time: </label>
          <input
            type="time"
            id="checkout"
            className="form-control"
            name="checkout"
            value={data.checkout}
            onChange={change}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <MainPage />
    </div>
  );
};

export default Form;
