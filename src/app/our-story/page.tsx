'use client';

import React from "react";
import { Button } from "@/components/ui/button";

export default function OurStory() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 overflow-x-hidden">
      {/* Floating logo link to home */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
        <a href="/">
          <img src="/dprc-logo.svg" alt="DPRC Logo" className="h-8 w-auto md:h-12" />
        </a>
      </div>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Our Story</h1>
          <p className="text-xl max-w-xl mx-auto">
            Founded by James and his Doberman Billie — born from a love of being outdoors,
            running trails with mates, and always finishing with a strong coffee in the Peaks.
          </p>
        </div>
      </section>

      {/* Sectioned Content */}
      <section className="px-6 py-20 max-w-4xl mx-auto space-y-16 text-gray-800">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Humble Beginnings</h2>
          <p className="text-lg leading-relaxed">
            It all started on those misty Glossop mornings — no plan, no route, just a trail underfoot,
            a dog bounding ahead, and a few mates chasing the sunrise. There were no race bibs, just 
            shared moments, laughter, and muddy shoes. The reward? A coffee that tasted better because 
            we’d earned it.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">The Vibe</h2>
          <p className="text-lg leading-relaxed">
            DPRC isn't about Strava segments or carbon-plated shoes. It's about slow paces, shared effort, 
            and soaking in the view from the top. We lean into a retro, low-fi aesthetic — old-school gear, 
            mismatched socks, and conversations that keep you moving. Everyone’s welcome. Dogs included.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">The Ritual</h2>
          <p className="text-lg leading-relaxed">
            Runs start with a smile and end with a sip. There’s something magic in chatting on the trails — 
            new ideas, new friendships, and plans for the next adventure. We believe the best communities 
            are brewed slowly, with intention and warmth.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">What’s Next?</h2>
          <p className="text-lg leading-relaxed">
            We’re dreaming big: community trail days, guest runners, branded kits, and maybe a mobile 
            coffee stop at the top of Mam Tor. Whether you’re here for one run or all of them, 
            we’re stoked to have you.
          </p>
        </div>
      </section>
    </main>
  );
}
