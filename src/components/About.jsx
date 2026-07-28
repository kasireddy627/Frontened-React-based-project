import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="about-header">
          <span className="section-tag">About Us</span>

          <h2>Building Careers Through Practical Learning</h2>
        </div>

        <div className="about-container">

          <div className="about-content">

            <p>
              KES EDUTECH is a technology training platform focused on helping
              students and professionals build industry-ready skills through
              practical, project-based learning.
            </p>

            <p>
              Our goal is to bridge the gap between college education and real
              industry requirements by providing live interactive classes,
              hands-on projects, career guidance, interview preparation, and
              continuous mentorship.
            </p>

          </div>

          <div className="about-features">

            <div className="feature">
              🚀 Live Interactive Classes
            </div>

            <div className="feature">
              💻 Real World Projects
            </div>

            <div className="feature">
              📄 Resume Preparation
            </div>

            <div className="feature">
              🎤 Interview Preparation
            </div>

            <div className="feature">
              🎯 Career Guidance
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;