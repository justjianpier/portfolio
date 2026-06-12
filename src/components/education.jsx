import { Code, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  const list = [
    {
      id: 1,
      date: "2021 - En curso",
      title: "Ingeniería de Sistemas e Informática",
      institute: "Universidad Tecnológica del Perú",
      description:
        "Actualmente cursando el séptimo ciclo. Formación en desarrollo de software, estructuras de datos, bases de datos y tecnologías web.",
      icon: <GraduationCap size={20} />,
    },
    {
      id: 2,
      date: "2026 - En curso",
      title: "Desarrollo Web Full Stack",
      institute: "Código TECSUP",
      description:
        "Especialización enfocada en desarrollo de aplicaciones web modernas con tecnologías frontend y backend.",
      icon: <Code size={20} />,
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="bg-black py-32">
      <div className="mx-auto w-[90%] max-w-6xl">
        <div className="mb-20 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Formación
          </span>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Educación
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Mi formación académica y especialización en desarrollo de software
            con enfoque en tecnologías web modernas.
          </p>
        </div>

        <motion.div
          className="relative border-l border-zinc-800 pl-10 space-y-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {list.map((itemData) => (
            <motion.article
              key={itemData.id}
              className="relative rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900"
              variants={item}
            >
              <div className="absolute -left-5 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-indigo-400 ring-1 ring-zinc-800">
                {itemData.icon}
              </div>

              <span className="inline-flex items-center rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
                {itemData.date}
              </span>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {itemData.title}
              </h3>

              <p className="mt-2 text-indigo-400 font-medium">
                {itemData.institute}
              </p>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                {itemData.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
