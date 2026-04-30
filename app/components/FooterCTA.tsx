import Reveal from "./Reveal";

export default function FooterCTA() {
  return (
    <section className="footer-cta">
      <Reveal className="section-label" as="p">
        You&rsquo;re still here
      </Reveal>
      <Reveal className="footer-headline" as="h2">
        Get a pucc.
        <br />
        Give a pucc.
        <br />
        <em>Build presence.</em>
      </Reveal>
      <Reveal className="footer-links">
        <a
          href="https://instagram.com/officialpucc"
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          @officialpucc
        </a>
        <a
          href="https://venmo.com/u/SamBoccuzzi"
          className="btn-ghost"
          target="_blank"
          rel="noopener noreferrer"
        >
          Support Sam — Venmo
        </a>
      </Reveal>
      <Reveal className="footer-note" as="p">
        a college kid. $100k in debt. maxed her card to fly to california.
        <br />
        because the people across from you are worth looking up for.
      </Reveal>
    </section>
  );
}
