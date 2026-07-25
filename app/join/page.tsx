"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { CheckCircle2 } from "lucide-react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxoaInWVqemI2iscaoxoOD3om4jUtvAJCNj48x4-7dg4T1DascrP2kytTLo9L66Cz4m/exec";

const BENEFITS = [
  "Access to mentorship from experienced engineers",
  "Workshops on leadership, soft skills, and technical training",
  "CV reviews and career readiness support",
  "A network of early-career engineers across Nigeria",
];

export default function JoinPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    interest: "Mentorship",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("sent");
      setForm({ fullName: "", email: "", interest: "Mentorship" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <Navbar />

      <section className="px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">
          BE PART OF A MOVEMENT
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-navy">
          Join Our Community
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Together, we can build a generation of engineers who will shape
          Nigeria and the world. Fill in your details and we&apos;ll be in
          touch.
        </p>

        <ul className="mt-8 space-y-3">
          {BENEFITS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-gold mt-0.5" />
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {status === "sent" ? (
          <div className="mt-10 flex items-center gap-3 rounded-md bg-green-50 border border-green-200 px-5 py-4">
            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
            <p className="text-sm text-green-800">
              You&apos;re in! We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={form.fullName}
                onChange={(e) =>
                  setForm({ ...form, fullName: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                What are you most interested in?
              </label>
              <select
                value={form.interest}
                onChange={(e) =>
                  setForm({ ...form, interest: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option>Mentorship</option>
                <option>Career Readiness</option>
                <option>Technical Training</option>
                <option>Professional Development</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-light transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Submitting..." : "Join Us Today"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </section>
    </main>
  );
}