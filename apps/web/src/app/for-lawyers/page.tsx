'use client';

import SectionHeader from '@/components/section-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, PlusCircle, Network, History } from 'lucide-react';

export default function ForLawyersPage() {
  const benefits = [
    {
      icon: <Search className="w-8 h-8 text-[#C9A84C]" />,
      title: 'Pre-Vetted Student Profiles',
      text: 'Browse students filtered by faculty, year, and area of interest. See who they are before you commit to anything.',
    },
    {
      icon: <PlusCircle className="w-8 h-8 text-[#C9A84C]" />,
      title: 'Opportunity Board Access',
      text: 'Post internship and training positions directly to students across all three Bayelsa faculties. Reach everyone at once.',
    },
    {
      icon: <Network className="w-8 h-8 text-[#C9A84C]" />,
      title: 'Structured Mentorship Framework',
      text: 'We provide the structure so the mentorship relationship has clear expectations from day one. You provide the expertise.',
    },
    {
      icon: <History className="w-8 h-8 text-[#C9A84C]" />,
      title: 'Early Talent Pipeline',
      text: 'Identify and build relationships with your best candidates before they graduate. Stop competing for them after they pass the bar.',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-[#F7F5F0] py-24 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-cormorant-garamond font-bold text-5xl md:text-7xl text-[#1A1A1A] mb-8"
            >
              Find the Right Junior. Without the Lagos Hunt.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-dm-sans text-xl text-[#1A1A1A]/70 leading-relaxed mb-8"
            >
              Bayelsa's law faculties produce strong graduates every year. Law Registry makes them
              visible to you before they look elsewhere.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="font-dm-sans text-lg text-[#1A1A1A]/60 leading-relaxed mb-10"
            >
              Right now, finding and training junior lawyers costs you time you do not have. Local
              talent was never visible. Law Registry changes that. We bring the pipeline to you.
            </motion.p>
          </div>
          <div className="bg-[#0D1B14] p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/10 rounded-full -mr-16 -mt-16" />
            <h3 className="font-cormorant-garamond font-bold text-3xl text-white mb-6 italic">
              "The Talent Is Here. It Just Has Not Been Visible."
            </h3>
            <p className="text-white/60 font-dm-sans leading-relaxed mb-8">
              Bayelsa's three faculties produce motivated graduates who leave primarily because
              local practitioners never reached them early enough.
            </p>
            <div className="h-[1px] bg-[#C9A84C]/20 w-full mb-8" />
            <p className="text-[#C9A84C] font-dm-sans font-bold uppercase tracking-widest text-xs">
              Bridging the Bar Initiative
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader label="PARTNERSHIP BENEFITS" title="What Your Chamber Gets" light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="p-10 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-300 bg-[#F7F5F0]/50"
              >
                <div className="mb-6">{b.icon}</div>
                <h3 className="font-cormorant-garamond font-bold text-2xl text-[#1A1A1A] mb-4">
                  {b.title}
                </h3>
                <p className="font-dm-sans text-[#1A1A1A]/70 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 bg-[#0D1B14]">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader label="GET STARTED" title="Become a Registry Partner Chamber" />
          <div className="max-w-2xl mx-auto mb-16 space-y-4 text-white/60 font-dm-sans">
            <p>• Register a verified chamber profile</p>
            <p>• Post internship and training opportunities</p>
            <p>• Accept interns through the platform structure</p>
            <p>• Participating in mentorship matching</p>
            <p className="text-[#C9A84C] font-bold pt-4">Free to join during the pilot phase</p>
          </div>

          <div className="relative group inline-block">
            <Button
              disabled
              className="bg-[#C9A84C]/50 text-[#0D1B14] font-dm-sans font-bold uppercase tracking-widest px-12 py-7 rounded-none cursor-not-allowed"
            >
              Register Your Chamber
            </Button>
            <div className="absolute inset-0 bg-[#0D1B14]/80 backdrop-blur-[2px] flex items-center justify-center text-white font-dm-sans font-bold text-xs uppercase tracking-[0.2em]">
              Launching Soon
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
