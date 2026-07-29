import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        <div className="hero-content">

         

          <h1>
            Learn <span>Industry Ready</span> Tech Skills
          </h1>

          <p>
            Master the most in-demand technologies through live interactive
            classes, hands-on projects, interview preparation, and career
            guidance.
          </p>

          <div className="hero-buttons">
            <a href="#enroll" className="btn btn-primary">
              Enroll Now
            </a>

            <a href="#courses" className="btn btn-outline">
              View Courses
            </a>
          </div>

          <div className="hero-stats">

            <div className="stat">
              <h2>4</h2>
              <span>Courses</span>
              <span>Learning by doing</span>
            </div>

            <div className="stat">
              <h2>Live</h2>
              <span>Interactive Classes</span>
              <span>Project Driven Curriculum</span>
            </div>

            <div className="stat">
              <h2>100%</h2>
              <span>Project Based Learning</span>
              <span>Real-World-Applications</span>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <div className="hero-card">

            <h3>Available Courses</h3>

            <ul>
              <li>💾 Python + SQL</li>
              <li>⚛️ MERN Stack</li>
              <li>📊 Data Analysis</li>
              <li>🧠 Data Science + GenAI</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;