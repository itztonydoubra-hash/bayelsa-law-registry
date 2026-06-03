'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BookOpen,
  Users,
  Briefcase,
  UserCheck,
  TrendingUp,
  ShieldCheck,
  ChevronDown,
  Scale,
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/section-header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#0D1B14] px-6">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1B4332_0%,transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10" />

        <div className="container relative z-10 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-cormorant-garamond font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight"
          >
            {'The Legal Career Pipeline Bayelsa Has Been Missing'.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="font-dm-sans text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Law Registry connects Bayelsa law students with practicing chambers, real mentors, live
            opportunities, and honest career guidance. From your first year to your first brief.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Button
              asChild
              className="bg-[#C9A84C] text-[#0D1B14] hover:bg-[#C9A84C]/90 font-dm-sans font-bold uppercase tracking-widest px-10 py-7 text-sm rounded-none"
            >
              <Link href="/join">Join as a Student</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 font-dm-sans font-bold uppercase tracking-widest px-10 py-7 text-sm rounded-none"
            >
              <Link href="/join">Register Your Chamber</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-12 text-[#C9A84C]/60 font-dm-sans text-xs uppercase tracking-[0.3em]"
          >
            Open to students at NDU, Hensard University, and Faculty of Law Otueke
          </motion.p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-[#C9A84C] opacity-40" />
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-[#F7F5F0]">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="WHY THIS EXISTS"
            title="The System Was Never Built For You"
            description="You spend three to five years studying law. You learn statutes, cases, and legal principles. Nobody tells you which chambers are hiring in Bayelsa. Nobody shows you what a litigation lawyer's week actually looks like or what a corporate lawyer earns at junior level. The entire system runs on who you know. Law Registry changes that."
            light
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                num: '01',
                title: 'No Visibility',
                text: "You don't know which chambers exist, who hires, or what they're looking for. The opportunity is there. The connection isn't.",
              },
              {
                num: '02',
                title: 'No Access',
                text: "Internships and training positions close before you hear about them. The people posting them don't have a channel to reach you either.",
              },
              {
                num: '03',
                title: 'No Roadmap',
                text: 'Nobody gives you an honest picture of what each field of law actually looks like day to day, what it pays, or how to position yourself to get there.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-10 border border-[#C9A84C]/20 bg-white group hover:border-[#C9A84C] transition-all duration-300"
              >
                <span className="font-cormorant-garamond font-bold text-5xl text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors block mb-6">
                  {item.num}
                </span>
                <h3 className="font-cormorant-garamond font-bold text-2xl text-[#1A1A1A] mb-4">
                  {item.title}
                </h3>
                <p className="font-dm-sans text-[#1A1A1A]/70 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#0D1B14]">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="WHAT YOU GET"
            title="Everything the Profession Never Gave You. In One Place."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <TrendingUp />,
                title: 'Clear Career Pathways',
                text: 'Real breakdowns of every major field of law. The actual day-to-day, realistic earnings, and progression timelines.',
              },
              {
                icon: <Users />,
                title: 'Real Mentorship',
                text: 'Structured connections with practicing lawyers in your area of interest. Real feedback and deep dives.',
              },
              {
                icon: <Briefcase />,
                title: 'Actual Opportunities',
                text: 'Live internship and training positions posted by Bayelsa chambers directly to the platform.',
              },
              {
                icon: <UserCheck />,
                title: 'Verified Profile',
                text: 'Your own professional profile visible to chambers and lawyers across Bayelsa. Stop being invisible.',
              },
              {
                icon: <ShieldCheck />,
                title: 'Placement Support',
                text: 'Direct access to real job opportunities. Placement tracking and ongoing mentorship support.',
              },
              {
                icon: <BookOpen />,
                title: 'Honest Information',
                text: 'Financial realities, market insights, and what each path costs before you commit to it.',
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 border border-[#C9A84C]/10 bg-[#1B4332]/20 hover:border-[#C9A84C]/50 transition-all duration-300"
              >
                <div className="text-[#C9A84C] mb-6">{benefit.icon}</div>
                <h3 className="font-cormorant-garamond font-bold text-2xl text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="font-dm-sans text-white/60 leading-relaxed text-sm">{benefit.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Journey Section */}
      <section className="py-24 bg-[#F7F5F0]">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="YOUR PATH"
            title="From First Year to First Brief. Step by Step."
            light
          />

          <div className="max-w-5xl mx-auto">
            {[
              {
                year: 'Year 1 to 2',
                title: 'The Foundation',
                text: "Build a strong academic foundation. Understand the law deeply while exploring the Registry's honest field guides.",
              },
              {
                year: 'Year 2 to 3',
                title: 'The Connection',
                text: 'Join the Registry. Get matched with a mentor. Explore practice areas honestly. Develop employer-wanted skills.',
              },
              {
                year: 'Year 3 to Final',
                title: 'The Placement',
                text: 'Apply through the Registry. Secure an internship or training position with mentor support behind you.',
              },
              {
                year: 'Post-Call',
                title: 'The Practice',
                text: 'Enter pupillage with a clear roadmap and a professional network already in place. First brief handling.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#C9A84C] flex items-center justify-center text-[#C9A84C] font-bold">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="w-0.5 h-full bg-[#C9A84C]/20 my-4" />}
                </div>
                <div className="flex-1 pb-8">
                  <span className="text-[#C9A84C] font-dm-sans font-bold text-xs uppercase tracking-widest">
                    {step.year}
                  </span>
                  <h3 className="font-cormorant-garamond font-bold text-2xl text-[#1A1A1A] mt-2 mb-4">
                    {step.title}
                  </h3>
                  <p className="font-dm-sans text-[#1A1A1A]/70 leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-24 bg-[#1B4332] text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="font-dm-sans font-bold text-[#C9A84C] uppercase tracking-[0.3em] text-xs">
              THE VISION
            </span>
            <h2 className="font-cormorant-garamond font-bold text-4xl md:text-6xl leading-tight">
              Bayelsa First.
              <br />
              Nigeria Next.
            </h2>
            <p className="font-dm-sans text-white/80 text-lg leading-relaxed">
              Bayelsa has three law faculties producing hundreds of graduates every year. Most leave
              because they cannot see opportunity at home. Law Registry fixes it here first. Once
              this works in Bayelsa, it replicates to every state. What we are building is the proof
              of concept for a national legal career infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                { n: '3', t: 'Law Faculties Connected' },
                { n: '8+', t: 'Fields of Law Mapped' },
                { n: '1', t: 'State. The Foundation.' },
              ].map((stat, i) => (
                <div key={i}>
                  <span className="font-cormorant-garamond font-bold text-5xl text-[#C9A84C] block mb-2">
                    {stat.n}
                  </span>
                  <p className="font-dm-sans text-xs uppercase tracking-widest text-white/60">
                    {stat.t}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative aspect-square border border-[#C9A84C]/20 p-8 flex items-center justify-center">
            <Scale className="w-full h-full text-[#C9A84C]/5 absolute" />
            <div className="text-center">
              <p className="font-cormorant-garamond italic text-3xl md:text-4xl text-white/90">
                "Building the Missing Legal Career Pipeline. From Faculty to Bar. Finally."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader label="QUESTIONS" title="What You Need to Know" light />

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: 'Who can join Law Registry?',
                a: 'Any law student currently enrolled at Niger Delta University, Hensard University, or the Faculty of Law Otueke. Any year of study. Free to join during the pilot phase.',
              },
              {
                q: 'How do lawyers and chambers get involved?',
                a: 'Register your chamber through the platform. Post opportunities directly to the Opportunity Board. Opt in to mentorship matching. We handle the structure so you handle the relationship.',
              },
              {
                q: 'Is this affiliated with LAWSAN?',
                a: 'Yes. Law Registry is an initiative under the Directorate of Programs, Policies and Projects (DOPPP) of LAWSAN Bayelsa State.',
              },
              {
                q: 'When does the full platform launch?',
                a: 'The pilot phase launches in Q3 2026. Register now to be among the first students and chambers on the platform.',
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-[#C9A84C]/10">
                <AccordionTrigger className="font-cormorant-garamond font-bold text-xl text-[#1A1A1A] hover:no-underline hover:text-[#C9A84C] text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-dm-sans text-[#1A1A1A]/70 text-lg py-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0D1B14] relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-cormorant-garamond font-bold text-4xl md:text-6xl text-white mb-8">
            Don't Graduate Into the Dark.
          </h2>
          <p className="font-dm-sans text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join the Registry. Get the roadmap. Build the career. Register now for early access to
            the pilot launch.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button
              asChild
              className="bg-[#C9A84C] text-[#0D1B14] hover:bg-[#C9A84C]/90 font-dm-sans font-bold uppercase tracking-widest px-12 py-7 rounded-none"
            >
              <Link href="/join">Join the Waitlist</Link>
            </Button>
          </div>
          <p className="mt-8 text-white/40 font-dm-sans text-xs uppercase tracking-widest">
            Free to join. Just real opportunities and honest guidance.
          </p>
        </div>
      </section>
    </div>
  );
}
