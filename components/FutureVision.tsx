import Image from "next/image";

export default function FutureVision() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/skyline-engineer.jpg.jpeg"
        alt="Engineer in safety vest overlooking a city skyline"
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/70 to-transparent" />

      <div className="px-6 sm:px-10 lg:px-16 py-16 max-w-md">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">
          THE FUTURE WE SEE
        </p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navy">
          Building Today,
          <br />
          Transforming Tomorrow.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#1a2440] font-medium">
          We envision a future where Nigerian engineers are confident,
          competent and globally respected professionals driving innovation
          and national development.
        </p>
      </div>
    </section>
  );
}