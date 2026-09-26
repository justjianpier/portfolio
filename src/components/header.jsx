import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: 1, label: "Sobre mí", href: "#about-me" },
    { id: 2, label: "Experiencia", href: "#experience" },
    { id: 3, label: "Tecnologías", href: "#skills" },
    { id: 4, label: "Proyectos", href: "#projects" },
    { id: 5, label: "Formación", href: "#education" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-[#0a0a0a]">
      <div className="mx-auto flex h-20 w-[90%] max-w-6xl items-center justify-between">
        <a
          href="#"
          onClick={() => setOpen(false)}
          aria-label="Jian Pier, inicio"
          className="font-bold text-xl text-white"
        >
          {"<Jian />"}
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:flex rounded-full border border-zinc-700 bg-zinc-900/40 px-5 py-2.5 text-sm text-white hover:border-zinc-500"
        >
          Contacto
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-zinc-300 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Navegación móvil"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-zinc-900 bg-[#0a0a0a] lg:hidden"
      >
        <div className="flex flex-col px-6 py-6 space-y-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-zinc-400 text-base hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit rounded-full border border-zinc-700 bg-zinc-900/40 px-5 py-2.5 text-sm text-white"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
