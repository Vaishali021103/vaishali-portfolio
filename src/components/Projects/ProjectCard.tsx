import React from 'react';
import { ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { Badge } from '../UI/Badge';
import { GithubIcon } from '../UI/Icons';
import { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenDetails,
  index,
}) => {
  return (
    <div className="relative rounded-2xl bg-[#111621] border border-[#202737] hover:border-[#2f3b50] transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 group shadow-xl hover:shadow-2xl hover:shadow-black/40">
      <div>
        {/* Top Badges & Meta */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Badge variant="accent" size="sm">
            {project.badge || 'Engineering Case Study'}
          </Badge>
          <span className="font-mono text-xs text-[#64748b]">
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight group-hover:text-[#ccff00] transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm sm:text-base text-[#94a3b8] leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Problem & Contribution Highlights */}
        <div className="mt-6 space-y-3 pt-4 border-t border-[#1b2230] text-xs sm:text-sm">
          <div>
            <span className="font-mono text-[#cbd5e1] font-semibold block mb-1">
              Problem Solved:
            </span>
            <p className="text-[#94a3b8] leading-relaxed">
              {project.problemSolved}
            </p>
          </div>
          <div>
            <span className="font-mono text-[#ccff00] font-semibold block mb-1">
              Engineering Contribution:
            </span>
            <p className="text-[#94a3b8] leading-relaxed">
              {project.contribution}
            </p>
          </div>
        </div>

        {/* Key Features List */}
        <div className="mt-5 space-y-1.5">
          <span className="font-mono text-xs text-[#64748b] uppercase tracking-wider block mb-2">
            Key Architectural Elements:
          </span>
          {project.keyFeatures.slice(0, 3).map((feature, fIdx) => (
            <div key={fIdx} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[#1b2230]">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#ccff00] hover:underline cursor-pointer focus-visible:outline-2 focus-visible:outline-[#ccff00] rounded"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Case Study</span>
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#94a3b8] hover:text-white rounded-lg bg-[#161c28] border border-[#242e40] hover:border-[#384762] transition-colors focus-visible:outline-2 focus-visible:outline-[#ccff00]"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#94a3b8] hover:text-[#ccff00] rounded-lg bg-[#161c28] border border-[#242e40] hover:border-[#384762] transition-colors focus-visible:outline-2 focus-visible:outline-[#ccff00]"
                aria-label={`Open live demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
