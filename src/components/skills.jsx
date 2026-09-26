import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaSass,
  FaGulp,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostman,
  SiMysql,
  SiPostgresql,
  SiOpenai,
  SiGooglegemini,
  SiClaude,
} from "react-icons/si";
import { Braces, Workflow, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
  const frontend = [
    { name: "React", icon: <FaReact />, color: "group-hover:text-[#61DAFB]" },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "group-hover:text-[#3178C6]",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "group-hover:text-white",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "group-hover:text-[#F7DF1E]",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "group-hover:text-[#38BDF8]",
    },
    { name: "HTML", icon: <FaHtml5 />, color: "group-hover:text-[#E34F26]" },
    { name: "CSS", icon: <FaCss3Alt />, color: "group-hover:text-[#1572B6]" },
    { name: "Sass / SCSS", icon: <FaSass />, color: "group-hover:text-[#CC6699]" },
  ];

  const supportingGroups = [
    {
      title: "Integración y automatización",
      description: "Consumo de APIs REST, pruebas de peticiones y flujos automatizados.",
      list: [
        { name: "APIs REST", icon: <Braces size={18} /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "n8n", icon: <Workflow size={18} /> },
      ],
    },
    {
      title: "Herramientas",
      description: "Control de versiones, diseño de interfaces y herramientas para el flujo de trabajo.",
      list: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Gulp", icon: <FaGulp /> },
      ],
    },
    {
      title: "Conocimientos complementarios",
      description: "Programación y bases de datos como complemento al desarrollo frontend.",
      list: [
        { name: "Java", icon: <FaJava /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
  ];

  const aiTools = [
    { name: "ChatGPT", icon: <SiOpenai /> },
    { name: "Gemini", icon: <SiGooglegemini /> },
    { name: "Claude", icon: <SiClaude /> },
    { name: "OpenCode", icon: <Terminal size={16} /> },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="bg-black py-24 md:py-32" aria-labelledby="skills-title">
      <div className="mx-auto w-[90%] max-w-6xl">
        <div className="mb-12 text-center md:mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Tecnologías
          </span>
          <h2 id="skills-title" className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Stack tecnológico
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Mi enfoque principal es el desarrollo frontend, acompañado de
            herramientas para integrar, mantener y mejorar aplicaciones web.
          </p>
        </div>

        <div className="rounded-3xl border border-indigo-400/20 bg-indigo-400/5 p-5 sm:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-white">Frontend</h3>
            <span className="text-xs uppercase tracking-wider text-indigo-300">Enfoque principal</span>
          </div>
          <motion.ul
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {frontend.map((tech) => (
              <motion.li
                key={tech.name}
                variants={item}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 px-2 py-6 transition-colors duration-300 hover:border-indigo-400/40"
              >
                <span className={`text-3xl text-zinc-300 transition-colors duration-300 ${tech.color}`} aria-hidden="true">
                  {tech.icon}
                </span>
                <span className="text-center text-sm text-zinc-300">{tech.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {supportingGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{group.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.list.map((tech) => (
                  <li key={tech.name} className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 px-3 py-2 text-sm text-zinc-300">
                    <span className="text-lg text-zinc-400" aria-hidden="true">{tech.icon}</span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-sm font-medium text-zinc-400">Asistencia al desarrollo con IA</h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {aiTools.map((tool) => (
              <li key={tool.name} className="inline-flex items-center gap-2 text-sm text-zinc-400">
                <span aria-hidden="true">{tool.icon}</span>
                {tool.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
