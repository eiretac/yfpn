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
            <h1>Welcome to Young Europe!</h1>
            <p>
              The European Youth Parliament is one of Europe’s largest youth platforms for civic education,
              intercultural encounters, and the exchange of ideas – run by young people, for young people. 
              Our mission is to inspire and empower a young generation of informed, open-minded, responsible, 
              and active citizens that shape society and drive impact.
            </p>
          </div>
          <div className={styles.heroMap}>
            <img src="/images/europe-map.png" alt="Geometric map of Europe" />
          </div>
        </section>

        {/* Join Us Section */}
        <section className={styles.joinUsSection}>
          <div className={styles.joinUsImage}>
            <img src="/images/join-us-image.png" alt="Group of youth celebrating" />
          </div>
          <div className={styles.joinUsText}>
            <span className={styles.joinLabel}>Join us!</span>
            <h2>The EYP in your country</h2>
            <p>
              The European Youth Parliament, or in short, the EYP, offers its participants 
              a transformational learning experience. Every year thousands of young people 
              join our activities and become a part of one of the largest youth networks in Europe. 
              Find out how to get involved with your national organization here!
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
                <img src="/images/action1.png" alt="Peer and civic education" />
              </div>
              <h3>Peer and Civic Education</h3>
            </div>
            <div className={styles.actionItem} style={{ backgroundColor: '#ffd23f' }}>
              <div className={styles.actionImage}>
                <img src="/images/action2.png" alt="Personal growth" />
              </div>
              <h3>Personal Growth</h3>
            </div>
            <div className={styles.actionItem} style={{ backgroundColor: '#333d4b' }}>
              <div className={styles.actionImage}>
                <img src="/images/action3.png" alt="Open forum for youth" />
              </div>
              <h3>Open Forum for Youth</h3>
            </div>
          </div>
        </section>

        {/* Facts and Figures */}
        <section className={styles.factsSection}>
          <h2>Facts and Figures</h2>
          <div className={styles.factsGrid}>
            <div className={styles.factBox}>
              <img src="/icons/map-icon.png" alt="Map Icon" />
              <p>Represented in 40 countries across Europe</p>
            </div>
            <div className={styles.factBox}>
              <img src="/icons/people-icon.png" alt="People Icon" />
              <p>Around 25,000 young people take part in our events every year</p>
            </div>
            <div className={styles.factBox}>
              <img src="/icons/calendar-icon.png" alt="Calendar Icon" />
              <p>Active for more than 35 years, since 1987</p>
            </div>
            <div className={styles.factBox}>
              <img src="/icons/patronage-icon.png" alt="Patronage Icon" />
              <p>Under the patronage of EU leaders</p>
            </div>
            <div className={styles.factBox}>
              <img src="/icons/events-icon.png" alt="Events Icon" />
              <p>More than 400 events annually across Europe</p>
            </div>
            <div className={styles.factBox}>
              <img src="/icons/alumni-icon.png" alt="Alumni Icon" />
              <p>Alumni network of over 200,000 members</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
