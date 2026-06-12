import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaSass,
  FaGulp,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

export function Skills() {
  const frontend = [
    { name: "React", icon: <FaReact />, color: "hover:text-[#61DAFB]" },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "hover:text-[#3178C6]",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "hover:text-[#F7DF1E]",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "hover:text-[#38BDF8]",
    },
    { name: "HTML", icon: <FaHtml5 />, color: "hover:text-[#E34F26]" },
    { name: "CSS", icon: <FaCss3Alt />, color: "hover:text-[#1572B6]" },
    { name: "Sass", icon: <FaSass />, color: "hover:text-[#CC6699]" },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt />, color: "hover:text-[#F05032]" },
    { name: "GitHub", icon: <FaGithub />, color: "hover:text-white" },
    { name: "Figma", icon: <FaFigma />, color: "hover:text-[#F24E1E]" },
    { name: "Gulp", icon: <FaGulp />, color: "hover:text-[#CF4647]" },
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
    <section id="skills" className="bg-black py-32">
      <div className="mx-auto w-[90%] max-w-6xl">
        <div className="mb-20 text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Tecnologías
          </span>
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Stack tecnológico
          </h2>
        </div>

        <div className="space-y-16">
          {[
            { title: "Frontend", list: frontend },
            { title: "Herramientas", list: tools },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 text-xl font-semibold text-white">
                {group.title}
              </h3>

              <motion.div
                className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {group.list.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={item}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 py-6 transition-all duration-300"
                  >
                    <div
                      className={`text-3xl text-zinc-300 transition-colors duration-300 ${tech.color}`}
                    >
                      {tech.icon}
                    </div>
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
