import Reveal from "../motion/Reveal";
import Sparkles from "../motion/Sparkles";

export default function Defs() {
  return (
    <section className="defs">
      <Sparkles />
      <Reveal className="section-label" as="p">
        The vocabulary
      </Reveal>
      <Reveal className="section-title" as="h2">
        Know where you stand
      </Reveal>
      <div className="def-grid">
        <Reveal variant="slide-right" className="def-card" delay={0}>
          <p className="def-term">Presence Builder</p>
          <p className="def-equals">noun — who you are</p>
          <p className="def-body">
            Someone who owns a pucc. Someone who has decided the people across
            from them are worth looking up for. They set the standard by
            holding it themselves.
          </p>
        </Reveal>
        <Reveal variant="slide-left" className="def-card" delay={0.1}>
          <p className="def-term">Puccer</p>
          <p className="def-equals">noun — where we&rsquo;ve all been</p>
          <p className="def-body">
            Someone who uses their phone in a way that makes the person across
            from them feel out of place. Not a bad person — a stuck one. The
            trap anyone can fall into.
          </p>
        </Reveal>
        <Reveal variant="slide-right" className="def-card" delay={0.2}>
          <p className="def-term">Give a PUCC</p>
          <p className="def-equals">verb — the act</p>
          <p className="def-body">
            To physically hand someone a pucc when their phone use is making
            you feel invisible. No shame, no speech. Just a nudge back into
            the room. The most honest thing you can do.
          </p>
        </Reveal>
        <Reveal variant="slide-left" className="def-card" delay={0.3}>
          <p className="def-term">Build Presence</p>
          <p className="def-equals">verb — the practice</p>
          <p className="def-body">
            Choosing to be in the room — really in it. Not once, but as a
            habit. Presence attracts presence. If you hold it, the people
            around you start to feel it too.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
