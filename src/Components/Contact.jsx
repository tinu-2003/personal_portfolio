import React, { useState } from 'react';

function Contact({theme}) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "success" | "error"

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function validate() {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) err.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Email is invalid";
    if (!form.subject.trim()) err.subject = "Subject is required";
    if (!form.message.trim()) err.message = "Message is required";
    return err;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return setStatus("error");

    // Simulate successful submit
    setStatus(null);
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 300);
  }

  return (
    <section id="contact" className={theme?"bg-[#0f1720] py-20":" py-20"}>
      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className={theme?" p-8 rounded-xl shadow-lg ring-6 ring-gray-500":" p-8 rounded-xl shadow-lg"}>
          <h2 className={theme?"text-2xl font-semibold text-white mb-6":"text-2xl font-semibold  mb-6"}>Send Me a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className={theme?"w-full mb-4 px-4 py-3 rounded-lg bg-white  placeholder-gray-800 focus:outline-none":"w-full mb-4 px-4 py-3 rounded-lg bg-amber-50  placeholder-gray-800 focus:outline-none"}
          />
          {errors.name && <p className="text-sm text-red-400 mb-2">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={theme?" bg-white w-full mb-4 px-4 py-3 rounded-lg    placeholder-gray-800 focus:outline-none":"w-full mb-4 px-4 py-3 rounded-lg  bg-amber-50  placeholder-gray-800 focus:outline-none"}
          />
          {errors.email && <p className="text-sm text-red-400 mb-2">{errors.email}</p>}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className={theme?" bg-white w-full mb-4 px-4 py-3 rounded-lg   placeholder-gray-800 focus:outline-none":"w-full mb-4 px-4 py-3 rounded-lg  bg-amber-50  placeholder-gray-800 focus:outline-none"}
          />
          {errors.subject && <p className="text-sm text-red-400 mb-2">{errors.subject}</p>}

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className={theme?"w-full mb-4 px-4 py-3 rounded-lg  bg-white  placeholder-gray-800 focus:outline-none":"w-full mb-4 px-4 py-3 rounded-lg  bg-amber-50  placeholder-gray-800 focus:outline-none"}
          />
          {errors.message && <p className="text-sm text-red-400 mb-2">{errors.message}</p>}

          <button
            type="submit"
            className="ml-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="text-green-400 mt-4">Thanks! Your message was sent successfully.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-4">Please fix the errors above and try again.</p>
          )}
        </form>

        {/* Contact / Social Column */}
        <div className="max-w-md flex flex-col justify-between">
          <div>
            <h3 className={theme?"text-2xl font-bold text-white mb-4":"text-2xl font-bold  mb-4"}>Connect With Me</h3>
            <p className={theme?"text-gray-300 mb-6":"text-gray-800 mb-6"}>You can also reach me on these platforms or send an email directly.</p>

            <div className="flex gap-6 mb-8">
              {/* LinkedIn */}
              <a href="#linkedin" aria-label="LinkedIn" className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 hover:bg-[#1b3a4a] transition">
                {/* SVG here */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                        ></path>
                      </svg>
              </a>
              {/* GitHub */}
              <a href="#github" aria-label="GitHub" className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 hover:bg-[#1b3a4a] transition">
                {/* SVG here */}

                   <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"
                        ></path>
                      </svg>
               
              </a>
              {/* Email */}
              <a href="mailto:you@example.com" aria-label="Email" className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 hover:bg-[#1b3a4a] transition">
                {/* SVG here */}
  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
                        ></path>
                      </svg>
                      
              </a>
              
            </div>
          </div>

          <div className=" p-6 rounded-xl">
            <p className={theme?"text-gray-300":"text-gray-800"}>Prefer direct contact?</p>
            <p className={theme?"font-medium mt-2 text-gray-300":"font-medium mt-2"}>you@example.com</p>
            <p className={theme?"text-gray-300 mt-1":"text-gray-800 mt-1"}>+91 98765 43210</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
