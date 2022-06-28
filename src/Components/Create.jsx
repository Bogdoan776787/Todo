import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import list from "./Array";
import "../Components/style.scss";
import { Link } from "react-router-dom";
const Create = () => {
  //Making usestate for setting and fetching a value in jsx
  const [task, setTask] = useState([]);

  useEffect(() => {
    let localList = localStorage.getItem("todoList");
    list = JSON.parse(localList);
  }, []);
  //Using useNavigation for redirecting to pages
  let navigate = useNavigate();

  //Function for creating a post/entry
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent reload

    const ids = uuid(); //cretaing unique Id
    let uni = ids.slice(0, 8); //slicing unique id

    //Fetching a value from useState and pushing to javascript object
    let a = task;
    list.push({ id: uni, Task: a });

    //Redirecting to home page after creating done
    navigate("/");
  };
  return (
    <>
      <h1>Here, mein Freund, you can create the task</h1>
      <form>
        {/* Fetching a value from input textfield in a setTask using useState */}
        <label>
          <input
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

export default Create;
