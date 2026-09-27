import { motion } from "framer-motion";
import Me from "../assets/Me.png";

export function Hero() {
  return (
    <section className="bg-black text-white" aria-labelledby="intro-title">
      <div className="mx-auto flex min-h-[90vh] w-[90%] max-w-6xl flex-col-reverse items-center gap-12 py-16 md:flex-row md:py-20">
        <motion.div
          className="w-full min-w-0 flex-1"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
            <div className="relative flex h-3 w-3 shrink-0 items-center justify-center" aria-hidden="true">
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
            Disponible para oportunidades frontend junior
          </div>

          <h1 id="intro-title" className="mt-8 text-6xl font-bold leading-none tracking-tight lg:text-[80px]">
            Jian Pier{" "}
            <span className="mt-3 block text-xl font-normal tracking-normal text-zinc-400">
              Campos Sulca
            </span>
          </h1>
          <p className="mt-6 text-2xl font-medium text-zinc-200 lg:text-4xl">
            Desarrollador Frontend Junior
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Desarrollo interfaces web con React, TypeScript, Next.js y Tailwind
            CSS. Cuento con experiencia profesional creando componentes
            reutilizables y mejorando aplicaciones web, con foco en la
            experiencia de usuario.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-8 py-4 font-medium text-black transition-all hover:scale-[1.02]"
            >
              Ver proyectos
            </a>
            <a
              href="/CV_JianPierCamposSulca.pdf"
              target="_blank"
              download="CV_JianPierCamposSulca.pdf"
              rel="noreferrer"
              className="rounded-full border border-zinc-700 px-8 py-4 font-medium text-white transition-all hover:border-zinc-500 hover:bg-zinc-900"
            >
              Descargar CV
            </a>
          </div>

          <motion.dl
            className="mt-12 flex flex-wrap gap-x-8 gap-y-6 border-t border-zinc-800 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <dt className="text-xs uppercase tracking-wider text-zinc-500">Enfoque</dt>
              <dd className="mt-2 text-sm font-medium text-zinc-200">React + TypeScript</dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-wider text-zinc-500">Experiencia</dt>
              <dd className="mt-2 text-sm font-medium text-zinc-200">
                <a href="#experience" className="transition-colors hover:text-indigo-400">NEONHOUSELED</a>
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-wider text-zinc-500">Formación</dt>
              <dd className="mt-2 text-sm font-medium text-zinc-200">UTP · 7.º ciclo</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          className="flex shrink-0 justify-center md:w-[35%] lg:w-[38%]"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={Me}
            alt="Retrato de Jian Pier Campos Sulca"
            className="aspect-square w-64 max-w-full rounded-full object-contain ring-1 ring-indigo-500 sm:w-80 xl:w-96"
          />
        </motion.div>
      </div>
    </section>
  );
}
