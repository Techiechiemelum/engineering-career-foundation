import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FileText, Video, Link as LinkIcon, BookOpen } from "lucide-react";
export const metadata = {
  title: "Resources",
  description: "CV templates, workshop recordings, reading lists, and tools to support your engineering career.",
};

const RESOURCES = [
  {
  icon: FileText,
  title: "CV & LinkedIn Templates",
  body: "Downloadable templates to help you build a standout engineering resume and profile.",
  link: "https://drive.google.com/drive/folders/17LHdyvX_w9PPcn0EbXe8eQkyPWIytHbe?usp=sharing",
},
  {
  icon: Video,
  title: "Workshop Recordings",
  body: "Replays of past sessions on leadership, technical skills, and career growth.",
  link: "https://drive.google.com/drive/folders/17mBeU4_z6UT555meH1u2lFb8wByyMVHC?usp=sharing",
},
  {
    icon: BookOpen,
    title: "Reading List",
    body: "Curated articles and books recommended by our mentors and industry partners.",
    link: "/blog",
  },
  {
  icon: LinkIcon,
  title: "External Tools",
  body: "Job boards, certification platforms, and other links our community relies on.",
  tools: [
    { label: "Jobberman", href: "https://www.jobberman.com" },
    { label: "LinkedIn Jobs", href: "https://www.linkedin.com/jobs" },
    { label: "Coursera", href: "https://www.coursera.org" },
    { label: "GitHub", href: "https://github.com" },
  ],
},
];

export default function ResourcesPage() {
  return (
    <main>
      <Navbar />

      <section className="px-6 sm:px-10 lg:px-16 py-16 max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">
          FOR OUR COMMUNITY
        </p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-navy">
          Resources
        </h1>
        <p className="mt-4 max-w-xl text-gray-700 leading-relaxed">
          Tools, templates, and materials to support your growth as an
          early-career engineer.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {RESOURCES.map(({ icon: Icon, title, body, link, tools }) => {
  const CardContent = (
    <>
      <Icon className="h-6 w-6 text-navy" strokeWidth={1.75} />
      <h3 className="mt-3 font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-700">
        {body}
      </p>
    </>
  );

  if (tools) {
    return (
      <div
        key={title}
        className="rounded-lg border border-gray-200 p-6"
      >
        {CardContent}
        <ul className="mt-4 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <li key={tool.label}>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-navy border border-gray-300 rounded-full px-3 py-1.5 hover:border-gold hover:text-gold transition-colors inline-block"
              >
                {tool.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return link ? (
    <Link
      key={title}
      href={link}
      className="rounded-lg border border-gray-200 p-6 hover:border-gold transition-colors block"
    >
      {CardContent}
    </Link>
  ) : (
    <div
      key={title}
      className="rounded-lg border border-gray-200 p-6 hover:border-gold transition-colors"
    >
      {CardContent}
    </div>
  );
})}
        </div>
      </section>
    </main>
  );
}