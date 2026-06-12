import { Code2, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

export function AboutMe() {
  const cards = [
    {
      id: 1,
      icon: <Code2 size={22} />,
      title: "Desarrollo Frontend",
      description:
        "Construcción de interfaces modernas utilizando React y Tailwind CSS.",
    },
    {
      id: 2,
      icon: <Lightbulb size={22} />,
      title: "Aprendizaje Continuo",
      description:
        "Explorando constantemente nuevas tecnologías, patrones de diseño y buenas prácticas de desarrollo.",
    },
    {
      id: 3,
      icon: <Users size={22} />,
      title: "Trabajo Colaborativo",
      description:
        "Experiencia en proyectos académicos trabajando en equipo usando Git y GitHub.",
    },
    {
      id: 4,
      icon: <Target size={22} />,
      title: "Enfoque en Calidad",
      description:
        "Interés por crear aplicaciones accesibles, mantenibles y optimizadas en rendimiento.",
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
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about-me" className="bg-black py-32">
      <div className="mx-auto w-[90%] max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Sobre mí
          </span>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Quién soy
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-zinc-400">
            Soy estudiante de Ingeniería de Sistemas y desarrollador frontend en
            formación, apasionado por crear experiencias web modernas. Cuando no
            estoy programando, suelo explorar nuevas tecnologías, mejorar mis
            habilidades de desarrollo y dedicar tiempo a mis intereses
            personales.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700"
              variants={item}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-indigo-400">
                {card.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {card.title}
              </h3>

              <p className="leading-relaxed text-zinc-400">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
