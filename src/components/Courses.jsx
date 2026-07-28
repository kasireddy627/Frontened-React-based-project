import "./Courses.css";

const courses = [
  {
    title: "Python + SQL",
    price: "₹999",
    features: [
      "Python Programming",
      "SQL",
      "Projects",
      "Interview Preparation"
    ]
  },
  {
    title: "MERN Stack",
    price: "₹2,499",
    badge: "Popular",
    features: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js"
    ]
  },
  {
    title: "Data Analysis",
    price: "₹2,499",
    features: [
      "Excel",
      "SQL",
      "Python",
      "Power BI"
    ]
  },
  {
    title: "Data Science with GenAI",
    price: "₹3,999",
    badge: "Best Value",
    features: [
      "Python with EDA",
      "Machine Learning",
      "Generative AI",
      "Capstone Project"
    ]
  }
];

function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">Courses</span>

          <h2>Choose Your Learning Path</h2>

          <p>
            Practical, project-based courses designed to make you job-ready.
          </p>
        </div>

        <div className="course-grid">

          {courses.map((course, index) => (
            <div className="course-card" key={index}>

              {course.badge && (
                <span className="course-badge">
                  {course.badge}
                </span>
              )}

              <h3>{course.title}</h3>

              <div className="course-price">
                {course.price}
              </div>

              <ul>

                {course.features.map((feature, i) => (
                  <li key={i}>
                    ✓ {feature}
                  </li>
                ))}

              </ul>

              <a href="#enroll" className="btn btn-primary">
                Enroll Now
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Courses;