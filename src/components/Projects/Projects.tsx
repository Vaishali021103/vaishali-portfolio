import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Terminal } from 'lucide-react';
import { Container } from '../UI/Container';
import { SectionHeading } from '../UI/SectionHeading';
import { Badge } from '../UI/Badge';
import { Button } from '../UI/Button';
import { Modal } from '../UI/Modal';
import { GithubIcon } from '../UI/Icons';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../../data/projects';
import { ProjectItem } from '../../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProjects = projectsData.filter((p) => p.isFeatured);
  const secondaryProjects = projectsData.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-24 bg-[#0a0c10] border-t border-[#171c26] relative">
      <Container size="wide">
        <SectionHeading
          eyebrow="Selected Works"
          title="Featured Engineering Projects"
          description="In-depth implementations spanning semantic NLP evaluation, decentralized smart-contract tolling, and distributed background processing."
        />

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ProjectCard
                project={project}
                onOpenDetails={setSelectedProject}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Secondary Projects Section */}
        <div className="mt-20 pt-16 border-t border-[#171c26]">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                Additional Web & Practical Projects
              </h3>
              <p className="text-sm text-[#94a3b8] mt-1 font-mono">
                Focused user interfaces and functional utilities
              </p>
            </div>
            <span className="text-xs font-mono text-[#64748b]">
              Frontend Explorations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-xl bg-[#0f131c] border border-[#1e2534] hover:border-[#2d374d] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="subtle" size="sm">
                      {project.badge}
                    </Badge>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#94a3b8] hover:text-white focus-visible:outline-2 focus-visible:outline-[#ccff00] rounded"
                        aria-label={`View ${project.title} GitHub repository`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-white font-sans">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-sm text-[#94a3b8] leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <p className="mt-3 text-xs text-[#cbd5e1] font-mono">
                    <span className="text-[#ccff00]">Contribution: </span>
                    {project.contribution}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#19202c] flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Expandable Case Study / Architecture Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            {/* Meta summary bar */}
            <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#1f2635]">
              <Badge variant="accent" size="sm">
                {selectedProject.badge}
              </Badge>
              {selectedProject.technologies.map((tech) => (
                <Badge key={tech} variant="default" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Problem & Solution Breakdown */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono text-[#ccff00] font-semibold mb-2">
                Problem Definition & Objectives
              </h4>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                {selectedProject.problemSolved}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono text-[#ccff00] font-semibold mb-2">
                Engineering Contribution & Architecture
              </h4>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                {selectedProject.contribution}
              </p>
            </div>

            {/* Architecture Steps */}
            {selectedProject.architectureDetails && (
              <div className="p-4 rounded-xl bg-[#0b0e14] border border-[#1d2433]">
                <h4 className="text-xs uppercase tracking-wider font-mono text-[#94a3b8] font-semibold mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#ccff00]" />
                  System Implementation Pipeline
                </h4>
                <ol className="space-y-2 text-xs sm:text-sm text-[#cbd5e1] font-mono list-decimal list-inside">
                  {selectedProject.architectureDetails.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono text-[#94a3b8] font-semibold mb-3">
                Key Features & Capabilities
              </h4>
              <ul className="space-y-2">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#cbd5e1]">
                    <CheckCircle2 className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Row inside modal */}
            <div className="pt-4 border-t border-[#1f2635] flex items-center justify-between">
              <span className="text-xs font-mono text-[#64748b]">
                Portfolio Case Study · Vaishali Sirimalla
              </span>
              <div className="flex items-center gap-3">
                {selectedProject.githubUrl && (
                  <Button
                    href={selectedProject.githubUrl}
                    external
                    variant="secondary"
                    size="sm"
                    icon={<GithubIcon className="w-3.5 h-3.5" />}
                  >
                    View on GitHub
                  </Button>
                )}
                {selectedProject.liveUrl && (
                  <Button
                    href={selectedProject.liveUrl}
                    external
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Live Preview
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
