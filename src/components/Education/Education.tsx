import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionHeading } from '../UI/SectionHeading';
import { Badge } from '../UI/Badge';
import { educationData } from '../../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0a0c10] border-t border-[#171c26] relative">
      <Container size="wide">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          description="Foundations in Information Technology, computer science principles, and software engineering."
        />

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#111621] border border-[#202737] shadow-lg flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#171e2c] border border-[#27354c] text-[#ccff00] shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white font-sans">
                      {edu.institution}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#cbd5e1] font-medium">
                    {edu.degree} — {edu.field}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#94a3b8]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#ccff00]" />
                      {edu.period}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#ccff00]" />
                      {edu.location}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-[#94a3b8] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CGPA Badge Banner */}
              <div className="shrink-0 md:text-right flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-[#1c2331]">
                <Badge variant="accent" size="md">
                  <Award className="w-3.5 h-3.5" />
                  <span>CGPA: {edu.cgpa}</span>
                </Badge>
                <span className="text-[11px] font-mono text-[#64748b] mt-2">
                  Graduated 2025
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
