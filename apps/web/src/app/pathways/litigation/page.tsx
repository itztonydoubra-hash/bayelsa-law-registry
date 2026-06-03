import SectionHeader from '@/components/section-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Clock, DollarSign, Lightbulb, Zap, Gavel } from 'lucide-react';

export default function LitigationPathway() {
  return (
    <div className="pt-24 min-h-screen bg-[#F7F5F0]">
      <section className="bg-[#0D1B14] py-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="font-dm-sans font-bold text-[#C9A84C] uppercase tracking-[0.3em] text-xs mb-6 block">
            CAREER PATHWAY
          </span>
          <h1 className="font-cormorant-garamond font-bold text-5xl md:text-7xl text-white mb-8">
            Litigation
          </h1>
          <p className="font-dm-sans text-xl text-white/70 leading-relaxed">
            Represent clients in court proceedings. From civil claims to criminal defence—the
            backbone of legal practice.
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
                  <Gavel className="text-[#C9A84C]" /> What It Actually Is
                </h2>
                <p className="font-dm-sans text-lg text-[#1A1A1A]/70 leading-relaxed">
                  Litigation lawyers represent clients in court proceedings. In Nigeria this covers
                  civil litigation (contract disputes, property matters, family law, commercial
                  claims) and criminal matters. Unlike what you see on television, most of a
                  litigator's time is not spent in dramatic courtroom moments. It is spent
                  preparing: researching, drafting pleadings, writing briefs, and organizing
                  evidence.
                </p>
              </div>

              {/* Day in the life */}
              <div className="bg-white p-10 border border-[#C9A84C]/10">
                <h2 className="font-cormorant-garamond font-bold text-3xl text-[#1A1A1A] mb-6 flex items-center gap-3">
                  <Clock className="text-[#C9A84C]" /> A Day in the Life
                </h2>
                <p className="font-dm-sans text-[#1A1A1A]/70 leading-relaxed italic">
                  Morning at the High Court for a mention or motion, afternoon in chambers drafting
                  a Statement of Claim or a Brief of Argument, evening researching a novel point of
                  law for an ongoing matter. Steep learning, high pressure, high reward.
                </p>
              </div>

              {/* Bayelsa Specific */}
              <div className="bg-[#1B4332]/5 p-10 border-l-4 border-[#C9A84C]">
                <h2 className="font-cormorant-garamond font-bold text-3xl text-[#1A1A1A] mb-6">
                  The Bayelsa Litigation Landscape
                </h2>
                <p className="font-dm-sans text-[#1A1A1A]/70 leading-relaxed">
                  What practicing litigation looks like specifically in Bayelsa: the court culture
                  at the Federal High Court and State High Court in Yenagoa, the pace of practice
                  compared to Lagos, and the types of land and commercial disputes common to the
                  region.
                </p>
              </div>

              {/* Earnings */}
              <div>
                <h2 className="font-cormorant-garamond font-bold text-3xl text-[#1A1A1A] mb-6 flex items-center gap-3">
                  <DollarSign className="text-[#C9A84C]" /> Realistic Earnings in Nigeria
                </h2>
                <div className="space-y-4">
                  {[
                    { label: 'Junior litigator (Bayelsa)', val: 'N50,000 to N150,000 monthly' },
                    { label: 'Mid level (growing practice)', val: 'N200,000 to N500,000 monthly' },
                    { label: 'Senior litigator', val: 'Highly variable based on clientele' },
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
                    * Often tied to brief allowances rather than fixed high salaries in early years.
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
                    'Oral advocacy (Moot Court)',
                    'Legal research mastery',
                    'Procedural mastery (Civil Procedure)',
                    'Brief writing',
                    'Case management',
                    'Evidence Law proficiency',
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
              <div className="bg-[#0D1B14] text-white p-8">
                <h3 className="font-cormorant-garamond font-bold text-2xl mb-4">The Grind Years</h3>
                <p className="font-dm-sans text-sm text-white/70 leading-relaxed mb-6">
                  Honest account of what the first three years of litigation practice actually feel
                  like. The briefs are small. The fees are modest. The learning is steep. What those
                  years build and why they matter for your long-term legal authority.
                </p>
                <div className="h-[1px] bg-white/10 w-full mb-6" />
                <p className="font-dm-sans font-bold text-xs uppercase tracking-widest text-[#C9A84C]">
                  THE FOUNDATION OF A JURIST
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
                      Join Moot Court. Master the Law of Evidence early.
                    </p>
                  </div>
                  <div>
                    <span className="text-[#C9A84C] font-bold text-xs font-dm-sans block mb-2 uppercase">
                      YEAR 3-4
                    </span>
                    <p className="text-sm font-dm-sans text-[#1A1A1A]/70">
                      Observe court sessions in Yenagoa. Intern at a litigation firm.
                    </p>
                  </div>
                  <div>
                    <span className="text-[#C9A84C] font-bold text-xs font-dm-sans block mb-2 uppercase">
                      FINAL YEAR
                    </span>
                    <p className="text-sm font-dm-sans text-[#1A1A1A]/70">
                      Master procedural rules. Draft simulated pleadings.
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
