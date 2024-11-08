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
            <h1>Welcome to YFPN!</h1>
            <p>
            We believe in empowering young people to understand and engage with global issues through education, advocacy, and collaboration.
            </p>
          </div>
          <div className={styles.heroMap}>
            <img src="../public/world.png" alt="Geometric map of Europe" />
          </div>
        </section>

        {/* Join Us Section */}
        <section className={styles.joinUsSection}>
          <div className={styles.joinUsImage}>
            <img src="../public/hero.png" alt="yeah cool" />
          </div>
          <div className={styles.joinUsText}>
            <span className={styles.joinLabel}>Join us!</span>
            <h2>Who Are We?</h2>
            <p>
              i dont know jamie needs to write this bit lol
            </p>
            <button className={styles.readMoreButton}>Read more</button>
          </div>
        </section>


        {/* YFPN in Action */}
        <section className={styles.yfpnSection}>
          <h2>YFPN in Action</h2>
          <div className={styles.actionGrid}>
            <div className={styles.actionItem} style={{ backgroundColor: '#f76c6c' }}>
              <div className={styles.actionImage}>
                <img src="/images/action1.png" alt="Yeah" />
              </div>
              <h3>Yeah</h3>
            </div>
            <div className={styles.actionItem} style={{ backgroundColor: '#ffd23f' }}>
              <div className={styles.actionImage}>
                <img src="/images/action2.png" alt="Yeah" />
              </div>
              <h3>Yeah</h3>
            </div>
            <div className={styles.actionItem} style={{ backgroundColor: '#333d4b' }}>
              <div className={styles.actionImage}>
                <img src="/images/action3.png" alt="Yeah" />
              </div>
              <h3>Yeah</h3>
            </div>
          </div>
        </section>

        {/* Facts and Figures */}
        <section className={styles.factsSection}>
          <h2>Facts and Figures</h2>
          <div className={styles.factsGrid}>
            <div className={styles.factBox}>
              <img src="/icons/map-icon.png" alt="Map Icon" />
              <p>Represented in x countries across Europe</p>
            </div>
            <div className={styles.factBox}>
              <img src="/icons/people-icon.png" alt="People Icon" />
              <p>Around x young people take part in our events every year</p>
            </div>
            <div className={styles.factBox}>
              <img src="/icons/calendar-icon.png" alt="Calendar Icon" />
              <p>Founded in 2024?</p>
            </div>
            <div className={styles.factBox}>
              <img src="/icons/patronage-icon.png" alt="Patronage Icon" />
              <p>Founded by Youth</p>
            </div>
            <div className={styles.factBox}>
              <img src="/icons/events-icon.png" alt="Events Icon" />
              <p>cool</p>
            </div>
            <div className={styles.factBox}>
              <img src="/icons/alumni-icon.png" alt="Alumni Icon" />
              <p>yeah idk?</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
