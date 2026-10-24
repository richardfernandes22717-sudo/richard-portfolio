import './App.css'

function App() {
  return (
    
<main>
  <nav className="navbar">
    <a className="logo" href="#home">richard.dev</a>

    <div className="nav-links">
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

 
<section id="home" className="hero">
  <p className="eyebrow">MCA STUDENT · DEVELOPER IN PROGRESS</p>

  <h1>
    Building ideas into
    <br />
    <span>real-world projects.</span>
  </h1>

  <p className="intro">
    Hey, I'm Richard. I'm exploring full-stack development,
    data analytics, and AI while building practical projects
    and strengthening my coding skills.
  </p>

  <div className="hero-buttons">
    <a href="#projects" className="btn-primary">
      Explore my projects ↗
    </a>

   <a href="richardfernandes22717@gmail.com" className="btn-secondary">
  Email me ↗
</a>

<a
  href="/Richard-Fernandes-Resume.pdf"
  className="btn-secondary"
  target="_blank"
  rel="noreferrer"
>
  View Resume ↗
</a>

  </div>

  
<section id="projects" className="projects-section">
  <p className="eyebrow">MY WORK</p>
  <h2>Projects I've been building.</h2>
  <p className="section-description">
    Practical ideas, real code, and a lot of learning.
  </p>

  <div className="project-grid">
    <article className="project-card">
      <span className="project-number">01 / FULL-STACK + AI</span>
     <h3>
  <a
    href="https://github.com/richardfernandes22717-sudo/tripgenie-budget-travel-planner"
    target="_blank"
    rel="noreferrer"
  >
    TripGenie ↗
  </a>
</h3>
      <p>
        A budget travel planner designed to help users organize
        trips and explore AI-assisted itineraries.
      </p>
      <div className="project-tags">
        <span>React</span>
        <span>TypeScript</span>
        <span>Node.js</span>
        
      </div>

<article className="project-card">
  <span className="project-number">02 / MOBILE APP</span>
  <h3>DocuTrack</h3>
  <p>
    A personal document and warranty manager that helps users
    organize important records and track expiry dates.
  </p>
  <div className="project-tags">
    <span>Flutter</span>
    <span>Dart</span>
    <span>SharedPreferences</span>
  </div>
</article>

<article className="project-card">
  <span className="project-number">03 / WEB DEVELOPMENT</span>
  <h3>CineMatch</h3>
  <p>
    A movie discovery web project designed to make exploring
    films simple and enjoyable.
  </p>
  <div className="project-tags">
    <span>PHP</span>
    <span>JavaScript</span>
    <span>MySQL</span>
  </div>
</article>


    </article>
  </div>
</section>



<section id="about" className="about-section">
  <p className="eyebrow">A LITTLE ABOUT ME</p>
  <h2>Curious by nature. <span>Builder by practice.</span></h2>

  <p>
    I'm Richard Fernandes, an MCA student who enjoys learning
    by building practical projects. I'm exploring full-stack
    development, data analytics, and AI while strengthening
    my programming fundamentals.
  </p>

  <p>
    My goal is to create useful software, understand the
    technology behind it, and build the confidence to explain
    my work in real-world interviews.
  </p>
</section>


<section id="skills" className="skills-section">
  <p className="eyebrow">MY TOOLKIT</p>
  <h2>Skills I'm building on.</h2>
  <p className="section-description">
    The technologies I use and the areas I'm exploring.
  </p>

  <div className="skills-grid">
    <article className="skill-card">
      <h3>Programming</h3>
      <p>Java · Python · SQL · JavaScript</p>
    </article>

    <article className="skill-card">
      <h3>Web Development</h3>
      <p>HTML · CSS · React · Node.js · PHP</p>
    </article>

    <article className="skill-card">
      <h3>Data & AI</h3>
      <p>Data analytics fundamentals · AI APIs · Exploring ML</p>
    </article>

    <article className="skill-card">
      <h3>Tools & Platforms</h3>
      <p>Git · GitHub · MySQL · MariaDB · Flutter</p>
    </article>
  </div>
</section>

</section>

<footer className="footer">
  <p>© 2026 Richard Fernandes · Built with curiosity.</p>

  <div className="social-links">
    <a href="https://github.com/richardfernandes22717-sudo" target="_blank" rel="noreferrer">
      GitHub ↗
    </a>
   <a
  href="https://www.linkedin.com/in/richard-f-28761b225/"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn ↗
</a>
    <a href="#home">Back to top ↑</a>
  </div>
</footer>

</main>

  )
}

export default App