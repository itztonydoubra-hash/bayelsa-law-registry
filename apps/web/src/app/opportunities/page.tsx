'use client';

import SectionHeader from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, MapPin, Briefcase, Users, Search } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function OpportunityBoardPage() {
  const [formData, setFormData] = useState({
    organization_name: '',
    opportunity_type: '',
    practice_area: '',
    description: '',
    deadline: '',
    whatsapp_contact: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/opportunities', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success('Opportunity submitted for review!');
        setFormData({
          organization_name: '',
          opportunity_type: '',
          practice_area: '',
          description: '',
          deadline: '',
          whatsapp_contact: '',
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Failed to submit opportunity');
    } finally {
      setIsSubmitting(false);
    }
  };

  const dummyOpportunities = [
    {
      chamber: 'Ekereke and Associates',
      type: 'Internship',
      area: 'Litigation',
      deadline: 'July 30, 2026',
      desc: 'Applications open for one junior intern position. Minimum Year 3. Three-month placement with mentorship.',
    },
    {
      chamber: 'Owei Legal Practitioners',
      type: 'Mentorship Opening',
      area: 'Corporate and Commercial',
      deadline: 'Rolling basis',
      desc: 'Senior partner available for quarterly mentorship sessions with motivated final-year students.',
    },
    {
      chamber: 'Bayelsa State Ministry of Justice',
      type: 'Volunteer Legal Research',
      area: 'Government Law',
      deadline: 'August 15, 2026',
      desc: 'Student legal researchers needed for ongoing legislative drafting support project.',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#F7F5F0]">
      {/* Hero */}
      <section className="bg-white py-24 px-6 border-b border-[#C9A84C]/10">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeader
            label="OPPORTUNITY BOARD"
            title="Real Opportunities. Updated Regularly."
            description="Internships, training positions, mentorship openings, and volunteer legal work across Bayelsa. Posted directly by chambers and lawyers on the platform."
            light
          />
        </div>
      </section>

      {/* Filter Bar (Mock) */}
      <section className="py-8 bg-white border-b border-[#C9A84C]/10 sticky top-[72px] z-30 shadow-sm">
        <div className="container mx-auto px-6 flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 w-4 h-4" />
              <Input
                placeholder="Search opportunities..."
                className="pl-10 border-[#C9A84C]/20 rounded-none focus-visible:ring-[#C9A84C]"
              />
            </div>
          </div>
          <Select>
            <SelectTrigger className="w-[180px] border-[#C9A84C]/20 rounded-none font-dm-sans">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="internship">Internship</SelectItem>
              <SelectItem value="mentorship">Mentorship</SelectItem>
              <SelectItem value="volunteer">Volunteer</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] border-[#C9A84C]/20 rounded-none font-dm-sans">
              <SelectValue placeholder="Area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="litigation">Litigation</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="oil-gas">Oil & Gas</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Board */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyOpportunities.map((op, i) => (
              <div key={i} className="bg-white p-8 border border-[#C9A84C]/10 relative group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 bg-[#1B4332]/5 text-[#1B4332]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-2 py-1">
                    {op.type}
                  </span>
                </div>
                <h3 className="font-cormorant-garamond font-bold text-2xl text-[#1A1A1A] mb-2">
                  {op.chamber}
                </h3>
                <p className="font-dm-sans text-[#1A1A1A]/40 text-xs uppercase tracking-widest mb-4 font-bold">
                  {op.area}
                </p>
                <p className="font-dm-sans text-[#1A1A1A]/70 text-sm leading-relaxed mb-6">
                  {op.desc}
                </p>
                <div className="flex items-center gap-2 text-[#1A1A1A]/50 text-xs font-dm-sans mt-auto">
                  <Calendar className="w-4 h-4" />
                  <span>Deadline: {op.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Launching Soon Overlay */}
        <div className="absolute inset-0 z-10 bg-white/40 backdrop-blur-md flex flex-col items-center justify-center text-center p-6">
          <div className="max-w-md bg-[#0D1B14] p-10 shadow-2xl border border-[#C9A84C]/30">
            <h2 className="font-cormorant-garamond font-bold text-3xl text-white mb-4">
              Board Opens Q3 2026
            </h2>
            <p className="font-dm-sans text-white/60 mb-8 leading-relaxed">
              The Opportunity Board is currently being populated with verified chambers across
              Bayelsa. Register now to be notified the moment it goes live.
            </p>
            <Button
              asChild
              className="bg-[#C9A84C] text-[#0D1B14] font-dm-sans font-bold uppercase tracking-widest px-8 py-6 rounded-none"
            >
              <Link href="/join">Join the Waitlist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Post Opportunity */}
      <section className="py-24 bg-[#0D1B14] text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader
            label="FOR CHAMBERS"
            title="Post an Opportunity"
            description="Are you a lawyer or chamber looking for talent? Submit your opening here and reach students across all three Bayelsa faculties."
          />
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1B4332]/10 p-10 border border-[#C9A84C]/20"
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                Organization Name
              </label>
              <Input
                required
                value={formData.organization_name}
                onChange={(e) => setFormData({ ...formData, organization_name: e.target.value })}
                placeholder="e.g. Owei Legal Practitioners"
                className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-[#C9A84C]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                Opportunity Type
              </label>
              <Input
                required
                value={formData.opportunity_type}
                onChange={(e) => setFormData({ ...formData, opportunity_type: e.target.value })}
                placeholder="e.g. Internship"
                className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-[#C9A84C]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                Practice Area
              </label>
              <Input
                required
                value={formData.practice_area}
                onChange={(e) => setFormData({ ...formData, practice_area: e.target.value })}
                placeholder="e.g. Litigation"
                className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-[#C9A84C]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                WhatsApp Contact
              </label>
              <Input
                required
                value={formData.whatsapp_contact}
                onChange={(e) => setFormData({ ...formData, whatsapp_contact: e.target.value })}
                placeholder="+234..."
                className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-[#C9A84C]"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                Brief Description
              </label>
              <Input
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Tell students what the opportunity involves..."
                className="bg-transparent border-white/20 text-white rounded-none focus-visible:ring-[#C9A84C]"
              />
            </div>
            <div className="md:col-span-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C9A84C] text-[#0D1B14] font-dm-sans font-bold uppercase tracking-widest py-7 rounded-none mt-4"
              >
                {isSubmitting ? 'Submitting...' : 'Submit for Review'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
