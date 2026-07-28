import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">

        <div className="footer-about">
          <h2>KES EDUTECH</h2>

          <p>
            Empowering learners with practical technology education through
            live classes, hands-on projects, and career guidance.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            📞 +91 9182052360
          </p>

          <p>
            📧 kambalapallekasireddy@gmail.com
          </p>

          <p>
            📍 Atmakur, Nandyal District,
            <br />
            Andhra Pradesh, India
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#enroll">Enroll</a>
          <a href="#faq">FAQ</a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} KES EDUTECH. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;