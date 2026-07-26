import Image from "next/image";
import { ArrowRight, Users, Briefcase, GraduationCap, Wrench } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Users,
    title: "Industry Mentorship",
  },
  {
    icon: Wrench,
    title: "Technical Training",
  },
  {
    icon: Briefcase,
    title: "Career Development",
  },
  {
    icon: GraduationCap,
    title: "Professional Community",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-navy overflow-hidden">

      <div className="mx-auto max-w-7xl grid lg:grid-cols-2">

        {/* LEFT */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-20">

          <div>

            <p className="uppercase tracking-[0.2em] text-gold font-semibold text-lg">
              Engineering Career Foundation
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Building Nigeria's
              <br />
              Next Generation of
              <span className="block text-gold">
                Industry-Ready Engineers
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-white/80 leading-8 text-lg">
              We prepare undergraduate and early-career engineers
              through mentorship, technical training, career
              development and meaningful industry connections.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#programs"
                className="rounded-lg bg-gold px-7 py-4 text-sm font-semibold text-navy hover:opacity-90 transition"
              >
                Explore Programmes
              </a>

              <a
                href="#community"
                className="rounded-lg border border-white px-7 py-4 text-sm font-semibold text-white hover:bg-white hover:text-navy transition"
              >
                Join Our Community
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative min-h-[500px]">

          <Image
            src="/images/hero-engineers.jpg.jpeg"
            alt="Engineering students"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy/40" />

        </div>

      </div>

      {/* HIGHLIGHTS */}

      <div className="relative z-20 mx-auto max-w-6xl px-6 -mt-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl bg-white shadow-2xl overflow-hidden">

          {HIGHLIGHTS.map(({ icon: Icon, title }) => (

            <div
              key={title}
              className="flex flex-col items-center justify-center p-8 border border-gray-100"
            >
              <Icon className="h-9 w-9 text-gold mb-4" />

              <p className="font-semibold text-center text-navy">
                {title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}