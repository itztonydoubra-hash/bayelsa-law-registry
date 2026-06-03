'use client';

import Link from 'next/link';
import { Scale, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'For Students', href: '/for-students' },
    { name: 'For Lawyers', href: '/for-lawyers' },
    { name: 'Career Pathways', href: '/pathways' },
    { name: 'Opportunity Board', href: '/opportunities' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0D1B14]/90 backdrop-blur-md py-3 border-b border-[#C9A84C]/20'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Scale className="text-[#C9A84C] w-8 h-8" />
          <div className="flex flex-col">
            <span className="font-cormorant-garamond font-bold text-white uppercase tracking-wider text-sm leading-none">
              Bayelsa Law
            </span>
            <div className="h-[1px] bg-[#C9A84C] my-0.5 w-full" />
            <span className="font-cormorant-garamond font-bold text-white uppercase tracking-[0.2em] text-xs leading-none">
              Registry
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-[#C9A84C] font-dm-sans text-sm transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="bg-[#C9A84C] text-[#0D1B14] hover:bg-[#C9A84C]/90 font-dm-sans font-bold uppercase tracking-widest text-xs px-6"
          >
            <Link href="/join">Join the Registry</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-[#0D1B14] z-40 p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-cormorant-garamond font-bold border-b border-[#C9A84C]/10 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="bg-[#C9A84C] text-[#0D1B14] hover:bg-[#C9A84C]/90 font-dm-sans font-bold uppercase tracking-widest mt-4"
          >
            <Link href="/join" onClick={() => setIsOpen(false)}>
              Join the Registry
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
