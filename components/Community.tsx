import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Community() {
  return (
    <section id="community" className="relative isolate overflow-hidden">
      <Image
        src="/images/community-group.jpg.jpeg"
        alt="Engineers collaborating around a laptop"
        fill
        loading="eager"
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-navy/80" />

      <div className="px-14 sm:px-10 lg:px-16 py-16">
        <p className="text-xs font-bold tracking-[0.2em] text-gold">
          BE PART OF A MOVEMENT
        </p>
        <h2 className="mt-2 text-4xl font-extrabold text-white">
          Join Our Community
        </h2>
        <p className="mt-2 font-medium text-white/90">
          Connect. Learn. Grow. Lead.
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90">
          Together, we can build a generation of engineers who will shape
          Nigeria and the world.
        </p>

        <a
          href="/join"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
        >
          Join Us Today
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
