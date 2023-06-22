import React, { useState } from "react";

import {
  IoMdArrowDropdownCircle,
  IoIosNotificationsOutline,
  IoIosSearch,
  IoIosArrowDropleft,
} from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="navsec">
      {/* <nav className='display_flex'> */}
      <div className="display_flex">
        <button className="display_btn">
          <div className="nav_menu">Menu</div>
          <div className="dropdown_icon">
            <IoMdArrowDropdownCircle />
          </div>
          <div className="menu_icon" onClick={handleNav}>
            <AiOutlineMenu size={20} />
          </div>
        </button>
        <div
          className={
            nav
              ? "dropdown_content_mobile fixed left-0 top-0 w-[100%] h-full bg-[#271B71] pt-7 ease-in-out duration-500 md:hidden"
              : "ease-in-out duration-500 w-[-100%] hidden"
          }
        >
          <div className=" dropdown_content_mobile_handle flex items-center justify-between px-7 pt-7">
            <div onClick={handleNav}>
              {nav ? (
                <IoIosArrowDropleft size={30} className="close_icon" />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="drpdwn_cntnt_mbl">
            <a href="/">Profile</a>
            <a href="/">Template</a>
            <a href="/">Categories</a>
            <a href="/">Analytics</a>
            <a href="/">Charts</a>
          </div>
        </div>
        <div className="dropdown-content">
          <a href="/">Profile</a>
          <a href="/">Template</a>
          <a href="/">Categories</a>
          <a href="/">Analytics</a>
        </div>
      </div>
      <div className="display_flex2">
        <div className="search_b">
          <IoIosSearch className="search_icon" />
          <div className="search_text">
            <input placeholder="Search" type="search" class="input" />
          </div>
        </div>
        <div className="notify_b">
          <div className="notify_text">Notifications</div>
          <IoIosNotificationsOutline size={25} className="notify_icon" />
        </div>
      </div>
      {/* </nav> */}
    </div>
  );
}
