import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Users, BookOpen, HeartHandshake, Sparkles } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionHeading } from '../UI/SectionHeading';
import { Badge } from '../UI/Badge';
import { communityData } from '../../data/community';

export const Community: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Speaking':
        return Mic;
      case 'Community Leadership':
        return Users;
      case 'Teaching':
        return BookOpen;
      case 'Volunteering':
        return HeartHandshake;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="community" className="py-24 bg-[#0d1016] border-t border-[#171c26] relative">
      <Container size="wide">
        <SectionHeading
          eyebrow="Beyond The Workplace"
          title="Community, Talks & Content"
          description="Active community involvement, technical speaking, developer instruction, and educational authoring."
        />

        {/* Editorial Journal / Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityData.map((item, index) => {
            const Icon = getCategoryIcon(item.category);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#111621] border border-[#202737] hover:border-[#303c52] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="accent" size="sm">
                      {item.category}
                    </Badge>
                    <span className="text-xs font-mono text-[#64748b]">
                      {item.organization}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-[#161c28] border border-[#252f41] text-[#ccff00] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-sans group-hover:text-[#ccff00] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#94a3b8] font-mono mt-0.5">
                        {item.roleOrContext}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                    {item.description}
                  </p>

                  {item.details && (
                    <ul className="mt-4 space-y-1.5 pt-3 border-t border-[#1a212e]">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs text-[#94a3b8] flex items-start gap-2">
                          <span className="text-[#ccff00] mt-0.5 font-mono">›</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-[#1a212e] flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                  <span>{item.organization}</span>
                  <span className="text-[#ccff00]">Verified Activity</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
