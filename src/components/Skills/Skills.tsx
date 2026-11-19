import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionHeading } from '../UI/SectionHeading';
import { skillCategoriesData } from '../../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0c10] border-t border-[#171c26] relative">
      <Container size="wide">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills & Technologies"
          description="Grouped by engineering discipline, highlighting strong competencies in React, TypeScript, Java, and automated testing."
        />

        {/* Featured Core Pillars Spotlight */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-[#141a26] via-[#10141d] to-[#141a26] border border-[#232c3f] shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#ccff00]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#ccff00] font-semibold">
              Primary Technical Focus
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#0d1017] border border-[#202738] flex flex-col items-start">
              <span className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                React.js
              </span>
              <span className="text-xs text-[#ccff00] font-mono mt-1">
                Core UI Library
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0d1017] border border-[#202738] flex flex-col items-start">
              <span className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                TypeScript
              </span>
              <span className="text-xs text-[#ccff00] font-mono mt-1">
                Type-Safe Frontend
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0d1017] border border-[#202738] flex flex-col items-start">
              <span className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                JavaScript
              </span>
              <span className="text-xs text-[#ccff00] font-mono mt-1">
                ES6+ / Web APIs
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0d1017] border border-[#202738] flex flex-col items-start">
              <span className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                Java
              </span>
              <span className="text-xs text-[#ccff00] font-mono mt-1">
                OOP & DSA Foundation
              </span>
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategoriesData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-[#111621] border border-[#1f2737] hover:border-[#2f3b52] transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white font-sans flex items-center justify-between">
                  <span>{category.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                </h3>
                <p className="mt-1 text-xs text-[#94a3b8] leading-relaxed">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        skill.isPrimary
                          ? 'bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/40 font-semibold shadow-sm shadow-[#ccff00]/10'
                          : 'bg-[#151a24] text-[#cbd5e1] border border-[#222a39]'
                      }`}
                    >
                      {skill.name}
                      {skill.tag && (
                        <span className="text-[10px] opacity-75 font-sans">
                          ({skill.tag})
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1a212e] text-[11px] font-mono text-[#64748b]">
                {category.skills.length} competencies listed
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
