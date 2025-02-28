import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form redirection

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/bs8965961@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        e.target.reset(); // Reset form fields
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("Error: Could not submit form.");
    }
  };

  return (
    <div>
      <section
        id="contact"
        className={`w-full py-8 md:py-8 lg:py-8 text-white bg-slate-900 ${
          location.pathname === "/contact" && "h-[90vh]"
        }`}
      >
        <div
          className={`px-4 md:px-14 ${
            location.pathname === "/contact" && "pt-24"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-b from-orange-600 to-amber-500 text-transparent bg-clip-text w-fit">
            Contact Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-xl font-bold">Get In Touch</h3>
              <p className="mt-2">
                The best way to reach me is via email: bikramjeet@gmail.com
              </p>
              <p className="mt-2">
                You can also follow me on Twitter:{" "}
                <a href="#" className="underline">
                  Twitter
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Send a Message</h3>
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded bg-slate-800 text-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded bg-slate-800 text-white"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-2 border rounded bg-slate-800 text-white"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700"
                >
                  Send
                </button>
              </form>
              {status && <p className="mt-2">{status}</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
