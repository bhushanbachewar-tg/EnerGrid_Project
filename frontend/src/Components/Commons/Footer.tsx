import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/investor-relations", label: "Investor Relations" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact Us" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B192C] text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Col 1 */}
          <div>
            <div className="text-lg font-extrabold tracking-tight">
              Ener<span className="text-ener-green">Grid</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              Accelerating India&apos;s Green Energy Transition.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-sm font-bold text-white">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-ener-green"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-sm font-bold text-white">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <div>
                <span className="font-semibold text-white/90">Email:</span>{" "}
                hello@energrid.example
              </div>
              <div>
                <span className="font-semibold text-white/90">Phone:</span>{" "}
                +91 00000 00000
              </div>
              <div>
                <span className="font-semibold text-white/90">Location:</span>{" "}
                India
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} EnerGrid. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

