import { motion } from "framer-motion";
import Me from "../assets/Me.png";

export function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto min-h-[90vh] w-[90%] max-w-6xl flex flex-col-reverse items-center gap-8 md:flex-row pt-15">
        <motion.div
          className="flex-1 max-w-4xl"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
            <div className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
            Disponible para prácticas y proyectos freelance
          </div>

          <h1 className="mt-8 text-6xl font-bold leading-none tracking-tight md:text-[80px]">
            Jian Pier
          </h1>
          <h2 className="mt-4 text-2xl font-medium text-zinc-300 md:text-4xl">
            Frontend Developer
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500">
            Estudiante de Ingeniería de Sistemas enfocado en crear experiencias
            web rápidas, accesibles y escalables utilizando tecnologías
            modernas.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-8 py-4 font-medium text-black transition-all hover:scale-[1.02]"
            >
              Ver proyectos
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              download="cv-jian-pier-campos.pdf"
              rel="noreferrer"
              className="rounded-full border border-zinc-700 px-8 py-4 font-medium text-white transition-all hover:border-zinc-500 hover:bg-zinc-900"
            >
              Descargar CV
            </a>
          </div>

          <motion.div
            className="mt-20 flex flex-wrap gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <h3 className="text-center text-3xl font-bold">10+</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Proyectos desarrollados
              </p>
            </div>

            <div>
              <h3 className="text-center text-3xl font-bold">1+</h3>
              <p className="mt-1 text-sm text-zinc-500">Años aprendiendo</p>
            </div>

            <div>
              <h3 className="text-center text-3xl font-bold">100%</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Compromiso profesional
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={Me}
            alt="Me"
            className="ring-1 ring-indigo-500 rounded-full w-80 h-80 object-contain xl:w-100 xl:h-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
