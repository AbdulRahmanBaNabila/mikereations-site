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
          <Image
            className="dark:invert"
            src="/logo_mikereations.png"
            alt="Mikereations"
            width={180}
            height={38}
            priority
          />

          <div className="flex flex-col gap-2 items-center sm:items-start">
            <p className="text-2xl font-semibold">Changing the world <br></br>
            2 lines at a time</p>
            <p className="text-sm sm:text-base text-foreground/60 max-w-[520px]">
              Landing pages, full-stack systems, payment integrations, and
              secure solutions.
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

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-foreground/60 text-sm">
          <a href="#about" className="hover:underline underline-offset-4">
            About
          </a>
          <Link href="/contact" className="hover:underline underline-offset-4">
            Requests
          </Link>
          <a
            className="hover:underline underline-offset-4"
            href="mailto:info@mikereations.com"
          >
            Email
          </a>
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
            Dummy about text. Replace later with your positioning: fast
            delivery, clean UX, secure engineering, and optional UAE hosting for
            clients who need data residency.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#top"
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Back to top
            </a>

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
