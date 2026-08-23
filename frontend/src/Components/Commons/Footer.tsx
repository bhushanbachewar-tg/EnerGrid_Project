import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  Building2,
  Leaf,
  Mail,
  MapPin,
  Network,
  Phone,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/investor-relations", label: "Investor Relations" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact Us" },
] as const;

const focusPillars = [
  { label: "Transmission", icon: Network },
  { label: "Storage", icon: BatteryCharging },
  { label: "Renewables", icon: Leaf },
] as const;

const contactItems = [
  { icon: Mail, label: "Email", value: "info@energrid.in" },
  { icon: Phone, label: "Phone", value: "+91 00000 00000" },
  { icon: MapPin, label: "Location", value: "Mumbai, India" },
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0f2d44] text-on-inverse">
      <div className="absolute inset-x-0 top-0 h-1 bg-accent" />

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-8 border-b border-white/12 pb-8 pt-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link href="/" aria-label="EnerGrid Home" className="inline-block">
              <div className="relative h-10 w-[155px]">
                <Image
                  src="/images/logo.png"
                  alt="EnerGrid"
                  fill
                  className="object-contain object-left"
                  sizes="155px"
                />
              </div>
            </Link>
            <p className="mt-3 max-w-md text-sm leading-6 text-on-inverse/72">
              EnerGrid is building the infrastructure layers that support
              dependable, dispatchable, and sustainable power for India&apos;s
              next energy cycle.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {focusPillars.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-3 py-1.5 text-xs font-semibold text-on-inverse/80"
                >
                  <item.icon size={14} className="text-accent" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-on-inverse">
              Quick Links
            </h3>
            <div className="mt-4 grid gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-on-inverse/70 transition hover:text-accent"
                >
                  <span className="h-px w-4 bg-white/20 transition group-hover:w-6 group-hover:bg-accent" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-on-inverse">
              Contact
            </h3>
            <div className="mt-4 space-y-2">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-3 rounded-lg border border-white/12 bg-white/7 p-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/14 text-accent">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-on-inverse/45">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-on-inverse/82">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 text-xs text-on-inverse/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EnerGrid. All rights reserved.</p>
          <div className="inline-flex items-center gap-2">
            <Building2 size={14} className="text-accent" />
            <span>Infrastructure for India&apos;s clean power future.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
