import Image from "next/image";
import { Lightbulb, TrendingUp, User, Users } from "lucide-react";

const FEATURES = [
  { icon: Lightbulb, label: "Practical Training" },
  { icon: TrendingUp, label: "Career Growth" },
  { icon: User, label: "Leadership" },
  { icon: Users, label: "Community" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-engineers.jpg.jpeg"
        alt="Two engineers in hard hats standing at a construction site"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Empowering
            <br />
            Engineers.
            <br />
            <span className="text-gold">Building Futures.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/90 max-w-xl">
            We equip undergraduate and early-career engineers in Nigeria with
            the skills, mindset, and opportunities to thrive in their careers
            while creating lasting impact through mentorship, technical
            training, and industry partnerships.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#programs"
              className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:opacity-90"
            >
              Explore Programs
            </a>

            <a
              href="#community"
              className="rounded-lg border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
            >
              Join Our Community
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {FEATURES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl bg-white/10 p-4 backdrop-blur-sm"
              >
                <Icon
                  className="mb-2 h-8 w-8 text-gold"
                  strokeWidth={1.75}
                />
                <span className="text-center text-sm font-medium text-white">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}