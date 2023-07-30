import styles from "./styles.module.scss";
import React from 'react'
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";

export default function Top() {
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
                    <li className={styles.li}>
                      <BsSuitHeart />
                      <Link href="/profile/whishlist">
                        <span>Whishlist</span>
                      </Link>
                    </li>
                    <li className={styles.li}>
                      <div className={styles.flex}>
                        <RiAccountPinCircleLine />
                        <span>Account</span>
                        <RiArrowDropDownFill />
                      </div>
                    </li>
                </ul>
            </div>
        </div>
  )
}
