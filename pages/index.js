import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/homepage.module.css'; // Import the CSS module
import Script from 'next/script'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zop Studios</title>
        <meta name="description" content="Zop Studios." />
        <meta property="og:title" content="Zop Studios" />
        <meta property="og:description" content="Welcome to Zop Studios, where we create stunning digital experiences." />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta name="color" content="#ffca2b" />
        <Script src="/javascript/homepage.js" />
      </Head>
      <Header />
      <main>
        {/* Hero and About Us Section */}
        <section id="home" className={styles['hero-about']}>
          <div className={styles['hero-content']}>
            <h2>Welcome to Zop Studios</h2>
            <p>I don't know what we do exactly.</p>
            <a href="#services" className={`${styles.btn} ${styles.secondary}`}>Our Services</a>
          </div>
          
          <div id="about-us" className={styles['about-us-content']}>
            <h2>Who We Are</h2>
            <div className={styles['description-container']}>
              <div className={`${styles.description} ${styles.active}`}>Jagzowp.</div>
              <div className={`${styles.description} ${styles.hidden}`}>Has.</div>
              <div className={`${styles.description} ${styles.hidden}`}>A Small.</div>
              <div className={`${styles.description} ${styles.hidden}`}>Penis.</div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.projects}>
          <h2>Our Projects</h2>
          <div className={styles['project-list']}>
            <div className={styles['project-item']}>
              <img src="https://example.com/project1.jpg" alt="Republicca Italiana" />
              <h3>Repubblica Italiana</h3>
              <p>A brief description of Project One.</p>
              <a href="https://italia.zopstudios.net/" className={`${styles.btn} ${styles.secondary}`}>Use Now</a>
            </div>
            <div className={styles['project-item']}>
              <img src="https://example.com/project2.jpg" alt="United Nations" />
              <h3>Project Two</h3>
              <p>A brief description of Project Two.</p>
              <a href="https://un.zopstudios.net/" className={`${styles.btn} ${styles.secondary}`}>Use Now</a>
            </div>
            <div className={styles['project-item']}>
              <img src="https://example.com/project1.jpg" alt="Project Democracy" />
              <h3>Project Democracy</h3>
              <p>More information to be released shortly.</p>
              <a href="/pages/services/proxy.html" className={`${styles.btn} ${styles.secondary}`}>Use Now</a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.services}>
          <h2>Our Services</h2>
          <div className={styles['service-list']}>
            <div className={styles['service-item']}>
              <div className={styles['service-content']}>
                <img src="/img/lol.png" alt="Webhook Proxy" />
                <div className={styles['service-text']}>
                  <h3>Webhook Proxy Service</h3>
                  <p>Utilize our state-of-the-art webhook proxy service, avoiding restrictions from using idk.</p>
                  <a href="https://webhook.zopstudios.net" className={styles['service-btn']}>Use Now</a>
                </div>
              </div>
            </div>
            <div className={styles['service-item']}>
              <div className={styles['service-content']}>
                <img src="https://example.com/service2.jpg" alt="Service 2" />
                <div className={styles['service-text']}>
                  <h3>Service Two</h3>
                  <p>Our team provides high-quality...</p>
                  <a href="/pages/services/proxy.html" className={styles['service-btn']}>Use Now</a>
                </div>
              </div>
            </div>
            <div className={styles['service-item']}>
              <div className={styles['service-content']}>
                <img src="https://example.com/service2.jpg" alt="Service 3" />
                <div className={styles['service-text']}>
                  <h3>Service Three</h3>
                  <p>Our team provides high-quality...</p>
                  <a href="/pages/services/proxy.html" className={styles['service-btn']}>Use Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
