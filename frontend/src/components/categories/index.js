import React from "react";
import styles from "../styles/categories.module.css";

const Categories = () => {
  return (
    <div className="container">
      <div className="my-3">
        <h5 className=" h5 fw-bold">CATEGORIES</h5>
      </div>
      <div className={styles.cate_card_flex}>
        <div className={`me-2 ${styles.cate_card}`}>
          <h2 className={styles.cate_cate}>
            <span>40 tasks</span> <br />
            Business
          </h2>
          <progress value={40} max={100} />
        </div>

        <div className={styles.cate_card}>
          <h2 className={styles.cate_cate}>
            <span>36 tasks</span> <br />
            Personal
          </h2>
          <progress value={40} max={100} />
        </div>

        {/* <div className="categ_card">
          <div className="categ_content">
            <p className="categ_tasks">16 tasks</p>
            <h2 className="categ_categ">Personal</h2>
            <div class="categ_progressbar2">
              <div className=""></div>
            </div>
            <p className="categ_comp">You have completed 7 tasks</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
