import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function CareerAcceleratorPage() {
  return (
    <main>
      <Navbar />
      <section className="px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">PROGRAM</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-navy">
          Career Accelerator
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          A fast-paced, focused program built for students and graduates
          actively job hunting. Over six weeks, you&apos;ll sharpen your
          application materials, practice interviewing, and connect directly
          with hiring partners looking for engineering talent.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-bold text-navy text-sm">Duration</h3>
            <p className="mt-1 text-sm text-gray-700">6 weeks</p>
          </div>
          <div>
            <h3 className="font-bold text-navy text-sm">Format</h3>
            <p className="mt-1 text-sm text-gray-700">
              Virtual weekly sessions + self-paced work
            </p>
          </div>
          <div>
            <h3 className="font-bold text-navy text-sm">Cost</h3>
            <p className="mt-1 text-sm text-gray-700">Free</p>
          </div>
          <div>
            <h3 className="font-bold text-navy text-sm">Who it&apos;s for</h3>
            <p className="mt-1 text-sm text-gray-700">
              Final-year students and recent graduates job hunting
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-navy">What&apos;s covered</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>• CV and LinkedIn profile optimization</li>
            <li>• Mock interviews with real-time feedback</li>
            <li>• Job search strategy and application tracking</li>
            <li>• Direct introductions to ECF&apos;s hiring partners</li>
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-navy">How to apply</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            New cohorts run quarterly. Apply below to secure your spot —
            space is limited to ensure everyone gets personalized attention.
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