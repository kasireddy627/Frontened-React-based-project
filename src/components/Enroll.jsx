import { useState } from "react";
import "./Enroll.css";

function Enroll() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    batch: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919182052360"; 
    const text = `*New Course Enquiry*

👤 Name: ${form.name}
📱 Phone: ${form.phone}
📧 Email: ${form.email}
📚 Course: ${form.course}
🕒 Preferred Batch: ${form.batch}

💬 Message:
${form.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="enroll" id="enroll">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Enrollment
          </span>

          <h2>Start Your Learning Journey</h2>

          <p>
            Fill in your details and we'll connect with you on WhatsApp.
          </p>
        </div>

        <form className="enroll-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />

          <select
            name="course"
            required
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option>Python Programming (FREE)</option>
            <option>Python + SQL</option>
            <option>MERN Stack</option>
            <option>Data Analysis</option>
            <option>Machine Learning + Deep Learning</option>
            <option>Data Science + GenAI</option>
          </select>

          <select
            name="batch"
            required
            onChange={handleChange}
          >
            <option value="">Preferred Batch</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Weekend</option>
          </select>

          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your goals..."
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Enroll via WhatsApp
          </button>

        </form>

      </div>
    </section>
  );
}

export default Enroll;