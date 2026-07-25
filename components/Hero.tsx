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
    <section id="home" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left: copy */}
      <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-navy">
          Empowering
          <br />
          Engineers.
          <br />
          <span className="text-gold">Building Futures.</span>
        </h1>

        <p className="mt-6 max-w-md text-white-600 text-[15px] leading-relaxed">
          We equip undergraduate and early-career engineers in Nigeria with
          the skills, mindset and opportunities to thrive in their careers
          and make lasting impact.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#programs"
            className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
          >
            Explore Programs
          </a>
          <a
            href="#community"
            className="rounded-md border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            Join Our Community
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-6">
          {FEATURES.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center gap-2 text-center w-16">
              <Icon className="h-6 w-6 text-navy" strokeWidth={1.75} />
              <span className="text-xs font-medium text-gray-700">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: image */}
      <div className="relative min-h-[360px] lg:min-h-full">
        <Image
          src="/images/hero-engineers.jpg.jpeg"
          alt="Two engineers in hard hats standing at a construction site"
          fill
          priority
           sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
