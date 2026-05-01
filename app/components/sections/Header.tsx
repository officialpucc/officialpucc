import Image from "next/image";
import Sparkles from "../motion/Sparkles";

export default function Header() {
  return (
    <header className="hero relative w-full min-h-screen bg-pucc-ink text-pucc-cream overflow-hidden">
      <Sparkles />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 py-10 text-center sm:px-6 sm:py-16">
        <Image
          src="/logo/Logo_Yellow.png"
          alt="PUCC"
          width={1024}
          height={1024}
          priority
          className="mb-3 h-24 w-24 object-contain sm:mb-4 sm:h-28 sm:w-28"
        />
        <span className="block h-px w-10 bg-pucc-gold" aria-hidden />
        <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.32em] text-pucc-gold sm:mt-6">
          Presence Technology
        </p>

        <h1 className="mt-6 font-display text-[clamp(2.75rem,11vw,3.5rem)] font-semibold leading-[1.05] tracking-tight sm:mt-8 sm:text-6xl md:text-7xl lg:text-[7rem]">
          They give a{" "}
          <em className="pucc-word italic font-normal text-pucc-violet">pucc.</em>
          <br />
          <span className="whitespace-nowrap">Why don&rsquo;t you?</span>
        </h1>

        <div className="mt-8 space-y-2 text-base text-pucc-lavender sm:mt-12 sm:text-lg">
          <p>They&rsquo;re here because they care.</p>
          <p>Be present.</p>
        </div>

        <a
          href="#handed-this"
          className="mt-10 inline-flex items-center gap-3 border border-pucc-gold px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.32em] text-pucc-gold transition-colors hover:bg-pucc-gold hover:text-pucc-ink sm:mt-14"
        >
          Keep Reading <span aria-hidden className="pucc-drift">↓</span>
        </a>
      </div>
    </header>
  );
}
