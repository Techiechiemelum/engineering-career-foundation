import Image from "next/image";
import { ArrowRight } from "lucide-react";

const STATS = [
  { number: "500+", label: "Students Trained" },
  { number: "30+", label: "Industry Mentors" },
  { number: "15+", label: "University Partners" },
  { number: "85%", label: "Career Readiness Satisfaction" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#071B3B] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 min-h-[700px]">

        {/* Left Content */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-16">
          <div>
            <p className="text-gold font-semibold uppercase tracking-widest text-sm">
              Engineering Career Foundation
            </p>

            <h1 className="mt-4 text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Building Nigeria's
              <br />
              Next Generation of
              <br />
              <span className="text-gold">
                Industry-Ready Engineers
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/80 max-w-xl">
              Engineering Career Foundation equips undergraduate and
              early-career engineers with the technical,
              professional and leadership skills needed to thrive
              in today's engineering industry.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-4 text-sm font-semibold text-navy transition hover:opacity-90"
              >
                Apply for Programs
                <ArrowRight size={18} />
              </a>

              <a
                href="#community"
                className="inline-flex items-center gap-2 rounded-lg border border-white px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
              >
                Become a Partner
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[450px] lg:min-h-full">

          <Image
            src="/images/hero-engineers.jpg.jpeg"
            alt="Engineering students"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Orange Curve */}
          <div className="absolute bottom-0 right-0 h-48 w-72 rounded-tl-full bg-gold"></div>

        </div>
      </div>

      {/* Floating Stats Card */}
      <div className="relative mx-auto -mt-16 max-w-6xl px-6 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-3xl bg-white shadow-2xl">

          {STATS.map((item) => (
            <div
              key={item.label}
              className="border-r last:border-r-0 border-gray-200 py-10 text-center"
            >
              <h3 className="text-4xl font-extrabold text-navy">
                {item.number}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}