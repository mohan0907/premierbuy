import styles from "./styles.module.scss";
import React, {useState} from 'react'
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import UserMenu from "./UserMenu";

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);
  return (
        <div className={styles.top}>
            <div className={styles.top__container}>
              <div></div>
              <ul className={styles.top__list}>
                  <li className={styles.li}>
                    <img src="https://media.istockphoto.com/id/177387875/photo/indian-flag.jpg?s=2048x2048&w=is&k=20&c=1zuQKoppFRPgnTkZ4u2HX49qsOmHhLRKmWJPO5_vHuU=" alt="" />
                    <span>India / Rs</span>
                  </li>
                  <li className={styles.li}>
                    <MdSecurity />
                    <span>Buyer Protection</span>
                  </li>
                  <li className={styles.li}>
                    <span>Customer Service</span>
                  </li>
                  <li className={styles.li}>
                    <span>Help</span>
                  </li>
                  <li className={styles.li}
                    onMouseOver={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}
                  >
                    { loggedIn ? (
                    <li className={styles.li}>
                      <div className={styles.flex}>
                        <img src="https://img.freepik.com/premium-vector/person-avatar-icon-design-vector-multiple-use-vector-illustration_625349-280.jpg?w=740" alt="" />
                        <span>Mohan</span>
                        <RiArrowDropDownFill />
                      </div>
                    </li>
                    ) : (
                    <li className={styles.li}>
                      <div className={styles.flex}>
                        <RiAccountPinCircleLine />
                        <span>Account</span>
                        <RiArrowDropDownFill />
                      </div>
                    </li>
                    )}
                    {visible && <UserMenu session={loggedIn} />}
                  </li>                    
                </ul>
            </div>
        </div>
  )
}
