import { About } from '../molecules/About';
import { Tools } from '../molecules/Tools';

export function Description() {
  return (
    <section className="px-10 py-16 bg-black w-screen">
      <article className="flex flex-col md:flex-row gap-10 justify-between max-w-7xl mx-auto">
        <About />
        <Tools />
      </article>
    </section>
  );
}
