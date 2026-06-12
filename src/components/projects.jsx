import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import CoralStore from "../assets/coral-screenshot.jpeg";
import QuestHub from "../assets/questhub-screenshot.jpeg";
import Dashboard from "../assets/dashboard-screenshot.png"

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Coral",
      description:
        "Panel administrativo para la gestión de productos, usuarios y ventas.",
      image: CoralStore,
      technologies: ["React", "Tailwind"],
      github: "https://github.com/justjianpier/coral_shop.git",
      demo: "https://coral-st.netlify.app/",
    },
    {
      id: 2,
      title: "QuestHub",
      description:
        "Una plataforma moderna para descubrir, seguir y consultar información sobre videojuegos. Incluye una sección de lista de deseos y filtros por categoría y desarrollador.",
      image: QuestHub,
      technologies: ["React", "Tailwind"],
      github: "https://github.com/justjianpier/questhub.git",
      demo: "https://questhub-app.netlify.app",
    },
    {
      id: 3,
      title: "Personal Dashboard",
      description:
        "Personal Dashboard creado con React y Vite para documentar y mostrar los proyectos que desarrollo mientras aprendo desarrollo front-end.",
      image: Dashboard,
      technologies: ["React", "Tailwind"],
      github: "https://github.com/justjianpier/personal-dashboard.git",
      demo: "https://dashboardexa.netlify.app",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="bg-black py-32">
      <div className="mx-auto w-[90%] max-w-6xl">
        <div className="mb-20 max-w-2xl">
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Proyectos
          </span>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Trabajo reciente
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Algunos proyectos que he desarrollado para fortalecer mis
            conocimientos en desarrollo web moderno.
          </p>
        </div>

        <motion.div
          className="space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={item}
              whileHover={{ y: -6 }}
              className="group grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-zinc-700"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between p-10">
                  <div>
                    <h3 className="text-3xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-sm text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex gap-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      <FaGithub size={18} />
                      Código
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      <ArrowUpRight size={18} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
