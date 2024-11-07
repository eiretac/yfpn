import React from "react";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';


export default function GameShowcase() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#fff", backgroundColor: "#1b1b1b" }}>
      {/* Hero Banner */}
      <header style={{
        backgroundImage: 'url("https://your-image-url.com/hero-banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px"
      }}>
        <div>
        <Header />
          <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>Repubblica Italiana</h1>
          <p style={{ fontSize: "1.5rem", maxWidth: "800px", margin: "20px auto" }}>
            ITALIA!!!!!!!!!!!!
          </p>
          <button style={{
            backgroundColor: "#e63946", color: "#fff", padding: "15px 30px", fontSize: "1.2rem",
            border: "none", cursor: "pointer", marginTop: "20px"
          }}>Play Now</button>
        </div>
      </header>

      {/* Game Trailer Section */}
      <section style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#252525" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>Watch the Trailer</h2>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/trailerid"
            title="Game Trailer"
            style={{
              position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none"
            }}
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Game Features Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "#1b1b1b", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>Game Features</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "40px" }}>
          <FeatureCard
            image="https://your-image-url.com/feature1.jpg"
            title="Roleplay"
            description="Become a politican."
          />
          <FeatureCard
            image="https://your-image-url.com/feature2.jpg"
            title="Dyanmic Economy"
            description="Experience a realsitic economy system."
          />
          <FeatureCard
            image="https://your-image-url.com/feature3.jpg"
            title="Open World Exploration"
            description="idfk."
          />
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section style={{ padding: "60px 20px", backgroundColor: "#252525", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>Game Gallery</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          <img src="https://your-image-url.com/screenshot1.jpg" alt="Screenshot 1" style={{ width: "300px", borderRadius: "8px" }} />
          <img src="https://your-image-url.com/screenshot2.jpg" alt="Screenshot 2" style={{ width: "300px", borderRadius: "8px" }} />
          <img src="https://your-image-url.com/screenshot3.jpg" alt="Screenshot 3" style={{ width: "300px", borderRadius: "8px" }} />
          <img src="https://your-image-url.com/screenshot4.jpg" alt="Screenshot 4" style={{ width: "300px", borderRadius: "8px" }} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ image, title, description }) {
  return (
    <div style={{ maxWidth: "300px", textAlign: "center", color: "#fff" }}>
      <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }} />
      <h3 style={{ fontSize: "1.5rem", margin: "10px 0" }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
