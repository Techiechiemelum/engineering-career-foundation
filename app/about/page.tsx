import Navbar from "@/components/Navbar";
import { Target, Eye, Award, ShieldCheck, Lightbulb, HandHeart, Handshake, BookOpen } from "lucide-react";
export const metadata = {
  title: "About Us",
  description: "Learn about Engineering Career Foundation's mission, vision, and impact preparing Nigerian engineers for successful careers.",
};

const VALUES = [
  { icon: Award, label: "Excellence" },
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: HandHeart, label: "Service" },
  { icon: Handshake, label: "Collaboration" },
  { icon: BookOpen, label: "Lifelong Learning" },
];

const STATS = [
  { number: "500+", label: "Students Trained" },
  { number: "30+", label: "Industry Mentors" },
  { number: "15+", label: "University Partners" },
  { number: "85%", label: "Career Readiness Satisfaction" },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">ABOUT US</p>
        <h1 className="mt-2 text-4xl sm:text-4xl font-extrabold text-navy">
          Bridging Engineering Education and Industry
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Engineering Career Foundation (ECF) is a nonprofit organization
          dedicated to preparing engineering students and graduates for
          successful careers through mentorship, practical technical
          training, leadership development and industry partnerships.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We started ECF because too many talented Nigerian engineers were
          graduating with strong technical foundations but limited exposure
          to the practical, professional and leadership skills employers
          look for. Our programs close that gap connecting students and
          early-career engineers directly with mentors, industry tools and
          real-world opportunities.
        </p>
      </section>

      <section className="bg-navy px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid gap-10 sm:grid-cols-2 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
              <Target className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">OUR MISSION</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                To equip undergraduate and early-career engineers in Nigeria
                with professional, leadership, technical and career
                development skills that improve employability and prepare
                them for successful engineering careers.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
              <Eye className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">OUR VISION</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                To become Nigeria&apos;s leading engineering career
                development organization, producing globally competitive
                engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 py-14 border-t border-gray-100">
        <p className="text-xs font-bold tracking-[0.2em] text-gold text-center">
          OUR IMPACT
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
          {STATS.map(({ number, label }) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-navy">{number}</p>
              <p className="mt-1 text-xs text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 py-14 border-t border-gray-100">
        <h2 className="text-sm font-bold tracking-wide text-navy text-center">
          OUR CORE VALUES
        </h2>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {VALUES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-6 w-6 text-navy" strokeWidth={1.75} />
              <span className="text-xs font-medium text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}