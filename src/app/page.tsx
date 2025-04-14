'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MountainIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function DarkPeakHome() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const events = [
    {
      title: "Sunday Trail Run",
      location: "Mam Tor, Peak District",
      time: "Meet at 8:30 AM. Mixed pace. Dogs welcome.",
    },
    {
      title: "Midweek Chill Run",
      location: "Glossop Town Woods",
      time: "Wednesdays at 6 PM. Head torches encouraged.",
    },
    {
      title: "Saturday Special",
      location: "Kinder Scout Approach",
      time: "6:30 AM start. Bring coffee for the summit.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mdkebqgy", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
      setTimeout(() => {
        setModalOpen(false);
        setSubmitted(false);
      }, 2000);
    }

    setLoading(false);
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 overflow-x-hidden">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center text-center px-6 h-[100dvh] w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/banner.jpg')" }}
        >
          {/* Clickable DPRC Logo as Home Link */}
          <a
            href="/"
            className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30"
          >
            <img
              src="/dprc-logo.svg"
              alt="DPRC Logo"
              className="h-8 w-auto md:h-12"
            />
          </a>

          <div className="absolute inset-0 bg-black/60 sm:bg-black/40"></div>
          <div className="relative z-10">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Dark Peak Run Club
            </motion.h1>
            <motion.p
              className="max-w-2xl text-xl md:text-2xl mb-6 text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              Run slow, drink coffee, make mates.
            </motion.p>
            <a href="https://www.instagram.com/darkpeakrunclub/#" target="_blank" rel="noopener noreferrer">
              <Button variant="pink">Join the Club</Button>
            </a>
          </div>
        </section>

        {/* Upcoming Runs */}
        <section className="px-6 py-16 bg-white">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Upcoming Runs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <Card key={i} className="rounded-2xl shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5" /> {event.title}
                    </h3>
                    <Button variant="pink" size="sm" onClick={() => {
                      setSelectedEvent(event.title);
                      setModalOpen(true);
                    }}>
                      Book Now
                    </Button>
                  </div>
                  <p className="flex items-center gap-2 text-sm">
                    <MapPinIcon className="w-4 h-4" /> {event.location}
                  </p>
                  <p className="text-sm text-gray-600">{event.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
              >
                ×
              </button>
              <h3 className="text-xl font-semibold mb-4">Book: {selectedEvent}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="event" value={selectedEvent || ''} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <Button type="submit" variant="pink" disabled={loading}>
                  {loading ? "Booking..." : "Confirm Booking"}
                </Button>
              </form>
              {submitted && <p className="mt-4 text-green-600 font-medium">✅ You're booked in!</p>}
            </div>
          </div>
        )}

        {/* Why Dark Peak */}
        <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 bg-cover bg-center"
          style={{ backgroundImage: "url('/why-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Why Dark Peak?</h2>
            <p className="text-lg mb-8">
              We’re not about race times or egos. Just good vibes, stunning trails, and a little retro flair.
              Whether you’re a seasoned runner or just getting started, there’s a place for you here.
            </p>
            <a href="https://www.instagram.com/darkpeakrunclub/#" target="_blank" rel="noopener noreferrer">
              <Button variant="pink">See Past Runs</Button>
            </a>
          </div>
        </section>

        {/* Join Us */}
        <section className="px-6 py-20 bg-white text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Join Us</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                setSubmitted(false);

                const form = e.currentTarget;
                const data = new FormData(form);

                try {
                  const res = await fetch("https://formspree.io/f/xldjaylk", {
                    method: "POST",
                    body: data,
                    headers: { Accept: "application/json" },
                  });

                  if (res.ok) {
                    setSubmitted(true);
                    form.reset();
                  }
                } finally {
                  setLoading(false);
                }
              }}
              className="space-y-4 text-left"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <select
                name="coffee"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="with-coffee">☕ Run with coffee</option>
                <option value="without-coffee">🚫 Run without coffee</option>
              </select>
              <Button variant="pink" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Sign Up"}
              </Button>
            </form>

            <div className="mt-6 text-gray-700 space-y-2">
              <p>
                Or connect with us on:
                <a href="https://strava.app.link/oSFM7LeCtSb" className="text-blue-600 underline ml-2" target="_blank" rel="noopener noreferrer">Strava</a>
                <span className="mx-2">|</span>
                <a href="https://wa.me/447763856888?text=I'd%20like%20to%20learn%20more%20about%20running%20and%20coffee%20with%20Dark%20Peak%20Run%20Club"
                  className="text-green-600 underline" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-white py-12 text-center bg-cover bg-center relative"
          style={{ backgroundImage: "url('/banner.jpg')" }}>
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="relative z-10 space-y-4">
            <MountainIcon className="w-10 h-10 mx-auto" />
            <p>© 2025 Dark Peak Run Club. All rights reserved.</p>
            <p className="text-sm text-gray-400">Glossop | Peak District | Est. 2025</p>
          </div>
        </footer>
      </main>
    </>
  );
}
