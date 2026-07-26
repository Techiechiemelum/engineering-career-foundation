"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzi1e7VG4T4mYVePcQcQnsREQ6jW42K4xIIQ6ORHhK5IkI2sIOnf12iMB9i3lFgaQPxzA/exec";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <Navbar />

      <section className="px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">
          GET IN TOUCH
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-navy">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Have a question about our programs, mentorship, or how to get
          involved? Reach out — we&apos;d love to hear from you.
        </p>

        <div className="mt-8 flex flex-col gap-4">
  <div className="flex items-center gap-3">
    <Mail className="h-5 w-5 text-navy shrink-0" />
    <span className="text-sm text-gray-700 break-all">
      info@engineeringcareerfoundation.org
    </span>
  </div>
  <div className="flex items-center gap-3">
    <Phone className="h-5 w-5 text-navy shrink-0" />
    <span className="text-sm text-gray-700">+234 902 313 3344</span>
  </div>
  <div className="flex items-center gap-3">
    <MapPin className="h-5 w-5 text-navy shrink-0" />
    <span className="text-sm text-gray-700">Anambra, Nigeria</span>
  </div>
</div>

        {status === "sent" ? (
          <div className="mt-10 flex items-center gap-3 rounded-md bg-green-50 border border-green-200 px-5 py-4">
            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
            <p className="text-sm text-green-800">
              Message sent! We&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Your name"
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
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
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