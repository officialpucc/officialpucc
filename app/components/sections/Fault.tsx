import Reveal from "../motion/Reveal";

export default function Fault() {
  return (
    <section className="fault">
      <div className="fault-inner">
        <Reveal className="fault-stat">
          <p className="fault-number">18–20</p>
          <p className="fault-unit">hours a day on a screen</p>
          <p className="fault-note">
            Not living —
            <br />
            just surviving inside one.
          </p>
        </Reveal>
        <div className="fault-copy">
          <Reveal className="section-label" as="span">
            Not their fault
          </Reveal>
          <Reveal className="section-title" as="h2">
            The system is designed to keep them there.
          </Reveal>
          <Reveal as="p">
            You can be furious at the phone, or you can do something quieter
            and braver: stay present yourself, and hand them a reason to come
            back. That&rsquo;s the whole thing. That&rsquo;s all this is.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
