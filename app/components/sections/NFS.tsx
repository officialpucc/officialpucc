import Reveal from "../motion/Reveal";

export default function NFS() {
  return (
    <section className="w-full bg-pucc-cream px-7 py-[100px]">
      <div className="mx-auto max-w-[680px]">
        <Reveal className="section-label">A note from Sam</Reveal>
        <Reveal className="note-card">
          <span className="note-tag">
            founder · presence builder · still figuring it out
          </span>
          <p className="note-text">
            I sat across from my parents for years at dinner and I wasn&rsquo;t
            present. I was on my phone. Every single time.
            <br />
            <br />
            <strong>
              I didn&rsquo;t notice it was hurting our relationship. But they
              did.
            </strong>
            <br />
            <br />
            You don&rsquo;t see it from the inside. You don&rsquo;t notice the
            way someone&rsquo;s face changes when you reach for your screen
            mid-sentence. You don&rsquo;t feel the conversation go cold.
            <br />
            <br />
            But they do. They feel it every time.
            <br />
            <br />
            How do you feel when you&rsquo;re talking to someone and they go on
            their phone instead of listening?
            <br />
            <strong>
              That&rsquo;s how they feel. That&rsquo;s how they&rsquo;ve been
              feeling.
            </strong>
          </p>
          <p className="note-sig">Sam Boccuzzi</p>
        </Reveal>
      </div>
    </section>
  );
}
