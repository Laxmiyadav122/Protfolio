import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-300 text-center max-w-md mb-8">
        Feel free to reach out for collaborations, opportunities, or any questions!
      </p>

      {/* Contact Info */}
      <div className="space-y-4 text-lg">
        
        {/* Email */}
        <a 
          href="mailto:laxmi23@gmail.com"
          className="flex items-center gap-3 hover:text-teal-300 transition"
        >
          <FaEnvelope className="text-2xl" /> 
          laxmi23@gmail.com
        </a>

        {/* Phone */}
        <a 
          href="tel:9340365834"
          className="flex items-center gap-3 hover:text-teal-300 transition"
        >
          <FaPhone className="text-2xl" /> 
          9340365834
        </a>
      </div>

      {/* Social Media */}
      <div className="flex gap-6 mt-8">
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          className="text-3xl hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>

        <a 
          href="https://github.com" 
          target="_blank" 
          className="text-3xl hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
