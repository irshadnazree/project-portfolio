import { PropFunction, component$ } from '@builder.io/qwik';

interface FooterProps {
  isDarkMode: boolean;
  changeMode: PropFunction<(value: boolean) => void>;
}

export default component$((props: FooterProps) => {
  return (
    <footer>
      <button onClick$={() => props.changeMode(!props.isDarkMode)}>
        {props.isDarkMode ? 'Dark' : 'Light'}
      </button>
    </footer>
  );
});
