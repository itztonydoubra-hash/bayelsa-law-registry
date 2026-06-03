'use client';

import { useState } from 'react';
import SectionHeader from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export default function JoinPage() {
  const [type, setType] = useState<'student' | 'lawyer'>('student');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [studentForm, setStudentForm] = useState({
    full_name: '',
    faculty: '',
    year_of_study: '',
    whatsapp_number: '',
    areas_of_interest: [] as string[],
    looking_for: [] as string[],
  });

  const [lawyerForm, setLawyerForm] = useState({
    full_name: '',
    organization_name: '',
    practice_area: '',
    whatsapp_number: '',
    open_to_mentorship: false,
    open_to_interns: false,
  });

  const practiceAreas = [
    'Corporate and Commercial Law',
    'Litigation',
    'Arbitration and ADR',
    'Human Rights Law',
    'Government Law',
    'Academic Law',
    'Oil and Gas Law',
    'Criminal Law',
  ];

  const lookingForOptions = ['Mentorship', 'Internship', 'Career Guidance', 'Opportunity Alerts'];

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        body: JSON.stringify({ ...studentForm, type: 'student' }),
      });
      if (res.ok) {
        toast.success('Welcome to the Registry!');
        setStudentForm({
          full_name: '',
          faculty: '',
          year_of_study: '',
          whatsapp_number: '',
          areas_of_interest: [],
          looking_for: [],
        });
      } else throw new Error();
    } catch {
      toast.error('Failed to join. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLawyerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        body: JSON.stringify({ ...lawyerForm, type: 'lawyer' }),
      });
      if (res.ok) {
        toast.success('Chamber registered for the pilot!');
        setLawyerForm({
          full_name: '',
          organization_name: '',
          practice_area: '',
          whatsapp_number: '',
          open_to_mentorship: false,
          open_to_interns: false,
        });
      } else throw new Error();
    } catch {
      toast.error('Failed to join. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F7F5F0]">
      <section className="bg-[#0D1B14] py-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cormorant-garamond font-bold text-5xl md:text-7xl text-white mb-8"
          >
            Get In Before It Launches
          </motion.h1>
          <div className="flex items-center justify-center gap-4 mt-12 p-1 bg-white/5 rounded-full w-fit mx-auto border border-white/10">
            <button
              onClick={() => setType('student')}
              className={`px-8 py-3 font-dm-sans font-bold text-xs uppercase tracking-widest transition-all ${type === 'student' ? 'bg-[#C9A84C] text-[#0D1B14]' : 'text-white/60 hover:text-white'}`}
            >
              I am a Student
            </button>
            <button
              onClick={() => setType('lawyer')}
              className={`px-8 py-3 font-dm-sans font-bold text-xs uppercase tracking-widest transition-all ${type === 'lawyer' ? 'bg-[#C9A84C] text-[#0D1B14]' : 'text-white/60 hover:text-white'}`}
            >
              I am a Lawyer
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl bg-white border border-[#C9A84C]/20 shadow-xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-full -mr-16 -mt-16" />

          {type === 'student' ? (
            <form onSubmit={handleStudentSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                    Full Name
                  </label>
                  <Input
                    required
                    value={studentForm.full_name}
                    onChange={(e) => setStudentForm({ ...studentForm, full_name: e.target.value })}
                    placeholder="Legal name"
                    className="border-[#C9A84C]/20 rounded-none focus-visible:ring-[#C9A84C]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                    Faculty
                  </label>
                  <Select
                    onValueChange={(val) => setStudentForm({ ...studentForm, faculty: val })}
                    value={studentForm.faculty}
                  >
                    <SelectTrigger className="border-[#C9A84C]/20 rounded-none font-dm-sans">
                      <SelectValue placeholder="Select faculty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NDU">Niger Delta University (NDU)</SelectItem>
                      <SelectItem value="Hensard">Hensard University</SelectItem>
                      <SelectItem value="Otueke">Faculty of Law Otueke</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                    Year of Study
                  </label>
                  <Select
                    onValueChange={(val) => setStudentForm({ ...studentForm, year_of_study: val })}
                    value={studentForm.year_of_study}
                  >
                    <SelectTrigger className="border-[#C9A84C]/20 rounded-none font-dm-sans">
                      <SelectValue placeholder="Current year" />
                    </SelectTrigger>
                    <SelectContent>
                      {['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Final Year'].map((y) => (
                        <SelectItem key={y} value={y}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                    WhatsApp Number
                  </label>
                  <Input
                    required
                    value={studentForm.whatsapp_number}
                    onChange={(e) =>
                      setStudentForm({ ...studentForm, whatsapp_number: e.target.value })
                    }
                    placeholder="+234..."
                    className="border-[#C9A84C]/20 rounded-none focus-visible:ring-[#C9A84C]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] block">
                  Areas of Interest
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {practiceAreas.map((area) => (
                    <div key={area} className="flex items-center gap-3">
                      <Checkbox
                        id={area}
                        checked={studentForm.areas_of_interest.includes(area)}
                        onCheckedChange={(checked) => {
                          if (checked)
                            setStudentForm({
                              ...studentForm,
                              areas_of_interest: [...studentForm.areas_of_interest, area],
                            });
                          else
                            setStudentForm({
                              ...studentForm,
                              areas_of_interest: studentForm.areas_of_interest.filter(
                                (a) => a !== area
                              ),
                            });
                        }}
                      />
                      <label
                        htmlFor={area}
                        className="text-sm font-dm-sans text-[#1A1A1A]/70 cursor-pointer"
                      >
                        {area}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] block">
                  What are you most looking for?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {lookingForOptions.map((opt) => (
                    <div key={opt} className="flex items-center gap-3">
                      <Checkbox
                        id={opt}
                        checked={studentForm.looking_for.includes(opt)}
                        onCheckedChange={(checked) => {
                          if (checked)
                            setStudentForm({
                              ...studentForm,
                              looking_for: [...studentForm.looking_for, opt],
                            });
                          else
                            setStudentForm({
                              ...studentForm,
                              looking_for: studentForm.looking_for.filter((o) => o !== opt),
                            });
                        }}
                      />
                      <label
                        htmlFor={opt}
                        className="text-sm font-dm-sans text-[#1A1A1A]/70 cursor-pointer"
                      >
                        {opt}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C9A84C] text-[#0D1B14] font-dm-sans font-bold uppercase tracking-widest py-8 rounded-none"
              >
                {isSubmitting ? 'Processing...' : 'Join the Registry'}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleLawyerSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                    Full Name
                  </label>
                  <Input
                    required
                    value={lawyerForm.full_name}
                    onChange={(e) => setLawyerForm({ ...lawyerForm, full_name: e.target.value })}
                    placeholder="Legal name"
                    className="border-[#C9A84C]/20 rounded-none focus-visible:ring-[#C9A84C]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                    Organization Name
                  </label>
                  <Input
                    required
                    value={lawyerForm.organization_name}
                    onChange={(e) =>
                      setLawyerForm({ ...lawyerForm, organization_name: e.target.value })
                    }
                    placeholder="Chamber or Firm Name"
                    className="border-[#C9A84C]/20 rounded-none focus-visible:ring-[#C9A84C]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                    Primary Practice Area
                  </label>
                  <Input
                    required
                    value={lawyerForm.practice_area}
                    onChange={(e) =>
                      setLawyerForm({ ...lawyerForm, practice_area: e.target.value })
                    }
                    placeholder="e.g. Litigation"
                    className="border-[#C9A84C]/20 rounded-none focus-visible:ring-[#C9A84C]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                    WhatsApp Number
                  </label>
                  <Input
                    required
                    value={lawyerForm.whatsapp_number}
                    onChange={(e) =>
                      setLawyerForm({ ...lawyerForm, whatsapp_number: e.target.value })
                    }
                    placeholder="+234..."
                    className="border-[#C9A84C]/20 rounded-none focus-visible:ring-[#C9A84C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="mentorship"
                    checked={lawyerForm.open_to_mentorship}
                    onCheckedChange={(val) =>
                      setLawyerForm({ ...lawyerForm, open_to_mentorship: !!val })
                    }
                  />
                  <label
                    htmlFor="mentorship"
                    className="text-sm font-dm-sans text-[#1A1A1A]/70 cursor-pointer"
                  >
                    Open to Mentorship matching?
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="interns"
                    checked={lawyerForm.open_to_interns}
                    onCheckedChange={(val) =>
                      setLawyerForm({ ...lawyerForm, open_to_interns: !!val })
                    }
                  />
                  <label
                    htmlFor="interns"
                    className="text-sm font-dm-sans text-[#1A1A1A]/70 cursor-pointer"
                  >
                    Open to taking interns?
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1B4332] text-white font-dm-sans font-bold uppercase tracking-widest py-8 rounded-none"
              >
                {isSubmitting ? 'Processing...' : 'Register My Chamber'}
              </Button>
            </form>
          )}

          <div className="mt-16 pt-8 border-t border-[#C9A84C]/10 text-center">
            <h4 className="font-cormorant-garamond font-bold text-2xl text-[#1A1A1A] mb-4">
              What Happens Next
            </h4>
            <p className="font-dm-sans text-[#1A1A1A]/60 leading-relaxed max-w-2xl mx-auto text-sm">
              Once you register, you will receive a WhatsApp message confirming your spot. When the
              pilot launches in Q3 2026, you will be among the first to access the platform.
              Students will be matched with mentors based on their area of interest. Chambers will
              be contacted to formalize their partnership agreement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
