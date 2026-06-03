'use client';

import SectionHeader from '@/components/section-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Compass,
  Target,
  Map,
  Zap,
  GraduationCap,
  MessageSquare,
  ChevronRight,
} from 'lucide-react';

export default function ForStudentsPage() {
  const benefits = [
    {
      icon: <Map className="w-8 h-8 text-[#C9A84C]" />,
      title: 'Clear Career Pathways',
      text: 'Real breakdowns of every major field of law. Not the romanticized version. The actual day-to-day, realistic earnings, progression timelines, and exactly what you need to do right now.',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#C9A84C]" />,
      title: 'Real Mentorship',
      text: 'Structured connections with practicing lawyers in your area of interest. Real feedback. Case study deep dives. Hands-on guidance from people actually doing the work.',
    },
    {
      icon: <Zap className="w-8 h-8 text-[#C9A84C]" />,
      title: 'Actual Opportunities',
      text: 'Live internship and training positions posted by Bayelsa chambers directly to the platform. You see them when they open, not after they close.',
    },
    {
      icon: <Target className="w-8 h-8 text-[#C9A84C]" />,
      title: 'Verified Profile',
      text: 'Your own professional profile visible to chambers and lawyers across Bayelsa. You stop being invisible to the people who could change your career.',
    },
    {
      icon: <Compass className="w-8 h-8 text-[#C9A84C]" />,
      title: 'Placement Support',
      text: 'Direct access to real job opportunities. Placement tracking. Ongoing mentorship through your critical early years in practice.',
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#C9A84C]" />,
      title: 'Honest Information',
      text: 'We help you understand whether you actually want this career. Financial realities, market insights, and what each path costs before you commit to it.',
    },
  ];

  const steps = [
    {
      title: 'Create your profile',
      desc: 'Name, faculty, year, areas of interest. It takes 2 minutes.',
    },
    {
      title: 'Explore Career Pathways',
      desc: 'Find the fields that match what you actually want based on real data.',
    },
    {
      title: 'Browse the Opportunity Board',
      desc: 'See what chambers are offering right now across Bayelsa.',
    },
    {
      title: 'Request Mentorship',
      desc: 'Get matched with a practicing lawyer in your area of interest.',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-[#0D1B14] py-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cormorant-garamond font-bold text-5xl md:text-7xl text-white mb-8"
          >
            Your Career Starts Here. Not After Graduation.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-dm-sans text-xl text-white/70 leading-relaxed mb-10"
          >
            Law Registry gives you the visibility, mentorship, real opportunities, and honest career
            guidance that law school was never designed to provide.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader label="FOR STUDENTS" title="Everything You Need to Build a Career" light />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="p-8 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-300"
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

      {/* The Honest Picture */}
      <section className="py-24 bg-[#F7F5F0]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-cormorant-garamond font-bold text-4xl text-[#1A1A1A] mb-8">
            The Honest Picture: What We Will Not Do
          </h2>
          <p className="font-dm-sans text-lg text-[#1A1A1A]/70 leading-relaxed mb-12">
            We will not tell you law is glamorous when it is hard. We will not hide salary realities
            or pretend every path leads to a Lagos commercial firm. We will not give you vague
            inspiration when you need specific direction. The Career Pathways section exists because
            you deserve the honest version of what you are walking into.
          </p>
          <div className="bg-white p-8 border border-[#C9A84C]/20 inline-block text-left">
            <h4 className="font-dm-sans font-bold text-xs uppercase tracking-widest text-[#C9A84C] mb-4">
              ELIGIBILITY
            </h4>
            <ul className="space-y-2 font-dm-sans text-[#1A1A1A]/80">
              <li>
                • Open to all law students at NDU, Hensard University, and Faculty of Law Otueke
              </li>
              <li>• Any year of study (Year 1 through Final Year)</li>
              <li>• Free to join during pilot phase</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader label="THE PROCESS" title="How to Join the Registry" light />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-12 h-12 rounded-full bg-[#1B4332] text-[#C9A84C] flex items-center justify-center font-bold mx-auto mb-6">
                  {i + 1}
                </div>
                <h3 className="font-cormorant-garamond font-bold text-xl text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>
                <p className="font-dm-sans text-[#1A1A1A]/60 text-sm">{step.desc}</p>
                {i < 3 && (
                  <ChevronRight className="hidden md:block absolute top-6 -right-4 text-[#C9A84C]/20" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-20 text-center relative group inline-block left-1/2 -translate-x-1/2">
            <Button
              disabled
              className="bg-[#C9A84C]/50 text-[#0D1B14] font-dm-sans font-bold uppercase tracking-widest px-12 py-7 rounded-none cursor-not-allowed"
            >
              Create Your Profile
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
