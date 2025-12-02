import { Zoom } from "react-awesome-reveal";
import { useState } from "react";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const [statusColor, setStatusColor] = useState("text-green-400");
  
  // Controlled input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Sending...");
    setStatusColor("text-green-400");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "bf2e663d-30c9-4024-9725-b88815749956",
          name,
          email,
          message,
          subject: "New message from portfolio",
          redirect: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("✅ Email sent successfully!");
        setStatusColor("text-green-400");
        // Clear the fields
        setName("");
        setEmail("");
        setMessage("");
      } else {
        if (result.message?.includes("marked as spam")) {
          setFormStatus("❌ Please use a valid email address to send your message.");
        } else {
          setFormStatus(`❌ ${result.message || "Failed to send email. Try again."}`);
        }
        setStatusColor("text-red-400");
      }

      setTimeout(() => setFormStatus(""), 5000); // auto-clear message
  };

  return (
    <section className="flex flex-col items-center justify-center text-white py-22 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3 2xl:mb-4 border-b-2 border-blue-500 pb-2 inline-block">
          Contact
        </h2>
      </div>

      <div className="w-full flex justify-center">
<div className="grid zoom-100:wide-card zoom-100:wide-min grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 justify-center max-w-[1600px] w-full px-4 md:px-8 lg:px-23 xl:px-20 2xl:px-24">
          <Zoom duration={450} fraction={0.05} damping={0.15}>
            <div className="animated-border rounded-xl p-0.5">
              <div className="flex flex-col items-center justify-center p-6 skills-bg rounded-xl shadow-lg w-full">
                <h3 className="text-xl font-semibold mb-2 project-title">
                  Get in Touch
                </h3>
                <p className="text-gray-300 mb-6 text-center">
                  Have something to discuss? Send me a message and let's talk.
                </p>
                <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-md bg-[#11111194] border border-gray-700 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-md bg-[#11111194] border border-gray-700 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400"
                  />
                  <textarea
                    name="message"
                    placeholder="Write Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-md bg-[#11111194] border border-gray-700 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 resize-y min-h-[calc(1.5rem*3)] max-h-60"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-colors"
                  >
                    Send Message
                  </button>

                  {formStatus && (
                    <p className={`mt-2 text-center ${statusColor}`}>{formStatus}</p>
                  )}
                </form>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      <ScrollToTopButton />

    </section>
  );
}
