import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: 1, label: "Sobre mí", href: "#about-me" },
    { id: 2, label: "Skills", href: "#skills" },
    { id: 3, label: "Proyectos", href: "#projects" },
    { id: 4, label: "Formación", href: "#education" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-[#0a0a0a]">
      <div className="mx-auto flex h-20 w-[90%] max-w-6xl items-center justify-between">
        <a href="#" className="font-bold text-xl text-white">
          {"<Jian />"}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
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
          className="hidden md:flex rounded-full border border-zinc-700 bg-zinc-900/40 px-5 py-2.5 text-sm text-white hover:border-zinc-500"
        >
          Contacto
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-300"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-900 bg-[#0a0a0a]">
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
        </div>
      )}
    </header>
  );
}
