// pages/index.js
import styles from '../styles/homepage.module.css';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.navContainer}>
          <nav>
            <a href="/">Home</a>
            <a href="/journal">Journal</a>
            <a href="/team">Team</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroText}>
          <h1>Join the Global Conversation</h1>
          <p>Be part of a dynamic network shaping the future of foreign policy.</p>
          <button className={styles.ctaButton}>Become a Member</button>
          <button className={styles.ctaButton}>Read Latest Articles</button>
        </div>
        <div className={styles.heroMap}>
          <img src="https://cdn.vectorstock.com/i/preview-1x/93/42/hex-tile-eurasia-map-vector-21049342.jpg" alt="Map of Europe and Asia" />
        </div>
      </section>

      {/* News Section */}
      <section className={styles.newsSection}>
        <h2>Latest News</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <img src="https://example.com/news-image1.jpg" alt="News Image 1" />
            <div className={styles.gridItemContent}>
              <h3>Global Youth Lead Climate Talks</h3>
              <p>Young leaders are shaping the future of climate policy...</p>
              <a href="/news1" className={styles.ctaButton}>Read More</a>
            </div>
          </div>
          <div className={styles.gridItem}>
            <img src="https://example.com/news-image2.jpg" alt="News Image 2" />
            <div className={styles.gridItemContent}>
              <h3>Youth Discuss Role in UN Diplomacy</h3>
              <p>How the youth are influencing international relations...</p>
              <a href="/news2" className={styles.ctaButton}>Read More</a>
            </div>
          </div>
        </div>
        <div className={styles.mapSection}>
          <img src="https://cdn3.vectorstock.com/i/1000x1000/84/57/hex-tile-africa-map-vector-20858457.jpg" alt="Map of Africa" />
        </div>
      </section>

      {/* Events Section */}
      <section className={styles.eventsSection}>
        <h2>Upcoming Events</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <img src="https://example.com/event-image1.jpg" alt="Event Image 1" />
            <div className={styles.gridItemContent}>
              <h3>Global Youth Summit</h3>
              <p>Discuss and shape the future of policy with young leaders from around the world...</p>
              <a href="/event1" className={styles.ctaButton}>Learn More</a>
            </div>
          </div>
          <div className={styles.gridItem}>
            <img src="https://example.com/event-image2.jpg" alt="Event Image 2" />
            <div className={styles.gridItemContent}>
              <h3>Youth in Action Conference</h3>
              <p>Join young minds from North and South America in driving change...</p>
              <a href="/event2" className={styles.ctaButton}>Learn More</a>
            </div>
          </div>
        </div>
        <div className={styles.mapSection}>
          <img src=".public\yOUTH_FOREIGN_POLICY_NETWORK_1.png" alt="Map of North and South America" />
        </div>
      </section>

      <Footer />
    </>
  );
}
