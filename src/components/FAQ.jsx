import "./FAQ.css";
import { useState } from "react";

const faqs = [
  {
    question: "Are the classes live or recorded?",
    answer:
      "All classes are conducted live. Recordings may be shared for revision when available."
  },
  {
    question: "Do I need prior programming knowledge?",
    answer:
      "No. Our beginner-friendly courses start from the fundamentals and gradually move to advanced topics."
  },
  {
    question: "Will I work on real projects?",
    answer:
      "Yes. Every course includes practical projects that help you build your portfolio."
  },
  {
    question: "How do I enroll?",
    answer:
      "Fill out the enrollment form and you'll be redirected to WhatsApp to complete your registration."
  },
  {
    question: "Do you provide interview preparation?",
    answer:
      "Yes. We cover resume building, interview preparation, coding practice, and career guidance."
  }
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => setActive(active === index ? null : index)}
            >
              {item.question}
              <span>{active === index ? "−" : "+"}</span>
            </button>

            {active === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;