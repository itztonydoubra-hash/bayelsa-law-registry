'use client';

import SectionHeader from '@/components/section-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const pathways = [
  {
    id: 'corporate',
    name: 'Corporate and Commercial Law',
    desc: 'Advise businesses on operations, contracts, and regulatory compliance.',
    status: 'built',
  },
  {
    id: 'litigation',
    name: 'Litigation',
    desc: 'Represent clients in courtroom proceedings across civil and criminal matters.',
    status: 'built',
  },
  {
    id: 'arbitration',
    name: 'Arbitration and ADR',
    desc: 'The growing alternative to traditional litigation in Nigeria.',
    status: 'soon',
  },
  {
    id: 'human-rights',
    name: 'Public Interest and Human Rights Law',
    desc: 'Advocating for justice and protecting fundamental rights.',
    status: 'soon',
  },
  {
    id: 'government',
    name: 'Government and Public Sector Law',
    desc: 'Working within the institutional frameworks of the state.',
    status: 'soon',
  },
  {
    id: 'academic',
    name: 'Academic Law',
    desc: 'The pursuit of legal scholarship, research, and education.',
    status: 'soon',
  },
  {
    id: 'oil-gas',
    name: 'Oil and Gas Law - Bayelsa Focus',
    desc: 'The specialized legal reality of the heart of the Niger Delta.',
    status: 'soon',
  },
  {
    id: 'criminal',
    name: 'Criminal Law and Defence',
    desc: 'The front lines of the Nigerian justice system.',
    status: 'soon',
  },
];

export default function PathwaysPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F7F5F0]">
      {/* Hero */}
      <section className="bg-[#0D1B14] py-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cormorant-garamond font-bold text-5xl md:text-7xl text-white mb-8"
          >
            Every Field of Law. The Real Version.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-dm-sans text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            Not the romanticized version. The actual day-to-day reality, realistic earnings, honest
            progression timelines, and exactly what you need to start doing right now to get there.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pathways.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white border border-[#C9A84C]/10 p-8 flex flex-col h-[320px] hover:border-[#C9A84C]/40 transition-all duration-300"
              >
                <h3 className="font-cormorant-garamond font-bold text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#C9A84C] transition-colors">
                  {p.name}
                </h3>
                <p className="font-dm-sans text-[#1A1A1A]/60 text-sm leading-relaxed mb-8">
                  {p.desc}
                </p>

                <div className="mt-auto">
                  {p.status === 'built' ? (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 font-dm-sans font-bold uppercase tracking-widest text-xs py-5 rounded-none"
                    >
                      <Link href={`/pathways/${p.id}`}>Read the Full Guide</Link>
                    </Button>
                  ) : (
                    <div className="relative">
                      <Button
                        disabled
                        className="w-full bg-[#1B4332]/10 text-[#1B4332]/40 font-dm-sans font-bold uppercase tracking-widest text-xs py-5 rounded-none cursor-not-allowed"
                      >
                        Read the Full Guide
                      </Button>
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex items-center justify-center text-[#1B4332] font-dm-sans font-bold text-[10px] uppercase tracking-[0.2em]">
                        Launching Soon
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist callout for pathways */}
      <section className="py-24 bg-[#1B4332] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-cormorant-garamond font-bold text-3xl md:text-5xl mb-8">
            Can't see your field yet?
          </h2>
          <p className="font-dm-sans text-white/70 mb-12 max-w-xl mx-auto">
            We are mapping every major legal field in Nigeria with Bayelsa-specific insights. Join
            the Registry to be notified as new guides drop.
          </p>
          <Button
            asChild
            className="bg-[#C9A84C] text-[#0D1B14] hover:bg-[#C9A84C]/90 font-dm-sans font-bold uppercase tracking-widest px-10 py-7 rounded-none"
          >
            <Link href="/join">Get Notified</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
