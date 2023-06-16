import { component$, Fragment, Slot, useSignal, $ } from '@builder.io/qwik';
import Footer from '~/components/footer/footer';
import Header from '~/components/header/header';

export default component$(() => {
  // const currentPage = useSignal('about');
  const isDarkMode = useSignal(true);

  const changeMode = $((value: boolean) => {
    isDarkMode.value = value;
    console.log(isDarkMode.value);
  });

  return (
    <Fragment>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer isDarkMode={isDarkMode.value} changeMode={changeMode} />
    </Fragment>
  );
});
