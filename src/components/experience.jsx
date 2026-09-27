import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  const contributions = [
    "Desarrollé y mantuve interfaces web con React, TypeScript, Next.js y Tailwind CSS.",
    "Implementé nuevas funcionalidades y componentes reutilizables en aplicaciones existentes.",
    "Desarrollé interfaces y vistas utilizando Laravel y PHP, integrándolas con la lógica y servicios de las aplicaciones",
    "Corregí errores y realicé mejoras de rendimiento, SEO y experiencia de usuario.",
    "Participé en el análisis de requerimientos y desarrollo de soluciones para distintos proyectos web.",
    "Desarrollé e integré un chatbot web con n8n, configurando flujos automatizados para gestionar interacciones con usuarios.",
  ];

  const technologies = ["React", "TypeScript", "Next.js", "Php", "Laravel", "Tailwind CSS", "n8n"];

  return (
    <section id="experience" className="bg-black py-24 md:py-32" aria-labelledby="experience-title">
      <div className="mx-auto w-[90%] max-w-6xl">
        <div className="mb-12 max-w-3xl md:mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Trayectoria
          </span>
          <h2 id="experience-title" className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Experiencia profesional
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Experiencia en el desarrollo y mantenimiento de aplicaciones web,
            con énfasis en interfaces, componentes y experiencia de usuario.
          </p>
        </div>

        <motion.article
          className="grid gap-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              <BriefcaseBusiness size={22} aria-hidden="true" />
            </div>
            <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-300">
              Enfoque frontend
            </span>
            <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
              Desarrollador web full stack
            </h3>
            <p className="mt-3 font-medium text-indigo-400">NEONHOUSELED S.A.C.</p>

            <div className="mt-6 space-y-3 text-sm text-zinc-400">
              <p className="flex items-start gap-2">
                <CalendarDays size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <time dateTime="2026-06">Junio de 2026</time>
                  {" – "}
                  <time dateTime="2026-09">septiembre de 2026</time>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} aria-hidden="true" />
                Lima, Perú
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
              {technologies.map((technology) => (
                <li key={technology} className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-zinc-800 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <h4 className="text-sm font-medium uppercase tracking-wider text-zinc-300">
              Principales contribuciones
            </h4>
            <ul className="mt-6 space-y-5">
              {contributions.map((contribution) => (
                <li key={contribution} className="flex gap-3 text-zinc-400">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                  <p className="leading-relaxed">{contribution}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
