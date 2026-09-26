import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Copy } from "lucide-react";

const email = "jianpierdev@gmail.com";

const contacts = [
  {
    label: "LinkedIn",
    detail: "Mi perfil profesional",
    href: "https://www.linkedin.com/in/jian-pier-campos-sulca-0b5370416",
    external: true,
  },
  {
    label: "GitHub",
    detail: "@justjianpier",
    href: "https://github.com/justjianpier",
    external: true,
  },
  {
    label: "Teléfono",
    detail: "+51 912 528 150",
    href: "tel:+51912528150",
  },
];

export function ContactMe() {
  const [copyStatus, setCopyStatus] = useState("idle");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (copyStatus !== "copied") return;

    const timeout = window.setTimeout(() => setCopyStatus("idle"), 2500);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-black py-24 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
        },
      }}
    >
      <div className="mx-auto w-[90%] max-w-6xl">
        <motion.div
          aria-hidden="true"
          className="h-px origin-left bg-zinc-800"
          variants={{
            hidden: { scaleX: reduceMotion ? 1 : 0 },
            visible: {
              scaleX: 1,
              transition: { duration: reduceMotion ? 0 : 0.9 },
            },
          }}
        />

        <motion.div
          className="mt-6 flex items-center justify-between gap-4 text-xs text-zinc-400 sm:text-sm"
          variants={reveal}
        >
          <span className="uppercase tracking-[0.2em]">Contacto</span>
          <span>Lima, Perú</span>
        </motion.div>

        <div className="mt-14 grid gap-14 sm:mt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <motion.h2
              id="contact-title"
              className="text-[clamp(2.75rem,5.8vw,5.25rem)] font-medium leading-[1.1] tracking-[-0.05em] text-white"
              variants={reveal}
            >
              Hablemos de{" "}
              <span className="mt-1 block font-serif font-normal italic tracking-[-0.04em] text-zinc-300">
                lo que{" "}
                <span className="relative inline-block">
                  sigue.
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 h-3 w-full text-indigo-400/80 sm:h-4"
                    viewBox="0 0 240 18"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M3 13C67 3 152 3 237 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      variants={{
                        hidden: { pathLength: reduceMotion ? 1 : 0 },
                        visible: {
                          pathLength: 1,
                          transition: {
                            duration: reduceMotion ? 0 : 0.8,
                            delay: reduceMotion ? 0 : 0.3,
                            ease: "easeOut",
                          },
                        },
                      }}
                    />
                  </svg>
                </span>
              </span>
            </motion.h2>

            <motion.p
              className="mt-9 max-w-sm text-base leading-8 text-zinc-400 sm:text-lg"
              variants={reveal}
            >
              Estoy buscando mi próximo equipo frontend. Si crees que puedo
              encajar, o tienes un proyecto en mente, me gustaría conocerte.
            </motion.p>
          </div>

          <div className="min-w-0 lg:pt-2">
            <motion.div variants={reveal}>
              <p className="text-sm text-zinc-400">Puedes escribirme a</p>
              <a
                href={`mailto:${email}`}
                className="group relative mt-2 flex items-center justify-between gap-3 border-b border-zinc-700 py-4 text-white transition-colors hover:text-indigo-300 focus-visible:text-indigo-300"
              >
                <span className="min-w-0 text-[clamp(1.25rem,2.1vw,1.75rem)] tracking-tight [overflow-wrap:anywhere]">
                  {email}
                </span>
                <ArrowUpRight
                  size={24}
                  aria-hidden="true"
                  className="shrink-0 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:-translate-y-1 motion-safe:group-focus-visible:translate-x-1"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-indigo-300 motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                disabled={copyStatus === "copied"}
                aria-label="Copiar correo electrónico"
                className="mt-3 -ml-2 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm px-2 text-sm text-zinc-400 transition-colors hover:text-white disabled:cursor-default disabled:text-zinc-200"
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.span
                    key={copyStatus === "copied" ? "copied" : "copy"}
                    aria-hidden="true"
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduceMotion ? 0 : -4 }}
                    transition={{ duration: reduceMotion ? 0 : 0.15 }}
                  >
                    {copyStatus === "copied" ? (
                      <Check size={15} />
                    ) : (
                      <Copy size={15} />
                    )}
                  </motion.span>
                </AnimatePresence>
                {copyStatus === "copied" ? "Copiado" : "Copiar correo"}
              </button>
              <p
                role="status"
                className={
                  copyStatus === "error"
                    ? "mt-2 text-sm leading-relaxed text-zinc-400"
                    : "sr-only"
                }
              >
                {copyStatus === "copied"
                  ? "Dirección de correo copiada al portapapeles."
                  : copyStatus === "error"
                    ? "No se pudo copiar. Puedes seleccionar la dirección de arriba."
                    : ""}
              </p>
            </motion.div>

            <motion.ul className="mt-9" variants={reveal}>
              {contacts.map((contact) => (
                <li key={contact.label} className="border-b border-zinc-800">
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="grid gap-1 sm:grid-cols-[5rem_1fr] sm:items-baseline sm:gap-4">
                      <span className="text-sm text-zinc-200 transition-colors group-hover:text-white">
                        {contact.label}
                      </span>
                      <span className="text-sm text-zinc-400">
                        {contact.detail}
                      </span>
                    </span>
                    {contact.external ? (
                      <ArrowUpRight
                        size={17}
                        aria-hidden="true"
                        className="shrink-0 text-zinc-500 transition-colors group-hover:text-white group-focus-visible:text-white motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:-translate-y-0.5 motion-safe:group-focus-visible:translate-x-0.5"
                      />
                    ) : (
                      <ArrowRight
                        size={17}
                        aria-hidden="true"
                        className="shrink-0 text-zinc-500 transition-colors group-hover:text-white group-focus-visible:text-white motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1"
                      />
                    )}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
