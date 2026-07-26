import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROGRAMS = [
  {
    title: "Engineering Mentorship Program",
    body: "Three-month mentorship with experienced engineers to guide your career journey.",
    image: "/images/engineering-mentorship-program.jpeg",
    href: "/programs/mentorship",
  },
  {
    title: "Career Accelerator",
    body: "Helping students secure internships, graduate roles and career advancement.",
    image: "/images/career-accelerator.jpeg",
    highlight: true,
    href: "/programs/career-accelerator",
  },
  {
    title: "Engineering Skills Bootcamp",
    body: "Hands-on training in industry-relevant tools and practical skills.",
    image: "/images/engineering-skills-boot-camp.jpg.jpeg",
    href: "/programs/skills-bootcamp",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="px-6 sm:px-10 lg:px-16 py-20 border-t border-white-100">
      <p className="text-xs font-bold tracking-[0.2em] text-gold">WHAT WE DO</p>
      <h2 className="mt-2 text-4xl font-extrabold text-navy">Our Programs</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {PROGRAMS.map(({ title, body, image, highlight, href }) => (
          <Link
            key={title}
            href={href}
            className="relative isolate overflow-hidden rounded-lg min-h-[220px] flex flex-col justify-end p-5 group"
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover -z-10 group-hover:scale-105 transition-transform"
            />
            <div
              className={`absolute inset-0 -z-10 ${
                highlight ? "bg-gold/80" : "bg-navy/80"
              }`}
            />
            <h3 className="font-bold text-white">{title}</h3>
            <p className="mt-1 text-xs text-white/100 leading-relaxed">
              {body}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white">
              Learn More <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}