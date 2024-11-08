// components/Header.js
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>YFPN</div>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/join">Join Us</a>
        <a href="/about">About</a>
        <a href="/news">News</a>
        <a href="/journal">Journal</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
