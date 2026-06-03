import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  label,
  title,
  description,
  light,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={cn('max-w-3xl mb-16', align === 'center' ? 'mx-auto text-center' : 'text-left')}
    >
      <span className="font-dm-sans font-bold text-[#C9A84C] uppercase tracking-[0.3em] text-xs mb-4 block">
        {label}
      </span>
      <h2
        className={cn(
          'font-cormorant-garamond font-bold text-4xl md:text-5xl lg:text-6xl mb-6',
          light ? 'text-[#1A1A1A]' : 'text-white'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'font-dm-sans text-lg leading-relaxed',
            light ? 'text-[#1A1A1A]/70' : 'text-white/70'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
