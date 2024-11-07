// pages/index.js
import Layout from '../components/Layout';
import styles from '../styles/hompeage.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={styles.heroSection}>
        <img src="/images/hero-image.jpg" alt="Youth engagement in global issues" />
        <div className={styles.heroText}>
          <h1>Join the Global Conversation</h1>
          <p>Be part of a dynamic network shaping the future of foreign policy.</p>
          <button className="cta-button">Become a Member</button>
          <button className="cta-button">Read Latest Articles</button>
        </div>
      </section>

      <section className={styles.newsSection}>
        <h2>Latest News</h2>
        <div className="grid-container">
          <div className="grid-item">
            <h3>Global Youth Lead Climate Talks</h3>
            <p>Young leaders are shaping the future of climate policy...</p>
            <button>Read More</button>
          </div>
          <div className="grid-item">
            <h3>Youth Discuss Role in UN Diplomacy</h3>
            <p>How the youth are influencing international relations...</p>
            <button>Read More</button>
          </div>
        </div>
      </section>

      <section className={styles.journalsSection}>
        <h2>Latest Journals</h2>
        <div className="grid-container">
          <div className="grid-item">
            <h3>How Youth Are Impacting Global Trade</h3>
            <p>Young minds are challenging the status quo in international trade...</p>
            <button>Read Full Article</button>
          </div>
          <div className="grid-item">
            <h3>Redefining Diplomacy: A Youth Perspective</h3>
            <p>The next generation is pushing new boundaries in diplomacy...</p>
            <button>Read Full Article</button>
          </div>
          <div className="grid-item">
            <h3>The Future of Foreign Aid: Youth Leadership</h3>
            <p>Exploring how youth leaders are shaping the future of foreign aid...</p>
            <button>Read Full Article</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
