import SectionHeader from '@/components/section-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Clock, DollarSign, Lightbulb, Zap } from 'lucide-react';

export default function CorporatePathway() {
  return (
    <div className="pt-24 min-h-screen bg-[#F7F5F0]">
      <section className="bg-[#0D1B14] py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="font-dm-sans font-bold text-[#C9A84C] uppercase tracking-[0.3em] text-xs mb-6 block">
            CAREER PATHWAY
          </span>
          <h1 className="font-cormorant-garamond font-bold text-5xl md:text-7xl text-white mb-8">
            Corporate and Commercial Law
          </h1>
          <p className="font-dm-sans text-xl text-white/70 leading-relaxed">
            Advise businesses and organizations on legal matters affecting their operations. Problem
            solvers for business, not courtroom advocates.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* What it is */}
              <div>
                <h2 className="font-cormorant-garamond font-bold text-3xl text-[#1A1A1A] mb-6 flex items-center gap-3">
                  <Lightbulb className="text-[#C9A84C]" /> What It Actually Is
                </h2>
                <p className="font-dm-sans text-lg text-[#1A1A1A]/70 leading-relaxed">
                  Corporate lawyers advise businesses and organizations on legal matters affecting
                  their operations. In practice this means reviewing and drafting contracts,
                  advising on regulatory compliance, supporting mergers and acquisitions, and
                  sitting in on negotiations between commercial parties. You are a problem solver
                  for business, not a courtroom advocate.
                </p>
              </div>

              {/* Day in the life */}
              <div className="bg-white p-10 border border-[#C9A84C]/10">
                <h2 className="font-cormorant-garamond font-bold text-3xl text-[#1A1A1A] mb-6 flex items-center gap-3">
                  <Clock className="text-[#C9A84C]" /> A Day in the Life
                </h2>
                <p className="font-dm-sans text-[#1A1A1A]/70 leading-relaxed italic">
                  Morning reviewing a draft agreement for a logistics startup, afternoon in a client
                  meeting discussing a joint venture, evening revising a contract after a long
                  negotiation call. No courtrooms, mostly documents, precision, and strategic calls.
                </p>
              </div>

              {/* Earnings */}
              <div>
                <h2 className="font-cormorant-garamond font-bold text-3xl text-[#1A1A1A] mb-6 flex items-center gap-3">
                  <DollarSign className="text-[#C9A84C]" /> Realistic Earnings in Nigeria
                </h2>
                <div className="space-y-4">
                  {[
                    { label: 'Junior level (0-3 years)', val: 'N80,000 to N250,000 monthly' },
                    { label: 'Mid level (3-7 years)', val: 'N300,000 to N700,000 monthly' },
                    { label: 'Senior level', val: 'N1,000,000 and above' },
                  ].map((e, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-[#C9A84C]/10 pb-4"
                    >
                      <span className="font-dm-sans font-bold text-[#1A1A1A]/80">{e.label}</span>
                      <span className="font-dm-sans text-[#C9A84C] font-bold">{e.val}</span>
                    </div>
                  ))}
                  <p className="text-xs text-[#1A1A1A]/40 font-dm-sans pt-4 italic">
                    * Figures vary significantly by firm size and location. Lagos/Abuja benchmarks
                    are generally higher than regional averages.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="font-cormorant-garamond font-bold text-3xl text-[#1A1A1A] mb-6">
                  Skills to Develop Now
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Contract drafting',
                    'Understanding of CAMA 2020',
                    'Financial literacy',
                    'Negotiation awareness',
                    'Legal writing precision',
                    'Business structures',
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-3 font-dm-sans text-[#1A1A1A]/70">
                      <CheckCircle className="w-5 h-5 text-[#1B4332]" /> {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-[#1B4332] text-white p-8">
                <h3 className="font-cormorant-garamond font-bold text-2xl mb-4">
                  The "Corporate Baddie" Reality
                </h3>
                <p className="font-dm-sans text-sm text-white/70 leading-relaxed mb-6">
                  The aesthetic is real but it comes after the work. Junior corporate lawyers spend
                  years reading documents, drafting agreements, and building commercial awareness.
                  The lifestyle follows competence, not the other way around. Start with the skill
                  set.
                </p>
                <div className="h-[1px] bg-white/10 w-full mb-6" />
                <p className="font-dm-sans font-bold text-xs uppercase tracking-widest text-[#C9A84C]">
                  THE GRIND BEFORE THE GLAMOUR
                </p>
              </div>

              <div className="bg-white p-8 border border-[#C9A84C]/20">
                <h3 className="font-cormorant-garamond font-bold text-2xl text-[#1A1A1A] mb-6">
                  What You Should Be Doing Right Now
                </h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-[#C9A84C] font-bold text-xs font-dm-sans block mb-2 uppercase">
                      YEAR 1-2
                    </span>
                    <p className="text-sm font-dm-sans text-[#1A1A1A]/70">
                      Master the law of contract. Start reading business news daily.
                    </p>
                  </div>
                  <div>
                    <span className="text-[#C9A84C] font-bold text-xs font-dm-sans block mb-2 uppercase">
                      YEAR 3-4
                    </span>
                    <p className="text-sm font-dm-sans text-[#1A1A1A]/70">
                      Study CAMA 2020. Seek commercial chamber internships.
                    </p>
                  </div>
                  <div>
                    <span className="text-[#C9A84C] font-bold text-xs font-dm-sans block mb-2 uppercase">
                      FINAL YEAR
                    </span>
                    <p className="text-sm font-dm-sans text-[#1A1A1A]/70">
                      Refine legal drafting. Build a commercial-focused profile.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  disabled
                  className="w-full bg-[#C9A84C]/50 text-[#0D1B14] font-dm-sans font-bold uppercase tracking-widest py-6 rounded-none relative overflow-hidden"
                >
                  Connect With a Mentor
                  <div className="absolute inset-0 bg-[#0D1B14]/80 flex items-center justify-center text-[10px]">
                    LAUNCHING SOON
                  </div>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#C9A84C] text-[#C9A84C] font-dm-sans font-bold uppercase tracking-widest py-6 rounded-none"
                >
                  <Link href="/opportunities">View Opportunities</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
