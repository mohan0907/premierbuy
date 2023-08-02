import Copyright from "./Copyright";
import styles from "./styles.module.scss";
import Links from "./Links";
import NewsLetter from "./NewsLetter";
import Socials from './Socials';
import Payment from "./Payment";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
        <Payment/>
        <NewsLetter/>      
        <Copyright />
      </div>
    </footer>
  );
}
