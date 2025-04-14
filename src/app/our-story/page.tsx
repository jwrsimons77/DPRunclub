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
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Our Story</h1>
        </div>
      </section>

      {/* Sectioned Content */}
      <section className="px-6 py-20 max-w-4xl mx-auto space-y-16 text-gray-800 leading-relaxed">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Where it all began</h2>
          <p>
            Dark Peak Run Club was founded by James Faye and his Doberman Billie — born from a love
            of being outdoors with mates, catching sunrises over the hills, and finishing every run with
            a strong cup of coffee. What started as a few friends running around Glossop became something
            more — a rhythm of community, movement, and caffeine.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">What we believe</h2>
          <p>
            This isn’t a club for elite times or pressure. We believe in slowing down,
            soaking in the scenery, and finding connection in conversation. The trails bring clarity.
            The people bring energy. And the coffee? That’s non-negotiable.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">The vibe</h2>
          <p>
            Retro-fresh. Inclusive. Loose plans with tight community spirit. Whether you're here to train,
            trot, or just tag along with your dog — you're welcome. No egos. Just miles, mugs, and memories.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">Who it’s for</h2>
          <p>
            You don’t need to be fast. You don’t even need to call yourself a runner. If you’ve got a pair
            of trainers, a love for the outdoors, and a soft spot for Peak District views — this is for you.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">Join the journey</h2>
          <p>
            Every run is an open invite. Just show up, say hi, and we’ll take it from there. Check out our
            <a href="/" className="text-pink-600 underline ml-1">Upcoming Runs</a> and come see what it’s about.
          </p>
        </div>
      </section>
    </main>
  );
}
