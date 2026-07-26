import Navbar from "@/components/Navbar";
import Link from "next/link";
export const metadata = {
  title: "Engineering Mentorship Program",
  description: "A three-month mentorship pairing you with experienced engineers to guide your career journey.",
};

export default function MentorshipPage() {
  return (
    <main>
      <Navbar />
      <section className="px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">PROGRAM</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-navy">
          Engineering Mentorship Program
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          A structured, three-month mentorship pairing undergraduate and
          early-career engineers with experienced professionals in their
          field. Whether you&apos;re unsure about your career direction or
          want guidance navigating your first years on the job, this program
          gives you a dedicated mentor in your corner.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-bold text-navy text-sm">Duration</h3>
            <p className="mt-1 text-sm text-gray-700">3 months</p>
          </div>
          <div>
            <h3 className="font-bold text-navy text-sm">Format</h3>
            <p className="mt-1 text-sm text-gray-700">
              Hybrid — virtual check-ins, occasional in-person meetups
            </p>
          </div>
          <div>
            <h3 className="font-bold text-navy text-sm">Cost</h3>
            <p className="mt-1 text-sm text-gray-700">Free</p>
          </div>
          <div>
            <h3 className="font-bold text-navy text-sm">Who it&apos;s for</h3>
            <p className="mt-1 text-sm text-gray-700">
              Undergraduate students and engineers in their first 1–3 years
              of work
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-navy">What&apos;s covered</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>• One-on-one mentorship matched to your engineering discipline</li>
            <li>• Monthly goal-setting and progress check-ins</li>
            <li>• Guidance on navigating workplace challenges</li>
            <li>• Access to ECF&apos;s broader mentor and alumni network</li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-navy">How to apply</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Applications open at the start of each cohort. Submit your
            interest below and our team will reach out with next steps,
            including a short intake form to help us match you with the
            right mentor.
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