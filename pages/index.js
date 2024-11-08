// pages/index.js
import styles from '../styles/homepage.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroText}>
            <h1>Join the Global Youth Network</h1>
            <p>Empowering youth to shape the future of international policy.</p>
            <button className={styles.ctaButton}>Become a Member</button>
          </div>
          <div className={styles.heroMap}>
            <img src="https://example.com/world-map.png" alt="World map" />
          </div>
        </section>

        {/* Join Us Section */}
        <section className={styles.joinUsSection}>
          <h2>Why Join Us?</h2>
          <p>Be part of a network that empowers youth to make a difference in global discussions on policy, environment, and human rights.</p>
        </section>

        {/* YFPN in Action */}
        <section className={styles.yfpnSection}>
          <h2>YFPN in Action</h2>
          <div className={styles.actionGrid}>
            <div className={styles.actionItem}>
              <h3>Workshops</h3>
              <p>Interactive workshops on pressing global issues.</p>
            </div>
            <div className={styles.actionItem}>
              <h3>Debates</h3>
              <p>Engaging debates on policy and social change.</p>
            </div>
            <div className={styles.actionItem}>
              <h3>Projects</h3>
              <p>Collaborative projects that make an impact.</p>
            </div>
          </div>
        </section>

        {/* Facts and Figures */}
        <section className={styles.factsSection}>
          <h2>Facts and Figures</h2>
          <div className={styles.factsGrid}>
            <div className={styles.factBox}>2000+ Members</div>
            <div className={styles.factBox}>30+ Countries</div>
            <div className={styles.factBox}>100+ Events Annually</div>
            <div className={styles.factBox}>15 Ongoing Projects</div>
            <div className={styles.factBox}>25 Partnerships</div>
            <div className={styles.factBox}>50+ Workshops Held</div>
            <div className={styles.factBox}>Global Impact</div>
            <div className={styles.factBox}>Youth Leaders</div>
            <div className={styles.factBox}>Policy Influence</div>
          </div>
        </section>

        {/* News Section */}
        <section className={styles.newsSection}>
          <h2>Latest News</h2>
          <div className={styles.newsGrid}>
            <div className={styles.newsItem}>
              <h3>Global Youth Summit 2024</h3>
              <p>Bringing youth voices together for change.</p>
              <button>Read More</button>
            </div>
            <div className={styles.newsItem}>
              <h3>Climate Change Initiatives</h3>
              <p>Youth-driven solutions for the environment.</p>
              <button>Read More</button>
            </div>
          </div>
        </section>

        {/* Journal Section */}
        <section className={styles.journalSection}>
          <h2>Latest Journal Articles</h2>
          <div className={styles.journalGrid}>
            <div className={styles.journalItem}>
              <h3>Insights into Youth Policy</h3>
              <p>How youth influence policy decisions globally.</p>
              <button>Read Full Article</button>
            </div>
            <div className={styles.journalItem}>
              <h3>The Future of Foreign Aid</h3>
              <p>Exploring youth perspectives on international aid.</p>
              <button>Read Full Article</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
