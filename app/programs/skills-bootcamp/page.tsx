import Navbar from "@/components/Navbar";
import Link from "next/link";
export const metadata = {
  title: "Engineering Skills Bootcamp",
  description: "Hands-on training in industry-relevant tools and practical engineering skills.",
};

export default function SkillsBootcampPage() {
  return (
    <main>
      <Navbar />
      <section className="px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">PROGRAM</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-navy">
          Engineering Skills Bootcamp
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          An intensive, hands-on bootcamp focused on the practical tools and
          technical skills engineers use on the job — not just theory. Build
          real project work you can showcase to employers.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-bold text-navy text-sm">Duration</h3>
            <p className="mt-1 text-sm text-gray-700">4 weeks</p>
          </div>
          <div>
            <h3 className="font-bold text-navy text-sm">Format</h3>
            <p className="mt-1 text-sm text-gray-700">
              In-person, with virtual support sessions
            </p>
          </div>
          <div>
            <h3 className="font-bold text-navy text-sm">Cost</h3>
            <p className="mt-1 text-sm text-gray-700">Free</p>
          </div>
          <div>
            <h3 className="font-bold text-navy text-sm">Who it&apos;s for</h3>
            <p className="mt-1 text-sm text-gray-700">
              Engineering students wanting practical, job-ready skills
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-navy">What&apos;s covered</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>• Hands-on training in tools like AutoCAD, SolidWorks, MATLAB, Python</li>
            <li>• A real capstone project you build from start to finish</li>
            <li>• Peer collaboration and code/design reviews</li>
            <li>• A certificate of completion to add to your CV</li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-navy">How to apply</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Bootcamps run twice a year. Apply below and our team will follow
            up with schedule details and prerequisites for the upcoming
            cohort.
          </p>
        </div>

        <Link
          href="/join"
          className="mt-8 inline-block rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
        >
          Apply for This Program
        </Link>
      </section>
    </main>
  );
}