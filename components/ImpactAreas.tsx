import { Briefcase, Users2, Monitor, Lightbulb, Award, Building2 } from "lucide-react";

const AREAS = [
  { icon: Briefcase, title: "Career Readiness", items: ["CV reviews", "Interview prep", "LinkedIn optimization"] },
  { icon: Users2, title: "Mentorship", items: ["3-month mentorship", "Career coaching", "Industry guidance"] },
  { icon: Monitor, title: "Industry Skills", items: ["AutoCAD", "SolidWorks", "MATLAB, Python"] },
  { icon: Lightbulb, title: "Innovation", items: ["Engineering challenges", "Hackathons", "Student projects"] },
  { icon: Award, title: "Leadership", items: ["Public speaking", "Professional ethics", "Time management"] },
  { icon: Building2, title: "Industry Exposure", items: ["Factory visits", "Internships", "Industry networking"] },
];

export default function ImpactAreas() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-14 border-t border-white-100">
      <p className="text-xs font-bold tracking-[0.2em] text-gold text-center">
        OUR IMPACT AREAS
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {AREAS.map(({ icon: Icon, title, items }, i) => (
          <div
            key={title}
            className={`rounded-lg border border-gray-200 p-5 ${
              i % 2 === 0 ? "" : "bg-gold/5"
            }`}
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                i % 2 === 0 ? "bg-navy text-white" : "bg-gold text-navy"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-3 font-bold text-navy text-sm">{title}</h3>
            <ul className="mt-2 space-y-1">
              {items.map((item) => (
                <li key={item} className="text-xs text-white-800">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}