import Reveal from "../motion/Reveal";

export default function How() {
  return (
    <section className="how">
      <Reveal className="section-label text-center" as="p">
        How the pucc works
      </Reveal>
      <Reveal className="section-title" as="h2">
        Simple. Quiet.
        <br />
        Honest.
      </Reveal>
      <div className="steps">
        <Reveal className="step" delay={0}>
          <div className="step-num">01</div>
          <p className="step-title">You get handed one</p>
          <p className="step-body">
            Someone at your table, in your conversation, in your life — passes
            you a pucc. No lecture. No argument. Just a small, physical signal
            that says: come back to the room.
          </p>
        </Reveal>
        <Reveal className="step" delay={0.15}>
          <div className="step-num">02</div>
          <p className="step-title">You feel it</p>
          <p className="step-body">
            Something about holding it lands differently than words. It&rsquo;s
            not an accusation. It&rsquo;s an invitation. The phone goes down.
            The conversation comes back.
          </p>
        </Reveal>
        <Reveal className="step" delay={0.3}>
          <div className="step-num">03</div>
          <p className="step-title">You give one too</p>
          <p className="step-body">
            Presence builders carry pucc&rsquo;s not to shame — to start a
            cycle. Pass it on. Keep it moving. When you hold presence, the
            people around you start to feel it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
