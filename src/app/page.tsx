'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MountainIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function DarkPeakHome() {
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
      title: "Saturday Sunrise Special",
      location: "Kinder Scout Approach",
      time: "6:30 AM start. Bring coffee for the summit.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
        {/* Hero Section with Banner */}
        <section
          className="relative flex flex-col items-center justify-center text-center px-6 py-20 h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
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
              className="max-w-2xl text-lg md:text-xl mb-6 text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              A retro-fresh community of runners exploring the Peak District every week. Come run wild with us.
            </motion.p>
            <a
              href="https://www.instagram.com/darkpeakrunclub/#"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" /> {event.title}
                  </h3>
                  <p className="flex items-center gap-2 text-sm">
                    <MapPinIcon className="w-4 h-4" /> {event.location}
                  </p>
                  <p className="text-sm text-gray-600">{event.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Dark Peak Section */}
        <section
          className="relative flex flex-col items-center justify-center text-center px-6 py-28 bg-cover bg-center"
          style={{ backgroundImage: "url('/why-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Why Dark Peak?</h2>
            <p className="text-lg mb-8">
              We’re not about race times or egos. Just good vibes, stunning trails, and a little retro flair.
              Whether you’re a seasoned runner or just getting started, there’s a place for you here.
            </p>
            <a
              href="https://www.instagram.com/darkpeakrunclub/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="pink">See Past Runs</Button>
            </a>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="px-6 py-20 bg-white text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Join Us</h2>
            <form
              action="https://formspree.io/f/xldjaylk"
              method="POST"
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
              <Button variant="pink" type="submit">Sign Up</Button>
            </form>

            <div className="mt-6 text-gray-700 space-y-2">
              <p>
                Or connect with us on:
                <a
                  href="https://strava.app.link/oSFM7LeCtSb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline ml-2"
                >
                  Strava
                </a>
                <span className="mx-2">|</span>
                <a
                  href="https://wa.me/447763856888?text=I'd%20like%20to%20learn%20more%20about%20running%20and%20coffee%20with%20Dark%20Peak%20Run%20Club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 text-center">
          <div className="space-y-4">
            <MountainIcon className="w-10 h-10 mx-auto" />
            <p>© 2025 Dark Peak Run Club. All rights reserved.</p>
            <p className="text-sm text-gray-400">Glossop | Peak District | Est. 2025</p>
          </div>
        </footer>
      </main>
    </>
  );
}
