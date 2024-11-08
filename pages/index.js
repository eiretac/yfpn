// pages/index.js
import styles from '../styles/homepage.module.css';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>Youth Forum</div>
        <nav className={styles.navContainer}>
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/news">News</a>
          <a href="/initiatives">Initiatives</a>
          <a href="/about">About</a>
          <a href="/join">Join Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroText}>
          <h1>Empowering </h1>
          <p>Foreign Policy Is Amazing don't you think!</p>
          <button className={styles.ctaButton}>Get Involved</button>
        </div>
      </section>

      {/* Events Section */}
      <section className={styles.eventsSection}>
        <h2>Upcoming Events</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <h3>i dont know</h3>
            <p>yeah this event is really cool if you ask me</p>
            <button>Learn More</button>
          </div>
          <div className={styles.gridItem}>
            <h3>i dont know</h3>
            <p>yeah this event is really cool if you ask me.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className={styles.newsSection}>
        <h2>Latest News</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <h3>Youth in Politics</h3>
            <p>European youth leaders engage in shaping new policies...</p>
            <button>Read More</button>
          </div>
          <div className={styles.gridItem}>
            <h3>Empowering Youth in the Digital Age</h3>
            <p>How digital tools are transforming youth engagement...</p>
            <button>Read More</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
