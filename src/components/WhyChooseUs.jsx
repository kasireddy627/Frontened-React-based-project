import "./WhyChooseUs.css";

const benefits = [
  {
    icon: "👨‍🏫",
    title: "Expert Mentors",
    description:
      "Learn directly from experienced professionals with real industry knowledge."
  },
  {
    icon: "💻",
    title: "Live Interactive Classes",
    description:
      "Attend engaging live sessions where you can ask questions and get instant clarification."
  },
  {
    icon: "🚀",
    title: "Real Projects",
    description:
      "Work on practical projects that strengthen your portfolio and hands-on skills."
  },
  {
    icon: "📄",
    title: "Resume & Interview Prep",
    description:
      "Build a strong resume and prepare confidently for technical interviews."
  },
  {
    icon: "🎯",
    title: "Career Guidance",
    description:
      "Receive mentorship and guidance to choose the right career path."
  },
  {
    icon: "🤝",
    title: "Community Support",
    description:
      "Stay connected with mentors and fellow learners through our learning community."
  }
];

function WhyChooseUs() {
  return (
    <section className="why-us">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Why Choose Us
          </span>

          <h2>
            Everything You Need to Become Job Ready
          </h2>

          <p>
            Our training focuses on practical skills, real projects, and career
            preparation to help you succeed in the tech industry.
          </p>
        </div>

        <div className="benefits-grid">

          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>

              <div className="benefit-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;