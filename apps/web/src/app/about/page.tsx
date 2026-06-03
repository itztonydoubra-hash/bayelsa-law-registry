'use client';

import SectionHeader from '@/components/section-header';
import { Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
            Built by a Law Student Who Got Tired of Waiting.
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg font-dm-sans text-[#1A1A1A]/70 leading-relaxed space-y-8">
            <p>
              Bayelsa Law Registry was built by <strong>Tony Tamaradoubra</strong>, a final-year LLB
              student at Niger Delta University and Bayelsa State Director under the Directorate of
              Programs, Policies and Projects (DOPPP) of LAWSAN.
            </p>
            <p>
              It exists because the pipeline between Bayelsa's three law faculties and the
              practicing bar was broken and nobody was building the infrastructure to fix it. The
              opportunity is here. The talent is here. What was missing was a system that made them
              visible to each other. This is that system.
            </p>
            <blockquote className="font-cormorant-garamond italic text-3xl text-[#1A1A1A] border-l-4 border-[#C9A84C] pl-8 py-4 my-12">
              "We stop hoping something works. We start building toward something specific."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Institutional Backing */}
      <section className="py-24 bg-[#1B4332] text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <SectionHeader label="AUTHORITY" title="This Is Not Just a Student Project" />
          <p className="font-dm-sans text-xl text-white/70 mb-16 leading-relaxed">
            Law Registry operates under the mandate of LAWSAN's Directorate of Programs, Policies
            and Projects (DOPPP), Bayelsa State. That institutional positioning means this platform
            has the authority to operate across all three Bayelsa law faculties, engage with the NBA
            Bayelsa Branch, and formalize partnerships with practicing chambers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-60">
            {[
              'LAWSAN DOPPP Bayelsa State',
              'Niger Delta University',
              'Hensard University',
              'Faculty of Law Otueke',
            ].map((inst, i) => (
              <div
                key={i}
                className="border border-white/20 px-6 py-4 font-dm-sans font-bold text-xs uppercase tracking-[0.3em]"
              >
                {inst}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeader label="FUTURE" title="Bayelsa Is the Beginning" light />
          <p className="font-dm-sans text-[#1A1A1A]/70 text-lg leading-relaxed mb-12">
            Once the model is validated here, it replicates to every state. What we are building is
            the proof of concept for a national legal career infrastructure. Three faculties today.
            Thirty-six states eventually.
          </p>
          <div className="flex items-center justify-center gap-4 text-[#C9A84C]">
            <Scale className="w-12 h-12" />
          </div>
        </div>
      </section>

      {/* Team (Soon) */}
      <section className="py-24 bg-[#F7F5F0]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto border border-[#C9A84C]/20 p-16 text-center bg-white relative overflow-hidden">
            <h2 className="font-cormorant-garamond font-bold text-3xl text-[#1A1A1A] mb-4">
              The Registry Team
            </h2>
            <p className="font-dm-sans text-[#1A1A1A]/60 mb-0">
              The full team will be listed here at launch.
            </p>
            <div className="absolute inset-0 bg-[#0D1B14]/5 flex items-center justify-center backdrop-blur-[1px]">
              <span className="font-dm-sans font-bold text-[#C9A84C] uppercase tracking-[0.3em] text-xs">
                Launching Soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
