export default function HandedThis() {
  return (
    <section
      id="handed-this"
      className="relative w-full bg-pucc-violet text-pucc-cream"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-7 py-[110px] text-center">
        <p className="text-sm font-medium uppercase tracking-[0.32em] sm:text-base">
          If you&rsquo;ve been handed this
        </p>

        <h2 className="mt-12 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[6.5rem]">
          Someone across from you didn&rsquo;t feel heard.
        </h2>

        <p className="mt-12 max-w-2xl text-base leading-[1.9] sm:text-lg">
          The person who handed you this pucc wasn&rsquo;t trying to embarrass
          you. They were trying to reach you. They care enough about this
          conversation — about <em className="italic">you</em> — to say
          something without saying a word. That&rsquo;s rare. Don&rsquo;t waste
          it.
        </p>
      </div>
    </section>
  );
}
