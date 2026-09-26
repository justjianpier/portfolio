import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  const links = [
    { id: 1, section: "about-me", title: "Sobre mí" },
    { id: 2, section: "experience", title: "Experiencia" },
    { id: 3, section: "skills", title: "Tecnologías" },
    { id: 4, section: "projects", title: "Proyectos" },
    { id: 5, section: "education", title: "Formación" },
  ];

  return (
    <footer className="border-t border-zinc-900 bg-black">
      <div className="mx-auto w-[90%] max-w-6xl py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-white">{"<Jian />"}</h3>

            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Desarrollador frontend junior con experiencia profesional en
              React, TypeScript y Next.js. Interfaces web con foco en la
              experiencia de usuario.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">
              Enlaces Rápidos
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-zinc-500">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.section}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Conectemos</h4>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/justjianpier"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Jian Pier"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/jian-pier-campos-sulca-0b5370416"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Jian Pier"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="mailto:jianpierdev@gmail.com"
                aria-label="Enviar correo a Jian Pier"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 border-t border-zinc-900" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} - Jian Pier</p>

          <p>Desarrollado con React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
