import "./FloatingWhatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsapp() {
  const message = encodeURIComponent(
`Hello KES EDUTECH Team,

I'm interested in learning more about your courses.

Please share details regarding:
• Course syllabus
• Fees
• Upcoming batches
• Class timings
• Duration
• Enrollment process

Looking forward to your response.

Thank you!`
  );

  return (
    <a
      href={`https://wa.me/919182052360?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsapp;