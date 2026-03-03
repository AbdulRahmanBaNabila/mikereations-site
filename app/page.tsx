import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-background text-foreground">
      {/* PAGE 1: Starter layout */}
      <section
        id="top"
        className="snap-start min-h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* Logo (replaces NEXT.js) */}
          <div className="flex items-center gap-6">
            <Image
              src="/logo_mikereations.png"
              alt="Mikereations Logo"
              width={180}
              height={180}
            />

            <div className="text-left">
              <p className="text-foreground/60 text-sm tracking-wide">
                Changing the World,
              </p>
              <p className="text-foreground/60 text-sm tracking-wide">
                Two Lines at a Time
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center sm:items-start">
            <p className="text-1xl md:text-2xl font-semibold tracking-tight">
              COMPUTER MIKEREATIONS SOFTWARE DESIGNING – L.L.C
            </p>
            <p className="text-xl md:text-2xl font-medium text-foreground/80">
              Secure Software Systems & Data Infrastructure Engineering
            </p>
            <p className="text-sm sm:text-base text-foreground/60 max-w-[520px]">
              We design and deploy secure, production-grade software systems:
              data management platforms, custom reporting modules, and
              full-stack applications tailored to regulated environments.
            </p>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            {/* About: anchor to next snap section */}
            <a
              href="#about"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              About
            </a>

            {/* Contact: separate page */}
            <Link
              href="/contact"
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            >
              Contact Us
            </Link>
          </div>
        </main>

        <footer className="row-start-3 text-foreground/50 text-xs">
          © 2026 COMPUTER MIKEREATIONS SOFTWARE DESIGNING – L.L.C – S.P.C
        </footer>
      </section>

      {/* PAGE 2: About (full screen, one scroll away) */}
      <section
        id="about"
        className="snap-start min-h-screen flex items-center justify-center p-8 sm:p-20"
      >
        <div className="max-w-2xl w-full flex flex-col gap-4 items-center sm:items-start">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="text-foreground/60 leading-relaxed">
            Mikereations is a UAE-licensed software engineering firm
            specializing in secure data systems and production-grade platforms.
            We deliver data management systems for production pipelines,
            veterinary and pharmaceutical clinic platforms, and custom report
            generation tailored to client requirements. Hosting is deployed via
            international vendors such as AWS or local UAE providers depending
            on security and data residency needs.
          </p>
          <p className="text-foreground/50 text-sm mt-4">
            Licensed Entity: COMPUTER MIKEREATIONS SOFTWARE DESIGNING – L.L.C –
            S.P.C · License No: CN-6364861 · Established: 2026
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              href="/contact"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Invisible anchor target for Back to top */}
        <div id="top" className="absolute top-0" />
      </section>
    </div>
  );
}
