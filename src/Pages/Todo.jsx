import React, { useEffect, useState } from "react";
import list from "../Components/Array";
import { useNavigate, Link } from "react-router-dom";
import "./todo.scss";
import edit from "../assets/edit.svg";
import deleteButton from "../assets/delete.svg";
const Todo = () => {
  let navigate = useNavigate();
  function setID(id, Task) {
    localStorage.setItem("id", id);
    localStorage.setItem("Task", Task);
  }

  //Delete function-for deleting the entry
  function deleted(id) {
    var index = list
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    //deleting the4 entry with index
    list.splice(index, 1);

    //We need to re-render the paghe for getting the result so redirect to the same page
    navigate("/");
  }

  return (
    <>
      <h1>Just Do something ..OK?</h1>
      {list.map((item, id) => {
        const array = (
          <table key={id}>
            <tbody>
              <tr>
                <td className="task">{item.Task}</td>
                <td>
                  <Link to={"/edit"}>
                    <button
                      className="edit"
                      onClick={(e) => setID(item.id, item.Task)}
                    >
                      <img src={edit} alt="" />
                    </button>
                  </Link>
                </td>
                <td>
                  <button className="delete" onClick={(e) => deleted(item.id)}>
                    <img src={deleteButton} alt="" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        );
        return array;
      })}
      <Link to={"/create"}>
        <button className="create">Create</button>
      </Link>
    </>
  );
};

export default Todo;
