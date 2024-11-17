import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col cursor-pointer">
            <div className="w-full flex justify-between items-baseline">
              <span className="text-black dark:text-white font-medium tracking-tight">
                {project.title}
              </span>
              <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {project.year}
              </span>
            </div>
            <p className="prose prose-neutral dark:prose-invert pt-3">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
