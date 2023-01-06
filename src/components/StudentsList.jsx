import React from "react";
import studentPresent from "./studentPresent";
const StudentsList = () => {
  return (
    <>
      {studentPresent.map((ele, index) => {
        return (
          <ul>
            <li>{ele.name}</li>
          </ul>
        );
      })}
    </>
  );
};

export default StudentsList;
