import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";
import {ProjectCard} from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} img={project.img} year={project.year} />
        ))}
      </div>
    </section>
  );
}
