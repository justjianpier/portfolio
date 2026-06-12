import { Mail, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function ContactMe() {
  const contacts = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "jianpierdev@gmail.com",
    },
    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      value: "github.com/justjianpier",
    },
    {
      icon: <Phone size={24} />,
      label: "Celular",
      value: "+51 912 528 150",
    },
  ];

  return (
    <section id="contact" className="bg-black py-32 overflow-x-hidden">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-20 text-center lg:text-left">
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Contacto
          </span>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Hablemos
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400 mx-auto lg:mx-0">
            Estoy abierto a prácticas, oportunidades laborales y proyectos
            freelance.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <div className="space-y-6">
            {contacts.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 sm:gap-6 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800/30 text-indigo-400">
                  {item.icon}
                </div>

                <div>
                  <p className="text-zinc-500">{item.label}</p>
                  <p className="text-xl font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
                <h3 className="text-2xl font-semibold text-green-400">
                  Disponible para oportunidades
                </h3>
              </div>

              <p className="mt-4 text-zinc-300">
                Actualmente buscando prácticas profesionales, posiciones junior
                y proyectos freelance relacionados con desarrollo frontend.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10">
            <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Disponible
            </span>
            <h3 className="mt-4 text-4xl font-bold text-white">
              ¿Tienes una idea o proyecto?
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Me interesa participar en proyectos donde pueda aportar valor,
              seguir aprendiendo y colaborar con equipos que construyan
              productos digitales de calidad.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:jianpierdev@gmail.com"
                className="rounded-full bg-indigo-400 px-6 py-3 font-medium text-white transition hover:bg-[#0077ed]"
              >
                Enviar correo
              </a>

              <a
                href="#projects"
                className="rounded-full border border-zinc-700 px-6 py-3 text-white transition hover:border-zinc-500"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
