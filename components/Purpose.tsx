import {
  Target,
  Eye,
  Award,
  ShieldCheck,
  Lightbulb,
  HandHeart,
  Handshake,
  BookOpen,
} from "lucide-react";

const VALUES = [
  { icon: Award, label: "Excellence" },
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: HandHeart, label: "Service" },
  { icon: Handshake, label: "Collaboration" },
  { icon: BookOpen, label: "Lifelong Learning" },
];

export default function Purpose() {
  return (
    <section id="about" className="bg-navy px-6 sm:px-10 lg:px-16 py-12">
      <p className="text-center text-lg font-bold tracking-[0.2em] text-gold">
        OUR PURPOSE
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:divide-x md:divide-white/15">
        <div className="flex gap-4 md:pr-10">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
            <Target className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-bold text-white">OUR MISSION</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              To equip undergraduate and early-career engineers in Nigeria
              with professional, leadership, technical, and career
              development skills that improve employability and prepare them
              for successful engineering careers.
            </p>
          </div>
        </div>

        <div className="flex gap-4 md:pl-10">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
            <Eye className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-bold text-white">OUR VISION</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              To become Nigeria&apos;s leading engineering career development
              organization, producing globally competitive engineers.
            </p>
          </div>
        </div>
      </div>

      {/* Core values card */}
      <div className="mt-10 rounded-xl2 bg-white px-6 sm:px-10 py-8">
        <h4 className="text-center text-sm font-bold tracking-wide text-navy">
          OUR CORE VALUES
        </h4>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-6">
          {VALUES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-6 w-6 text-navy" strokeWidth={1.75} />
              <span className="text-xs font-medium text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
