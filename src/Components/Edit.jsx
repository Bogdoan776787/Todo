import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import list from "./Array";
import "./style.scss";
const Edit = () => {
  //useState has been used in order to set and get values from the jsx
  const [task, setTask] = useState("");
  const [id, setId] = useState("");

  // used for navigation with logic in javascript

  let navigate = useNavigate();

  //getting an index of an entry with an id
  var index = list
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  //function for handling the edit and puishing changes of editing /updating
  const handleSubmit = (e) => {
    e.preventDefault(); //preventing from reload

    let a = list[index]; //getting  an index of an array
    //putting the value from the input textfield and replacing it from
    //existing for updation
    a.Task = task;
    //redirect to main page
    navigate("/");
  };
  //UseEffect take care that page will be rendered onlu once

  useEffect(() => {
    setTask(localStorage.getItem("Task"));
    setId(localStorage.getItem("id"));
  }, []);
  return (
    <>
      <h1>here, you can edit the selected task...go ahead</h1>
      <form>
        {/* Fetching a value from input textfield in a setTask using useState */}
        <label>
          <input
            value={task}
            type="text"
            onChange={(e) => setTask(e.target.value)}
            placeholder=" Enter Task"
            required
          />
        </label>
      </form>
      {/* Handing a onClick event in button for firing a function */}
      <button
        className="submitButton"
        onClick={(e) => handleSubmit(e)}
        type="submit"
      >
        Submit
      </button>
      <Link to="/">
        <button className="homeButton">Home</button>
      </Link>
    </>
  );
};

export default Edit;
