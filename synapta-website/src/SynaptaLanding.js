
import React from "react";

export default function SynaptaLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0c30] to-[#1c1c4d] text-white px-6 py-10 font-sans">
      <header className="text-center mb-20">
        <img src="/logo.png" alt="Synapta Logo" className="mx-auto w-32 mb-6" />
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Train Your Mind.<br /> Guide Your Day.
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-6">
          Improve your focus and reduce stress with AI-powered cognitive training.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full">
            Try it Now
          </a>
          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full">
            Get Started
          </a>
        </div>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-center mb-20 gap-10">
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">What is Synapta?</h2>
          <p className="text-gray-300">
            Synapta uses advanced AI to boost your focus, calm your mind, and track your progress towards mental clarity.
          </p>
        </div>
        <img src="/app-preview.png" alt="App Preview" className="w-72 rounded-xl shadow-lg" />
      </section>

      <section className="mb-20">
        <h2 className="text-center text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-5xl mb-2">🧠</div>
            <h3 className="text-xl font-bold mb-2">Assess Your Mind</h3>
            <p className="text-gray-400">Ease your concentration.</p>
          </div>
          <div>
            <div className="text-5xl mb-2">⚡</div>
            <h3 className="text-xl font-bold mb-2">Receive a Routine</h3>
            <p className="text-gray-400">Get a routine tailored to you.</p>
          </div>
          <div>
            <div className="text-5xl mb-2">📈</div>
            <h3 className="text-xl font-bold mb-2">Track Your Progress</h3>
            <p className="text-gray-400">Watch your focus improve daily.</p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-center text-3xl font-bold mb-10">Benefits</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-[#222255] rounded-xl">
            <h3 className="text-lg font-bold mb-2">Focus</h3>
            <p className="text-gray-300">Sustain your concentration.</p>
          </div>
          <div className="p-6 bg-[#222255] rounded-xl">
            <h3 className="text-lg font-bold mb-2">Calm</h3>
            <p className="text-gray-300">Ease your stress and anxiety.</p>
          </div>
          <div className="p-6 bg-[#222255] rounded-xl">
            <h3 className="text-lg font-bold mb-2">Productivity</h3>
            <p className="text-gray-300">Get more done each day.</p>
          </div>
          <div className="p-6 bg-[#222255] rounded-xl">
            <h3 className="text-lg font-bold mb-2">Clarity</h3>
            <p className="text-gray-300">Gain mental clarity and insight.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mb-20">
        <h2 className="text-center text-3xl font-bold mb-8">Contact Us</h2>
        <form className="max-w-2xl mx-auto space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded bg-[#2c2c5c] border border-gray-600 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded bg-[#2c2c5c] border border-gray-600 placeholder-gray-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 h-32 rounded bg-[#2c2c5c] border border-gray-600 placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center text-gray-400 mt-10">
        <p>&copy; {new Date().getFullYear()} Synapta. All rights reserved.</p>
      </footer>
    </main>
  );
}
