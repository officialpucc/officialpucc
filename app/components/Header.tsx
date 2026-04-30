import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full min-h-screen bg-pucc-ink text-pucc-cream overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <Image
          src="/logo/logo_pink.png"
          alt="PUCC"
          width={1024}
          height={1024}
          priority
          className="mb-8 h-20 w-20 object-contain"
        />
        <span className="block h-px w-10 bg-pucc-gold" aria-hidden />
        <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.32em] text-pucc-gold">
          Presence Technology
        </p>

        <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[7rem]">
          They give a{" "}
          <em className="italic font-normal text-pucc-violet">pucc.</em>
          <br />
          Why don&rsquo;t you?
        </h1>

        <div className="mt-12 space-y-2 text-base text-pucc-lavender sm:text-lg">
          <p>They&rsquo;re here because they care.</p>
          <p>Be present.</p>
        </div>

        <a
          href="#handed-this"
          className="mt-14 inline-flex items-center gap-3 border border-pucc-gold px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.32em] text-pucc-gold transition-colors hover:bg-pucc-gold hover:text-pucc-ink"
        >
          Keep Reading <span aria-hidden className="inline-block animate-bounce">↓</span>
        </a>
      </div>
    </header>
  );
}
