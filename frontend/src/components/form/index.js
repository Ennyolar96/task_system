import React, { useState } from "react";
import styles from "../styles/form.module.css";
import axios from "axios";

export default function TaskForm() {
  const [tasks, setTasks] = useState({});

  const ChangeHandler = (e) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { title, category } = tasks;

    if (title && category !== "") {
      const req = await axios.post(`http://localhost:5000/api/`, tasks);
      console.log(req.data);
      return;
    }
    console.log("go back");
  };

  return (
    <>
      <div className={`${styles.form_container}`}>
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className="form-group mt-2">
              <input
                type="text"
                name="title"
                id=""
                placeholder="Enter Your tasks"
                onChange={ChangeHandler}
              />
            </div>

            <div className="form-group mt-2">
              <select name="category" id="" onChange={ChangeHandler}>
                <option value="">Category</option>
                <option value="business">Business</option>
                <option value="Personal">Personal</option>
              </select>
            </div>

            <div className="form-group mt-2">
              <button className="w-100">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
