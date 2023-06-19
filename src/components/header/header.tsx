import { PropFunction, component$ } from '@builder.io/qwik';

interface headerProps {
  changePage: PropFunction<(value: string) => void>;
}

export default component$((props: headerProps) => {
  return (
    <header>
      <nav>
        <a onClick$={() => props.changePage('about')}>about</a>
        <a onClick$={() => props.changePage('stack')}>tech stack</a>
        <a onClick$={() => props.changePage('project')}>project</a>
        <a onClick$={() => props.changePage('contact')}>contact</a>
      </nav>
    </header>
  );
});
