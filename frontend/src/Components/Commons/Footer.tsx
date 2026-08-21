import Image from "next/image";
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
    <footer className="border-t border-primary/10 bg-surface text-secondary">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Col 1 */}
          <div>
            <Link href="/" aria-label="EnerGrid Home" className="inline-block">
              <div className="relative h-10 w-[150px]">
                <Image
                  src="/images/logo.png"
                  alt="EnerGrid"
                  fill
                  className="object-contain object-left"
                  sizes="150px"
                />
              </div>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-secondary">
              Accelerating India&apos;s Green Energy Transition.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-sm font-bold text-primary">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="w-fit text-sm text-secondary transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-sm font-bold text-primary">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-secondary">
              <div>
                <span className="font-semibold text-primary/90">Email:</span>{" "}
                hello@energrid.example
              </div>
              <div>
                <span className="font-semibold text-primary/90">Phone:</span>{" "}
                +91 00000 00000
              </div>
              <div>
                <span className="font-semibold text-primary/90">Location:</span>{" "}
                India
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary/10 pt-6 text-xs text-secondary">
          © {new Date().getFullYear()} EnerGrid. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
