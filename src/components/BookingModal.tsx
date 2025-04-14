'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-xl">×</button>
        <h2 className="text-2xl font-semibold mb-4">Book Your Spot</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            setSubmitted(false);
            setError(false);

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
              } else {
                setError(true);
              }
            } catch {
              setError(true);
            } finally {
              setLoading(false);
            }
          }}
          className="space-y-4 text-left"
        >
          <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300" />
          <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-3 rounded-lg border border-gray-300" />
          <input type="text" name="run" placeholder="Which run?" required className="w-full px-4 py-3 rounded-lg border border-gray-300" />

          <Button type="submit" variant="pink" disabled={loading}>
            {loading ? "Booking..." : "Book Now"}
          </Button>
        </form>

        {submitted && <p className="text-green-600 mt-4">✅ You're booked! We'll be in touch.</p>}
        {error && <p className="text-red-600 mt-4">❌ Error. Please try again.</p>}
      </div>
    </div>
  );
}
