import Reveal from "./Reveal";

export default function Pull() {
  return (
    <section className="pull">
      <Reveal className="pull-quote" as="p">
        &ldquo;Phones give more dopamine than a slot machine.
        <br />
        It&rsquo;s not that they <strong>don&rsquo;t care.</strong>
        <br />
        They&rsquo;re just trapped in a system
        <br />
        designed to keep them there.&rdquo;
      </Reveal>
      <Reveal className="pull-divider" />
      <Reveal className="pull-body" as="p">
        Presence builders don&rsquo;t give a pucc to puccers out of anger. They
        do it because they understand — and they refuse to let the moment
        disappear just because an algorithm is louder than they are.
      </Reveal>
    </section>
  );
}
