import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import styles from "../styles/nav.module.css";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="my-2">
          <div className={`d-flex ${styles.nav_icon}`}>
            <div>
              <AiOutlineMenu size={20} />
            </div>
            <div className="ms-auto">
              <IoIosSearch className="me-1" size={25} />
              <IoIosNotificationsOutline size={25} className="notify_icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
