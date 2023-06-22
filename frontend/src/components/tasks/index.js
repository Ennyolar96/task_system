import React, { useState } from "react";
import axios from "axios";
import { AiFillDelete, AiFillCheckCircle } from "react-icons/ai";
import styles from "../styles/tasks.module.css";
import { BiPlus } from "react-icons/bi";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import TaskForm from "../form";
import { useQuery } from "react-query";

export default function Tasks() {
  const [create, setCreate] = useState(false);

  const { isLoading, error, data } = useQuery("tasks", () =>
    axios("http://localhost:5000/api/", {
      // Enable caching for 5 minutes
      cacheTime: 5 * 60 * 1000,
    })
  );

  const output = data?.data.data;

  const deleteHandler = async (id) => {
    const endpoint = `http://localhost:5000/api/${id}`;
    const req = await axios.delete(endpoint);
    console.log(req);
  };

  const MarkCompleted = async (id) => {
    const endpoint = `http://localhost:5000/api/${id}`;
    const req = await axios.patch(endpoint);
    console.log(req);
    // console.log(res);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="container">
        <div className={styles.title}>
          <h4 className="h4 fw-bold">TODAY'S TASKS</h4>
        </div>
        {data && (
          <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1">
            {output.map(({ id, title, status }) => (
              <div className="col" key={id}>
                <div className={`d-flex ${styles.task_container}`}>
                  <div>
                    <div className={`d-flex ${styles.first}`}>
                      <div className={styles.button}>
                        <button onClick={() => MarkCompleted(id)}>
                          {status === "Completed" ? (
                            <AiFillCheckCircle />
                          ) : (
                            <MdOutlineRadioButtonUnchecked />
                          )}
                        </button>
                      </div>
                      <div className={`ms-1 ${styles.button}`}>
                        <button onClick={() => deleteHandler(id)}>
                          <AiFillDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="ms-2">
                    <p
                      className={
                        status === "Completed"
                          ? "text-decoration-line-through p"
                          : "p fw-bold"
                      }
                    >
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {create && <TaskForm />}
      <div>
        <div className={styles.addTask_btn}>
          <button onClick={() => setCreate(!create)}>
            {create === true ? <FaTimes size={30} /> : <BiPlus size={30} />}
          </button>
        </div>
      </div>
    </>
  );
}
