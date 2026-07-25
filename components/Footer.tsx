import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white px-6 sm:px-10 lg:px-16 py-12">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-extrabold text-lg">
            ENGINEERING <span className="text-gold">CAREER</span>
            <br />
            FOUNDATION
          </h3>
          <p className="mt-3 text-sm text-white/85 leading-relaxed">
            Empowering undergraduate and early-career engineers with the
            skills, mindset and opportunities to thrive.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-wide text-gold">
            QUICK LINKS
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="/#home" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link href="/#about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/#programs" className="hover:text-gold transition-colors">Programs</Link></li>
            <li><Link href="/resources" className="hover:text-gold transition-colors">Resources</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-wide text-gold">
            GET INVOLVED
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            <li><Link href="/join" className="hover:text-gold transition-colors">Join Our Community</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-wide text-gold">
            CONTACT
          </h4>
          <ul className="mt-3 space-y-3 text-sm text-white/90">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a
                href="mailto:info@engineeringcareerfoundation.org"
                className="hover:text-gold transition-colors break-all"
              >
                info@engineeringcareerfoundation.org
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:+2349023133344" className="hover:text-gold transition-colors">
                +234 902 313 3344
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Anambra, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
  <p className="text-xs text-white/50">
    © {new Date().getFullYear()} Engineering Career Foundation. All rights reserved.
  </p>
  <div className="flex items-center gap-4">
  <a href="#" aria-label="Instagram" className="text-white/60 hover:text-gold transition-colors">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.4.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.05.4 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.4 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.35-2.22.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.4a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.35-1.05-.4-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.8.4-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.35 2.22-.4C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.73.07-1.03.05-1.6.22-1.97.36-.5.19-.85.42-1.22.79-.37.37-.6.72-.79 1.22-.14.37-.31.94-.36 1.97-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.05 1.03.22 1.6.36 1.97.19.5.42.85.79 1.22.37.37.72.6 1.22.79.37.14.94.31 1.97.36 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c1.03-.05 1.6-.22 1.97-.36.5-.19.85-.42 1.22-.79.37-.37.6-.72.79-1.22.14-.37.31-.94.36-1.97.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.05-1.03-.22-1.6-.36-1.97a3.3 3.3 0 0 0-.79-1.22 3.3 3.3 0 0 0-1.22-.79c-.37-.14-.94-.31-1.97-.36-1.23-.06-1.58-.07-4.73-.07zm0 4.12a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm0 1.62a3.48 3.48 0 1 0 0 6.96 3.48 3.48 0 0 0 0-6.96zm5.3-3.24a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
    </svg>
  </a>
  <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-gold transition-colors">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  </a>
  <a href="#" aria-label="Twitter" className="text-white/60 hover:text-gold transition-colors">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.24 2.75h3.06l-6.69 7.65 7.87 10.85h-6.16l-4.82-6.3-5.52 6.3H2.92l7.16-8.18L2.53 2.75h6.32l4.36 5.76 5.03-5.76zm-1.08 16.68h1.7L7.15 4.4H5.32l11.84 15.03z" />
    </svg>
  </a>
  <a href="#" aria-label="Facebook" className="text-white/60 hover:text-gold transition-colors">
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.98H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.29.2 2.29.2v2.5h-1.29c-1.27 0-1.67.79-1.67 1.6V12h2.84l-.45 2.89h-2.39v6.98A10 10 0 0 0 22 12z" />
    </svg>
  </a>
</div>
</div>
    </footer>
  );
}