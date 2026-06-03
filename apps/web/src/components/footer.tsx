import Link from 'next/link';
import { Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D1B14] border-t border-[#C9A84C]/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Scale className="text-[#C9A84C] w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-cormorant-garamond font-bold text-white uppercase tracking-wider text-lg leading-none">
                  Bayelsa Law
                </span>
                <div className="h-[1px] bg-[#C9A84C] my-1 w-full" />
                <span className="font-cormorant-garamond font-bold text-white uppercase tracking-[0.25em] text-sm leading-none">
                  Registry
                </span>
              </div>
            </Link>
            <p className="text-white/60 font-dm-sans text-sm leading-relaxed">
              Building the Missing Legal Career Pipeline. From Faculty to Bar. Finally.
            </p>
            <p className="text-[#C9A84C] font-dm-sans text-xs uppercase tracking-widest font-bold">
              An initiative under LAWSAN DOPPP Bayelsa State
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-cormorant-garamond font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {[
                'Home',
                'For Students',
                'For Lawyers',
                'Career Pathways',
                'Opportunity Board',
                'About',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, '-') === 'home' ? '' : item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-white/60 hover:text-[#C9A84C] font-dm-sans text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Pathways */}
          <div>
            <h4 className="text-white font-cormorant-garamond font-bold text-lg mb-6">Pathways</h4>
            <ul className="space-y-4">
              {['Corporate Law', 'Litigation', 'Arbitration & ADR', 'Human Rights Law'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/pathways"
                      className="text-white/60 hover:text-[#C9A84C] font-dm-sans text-sm transition-colors"
                    >
                      {item} guide
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-cormorant-garamond font-bold text-lg mb-6">Connect</h4>
            <div className="space-y-4">
              <p className="text-white/60 font-dm-sans text-sm">
                Directorate of Programs, Policies and Projects (DOPPP)
                <br />
                LAWSAN Bayelsa State
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-white/80 font-dm-sans text-sm">WhatsApp: +234 ...</span>
                <span className="text-white/80 font-dm-sans text-sm">
                  Email: info@bayelsalawregistry.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-dm-sans text-xs">
            © 2026 Bayelsa Law Registry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://lawstudybuddy.online"
              target="_blank"
              className="text-white/40 hover:text-white/60 text-xs font-dm-sans flex items-center gap-2"
            >
              Part of the LawStudyBuddy ecosystem
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
