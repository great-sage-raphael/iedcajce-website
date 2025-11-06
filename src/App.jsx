
import './App.css';
import Ballpit from './components/Ballpit.jsx';
import PillNav from './components/PillNav.jsx';
import logo from './assets/react.svg'; // Replace this with IEDC logo later
import SpotlightCard from './components/SpotlightCard';
function App() {
  

  

  return (
    <>
      {/* Fixed PillNav on top */}

      {/* Full-screen Ballpit background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <Ballpit
          count={200}
          gravity={0.7}
          friction={0.8}
          colors={['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5']}
          wallBounce={0.95}
          followCursor={false}
        />
      </div>

      {/* Main scrollable content */} 
<div
  className="main-content"
  style={{
    position: 'relative',
    zIndex: 1,
    marginTop: '100px',
    
    
  }}
>
 <div
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center', // centers items inside horizontally
    alignItems: 'center',
    zIndex: 100,
    padding: '1rem 0',

  }}
>
  <PillNav
          logo={logo}
          logoAlt="IEDC AJCE Logo"
          items={[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Events', href: '#events' },
            { label: 'Team', href: '#team' },
            { label: 'Contact', href: '#contact' },
          ]}
         activeHref="/"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="#000000"
  pillColor="#ffffff"
  hoveredPillTextColor="#ffffff"
  pillTextColor="#000000"
        />
 
      </div>

  {/* HOME */}
  <section
    id="home"
    style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '6rem 2rem',
       background: 'linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.9))',
      position: 'relative',
     
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '1300px',
        height: '1300px',
        background: 'radial-gradient(circle, rgba(0,229,255,0.1), transparent 70%)',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(100px)',
        zIndex: 0,
      }}
    ></div>

    <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
      <h1
        style={{
          fontSize: '4rem',
          marginBottom: '1.5rem',
          background: 'linear-gradient(90deg, #00e5ff, #00b3ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 40px rgba(0,229,255,0.6)',
        }}
      >
        IEDC AJCE
      </h1>
      <p
        style={{
          fontSize: '1.4rem',
          lineHeight: '1.8',
          color: '#d0d0d0',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        The <strong>Innovation and Entrepreneurship Development Cell (IEDC)</strong> of
        <strong> Amal Jyothi College of Engineering</strong> empowers students to think
        creatively, innovate fearlessly, and build impactful solutions that can transform
        society.
        <br />
        <span style={{ color: '#00e5ff', fontWeight: 'bold' }}>Join us to bring your ideas to life!</span>
      </p>
    </div>
  </section>

  {/* ABOUT */}
  <section
    id="about"
    style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem',
      background: 'rgba(0,0,0,0)',
      color: 'white',
    }}
  >
    <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About IEDC</h2>
      <p
        style={{
          maxWidth: '900px',
          fontSize: '1.3rem',
          lineHeight: '1.8',
          margin: '0 auto',
        }}
      >
        IEDC AJCE is a student-run organization supported by Kerala Startup Mission (KSUM).
        We organize hackathons, ideathons, bootcamps, and workshops to cultivate a vibrant
        innovation culture among young engineers.
        <br />
        Our mission is to transform students into creators, entrepreneurs, and changemakers.
      </p>
    </SpotlightCard>
  </section>

  {/* EVENTS */}
  <section
    id="events"
    style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem',
      background: 'rgba(0,0,0,0)',
      color: 'white',
    }}
  >
    <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Events & Initiatives</h2>
      <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
        <li style={{ marginBottom: '1rem' }}>🚀 <strong>Hackathons</strong> — Build and compete with the best minds.</li>
        <li style={{ marginBottom: '1rem' }}>💡 <strong>Ideathons</strong> — Present your creative solutions to real-world problems.</li>
        <li style={{ marginBottom: '1rem' }}>🎓 <strong>Workshops</strong> — Learn the latest in tech, business, and innovation.</li>
      </ul>
    </SpotlightCard>
  </section>

  {/* TEAM */}
  <section
    id="team"
    style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem',
      background: 'rgba(0,0,0,0)',
      color: 'white',
      textAlign: 'center',
    }}
  >
    <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Team</h2>
      <p style={{ maxWidth: '850px', fontSize: '1.2rem' }}>
        Meet the passionate innovators, developers, and designers driving IEDC AJCE forward.
        Together, we make ideas happen.
      </p>
    </SpotlightCard>
  </section>

  {/* CONTACT */}
  <section
    id="contact"
    style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem',
      background: 'rgba(0,0,0,0)',
      color: 'white',
    }}
  >
    <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h2>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
        📍 Amal Jyothi College of Engineering, Kanjirappally <br />
        📧 <a href="mailto:iedc@amaljyothi.ac.in" style={{ color: '#33FFF5' }}>iedc@amaljyothi.ac.in</a> <br />
        🌐 <a href="https://iedc.ajce.in" style={{ color: '#33FFF5' }}>https://iedc.ajce.in</a>
      </p>
    </SpotlightCard>
  </section>
</div>

    </>
  );
}

export default App;
