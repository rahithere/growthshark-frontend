import { useState } from "react";
import { Helmet } from "react-helmet-async";
import career from "../assets/career.png";

export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    whatsapp: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(""); // Add a state for status messages

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (name === "resume") {
      const file = files?.[0];

      if (!file) return;

      if (
        file.type !== "application/pdf" ||
        !file.name.toLowerCase().endsWith(".pdf")
      ) {
        alert("Please upload a PDF file only.");
        e.target.value = "";
        return;
      }

      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(""); // Clear any previous status message

    if (!formData.resume) {
      setStatus("Error: Please upload your resume.");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("countryCode", formData.countryCode);
    data.append("whatsapp", formData.whatsapp);
    data.append("resume", formData.resume);

    setIsSubmitting(true);
    setStatus("Submitting...");

    try {
      const baseUrl = import.meta.env.VITE_API_URL
      // for development
      // const baseUrl = "http://localhost:5000"
      const res = await fetch(`${baseUrl}/api/career`, {
        method: "POST",
        body: data,
        // No Content-Type header is needed for FormData,
        // as the browser will set it to multipart/form-data with the correct boundary
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus(result.message || "Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        whatsapp: "",
        resume: null,
      });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("Error: Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white">
      <Helmet>
        <title>Explore Exciting Career Opportunities & Grow Your Skills at GrowthShark</title>
        <meta name="description" content="Discover exciting roles where your talent can shine. Join GrowthShark and take the next step toward a successful career. Apply now." />
      </Helmet>
      <div className="px-6">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto pt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="lg:text-6xl text-4xl  font-extrabold leading-tight mb-6">
              Join <span className="text-sky-400">GrowthShark</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Shape the future with us! Explore exciting opportunities and grow your career with a team
              that values innovation, collaboration, and excellence.
            </p>
            <img src={career} alt="career" className="w-64 md:w-80 drop-shadow-lg mx-auto lg:mx-0" />
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#71b5f0] backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10 text-gray-900"
          >
            <h2 className="text-3xl font-semibold mb-2 text-black">Application Form</h2>
            <p className="text-gray-900 mb-6">
              Fill in your details and we’ll get back to you soon.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm text-gray-900">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-sky-400 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-900">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-sky-400 outline-none"
                />
              </div>

              <div className="flex gap-x-2">
                <div>
                  <label className="block mb-1 text-sm text-gray-900">
                    Country Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    required
                    className="w-20 px-3 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-sky-400 outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-sm text-gray-900">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp Number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-sky-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-900">
                  Upload Resume <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf"
                  onChange={handleChange}
                  required
                  className="w-full text-gray-800"
                />
                {formData.resume && (
                  <p className="text-gray-700  text-xs mt-1">
                    Selected: <span className="font-semibold">{formData.resume.name}</span>
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full bg-lime-400  shadow-lg shadow-black/50 hover:brightness-110  text-black font-semibold py-3 rounded-lg transition cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
            {status && <p className="text-center mt-4 text-sm">{status}</p>}
          </form>
        </section>

        {/* Benefits Section */}
        <section className="max-w-6xl mx-auto py-16">
          <h2 className="text-4xl font-bold mb-6 text-center">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { title: "Growth & Learning", text: "We provide continuous opportunities to learn and grow in your career." },
              { title: "Collaborative Culture", text: "Work with a supportive team that values innovation and teamwork." },
              { title: "Impactful Work", text: "Be part of meaningful projects that create real-world impact." },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 ">{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interview Process */}
        <section className="max-w-6xl mx-auto py-6">
          <h3 className="text-4xl font-bold mb-3 text-center">Interview Process</h3>
          <p className="text-center mb-10 text-gray-400">At GrowthShark, we aim to make the hiring journey smooth and transparent. Here’s a detailed breakdown of our process:</p>

          {/* First 4 cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              { title: "Application Review", text: "We carefully evaluate your submitted resume, portfolio, and cover letter to understand your qualifications and how they align with our needs." },
              { title: "Preliminary Interview", text: "This initial conversation is an opportunity for you to share your experience and career goals while learning about our team and company culture." },
              { title: "Skills Assessment", text: "Depending on the role, you may be asked to complete a task or assessment. This allows us to gauge your technical skills, problem-solving abilities, and creativity." },
              { title: "Final Round", text: "Meet with key team members for an in-depth discussion about the role, expectations, and how your unique perspective can contribute to our success. It’s also your chance to ask questions and ensure this is the right fit for you." },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur"
              >
                <h4 className="text-2xl font-semibold mb-2 text-center">{step.title}</h4>
                <p className="text-gray-400 text-center">{step.text}</p>
              </div>
            ))}
          </div>

          {/* Centered Offer Stage card */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur w-full md:w-1/2 lg:w-1/2">
              <h4 className="text-2xl font-semibold mb-2">Offer Stage</h4>
              <p className="text-gray-400">
                If selected, we’ll provide a detailed offer letter outlining compensation, benefits, and next steps.
                Join us at GrowthShark and be part of something exciting!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-300 mb-2">Have questions? We're here to help.</p>
          <p>
            <strong>Call:</strong> +91 8348296083
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:marketing@grothshark.io" className="text-sky-400 underline">
              marketing@grothshark.io
            </a>
            <br /> {" "}
            <a href="mailto:diptesh@growthshark.io" className="text-sky-400 underline">
              diptesh@growthshark.io
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
