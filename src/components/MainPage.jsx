import React, { useState, useEffect } from "react";
import details from "./details";
import StudentsList from "./StudentsList";
import studentPresent from "./studentPresent";
const MainPage = () => {
  const [students, setStudent] = useState(0);
  useEffect(() => {
    checkTime();
  });
  const checkTime = () => {
    studentPresent.length = 0;
    let count = 0;
    details.forEach((ele) => {
      let date = new Date();
      let hr = date.getHours();
      let min = date.getMinutes();
      let inhr = parseInt(ele.checkin.substring(0, 2));
      let inmin = parseInt(ele.checkin.substring(3));
      let outhr = parseInt(ele.checkout.substring(0, 2));
      let outmin = parseInt(ele.checkout.substring(3));
      // console.log(hr, min, inhr, inmin, outhr, outmin);
      if (hr === inhr) {
        if (min >= inmin) {
          count++;
          studentPresent.push(ele);
        }
      } else if (hr === outhr) {
        if (min < outmin) {
          count++;
          studentPresent.push(ele);
        }
      } else if (hr > inhr && hr < outhr) {
        count++;
        studentPresent.push(ele);
      } else setStudent(students + 0);
    });
    console.log(count);
    setStudent(count);
    // console.log(studentPresent);
  };
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <div className="card w-50 my-5">
        <div className="card-body">
          <h5 className="card-title">Students : {students}</h5>
          <p className="card-text">
            Total number of students present in school right now
          </p>
          {flag ? (
            <StudentsList />
          ) : (
            <button className="btn btn-success" onClick={() => setFlag(!flag)}>
              Students List
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
