import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/investor-relations", label: "Investor Relations" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact Us" },
] as const;

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full sticky top-0 border-b border-white/20 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#0B192C]"
          aria-label="EnerGrid Home"
        >
          <span className="text-lg font-extrabold tracking-tight">
            Ener<span className="text-ener-green">Grid</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative whitespace-nowrap px-1 py-2 text-sm font-semibold text-[#0B192C]/70 transition-colors hover:text-ener-green after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-ener-green after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile nav (no hooks; uses <details>) */}
        <div className="md:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer rounded-xl border border-[#0B192C]/10 bg-white/60 p-2 text-[#0B192C] shadow-sm">
              <span className="sr-only">Open menu</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </summary>

            <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-[#0B192C]/10 bg-white/95 p-3 shadow-lg backdrop-blur-md">
              <nav className="flex flex-col gap-1" aria-label="Mobile primary">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-[#0B192C]/70 transition-colors hover:text-ener-green hover:bg-ener-green/5"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

