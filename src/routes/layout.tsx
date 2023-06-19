import { component$, Fragment, useSignal, $ } from '@builder.io/qwik';
import About from '~/components/about/about';
import Contact from '~/components/contact/contact';
import Footer from '~/components/footer/footer';
import Header from '~/components/header/header';
import Project from '~/components/project/project';
import Stack from '~/components/stack/stack';

export default component$(() => {
  const currentPage = useSignal('about');
  const isDarkMode = useSignal(true);

  const setCurrentPage = $((page: string) => {
    currentPage.value = page;
  });

  const changeMode = $((value: boolean) => {
    isDarkMode.value = value;
  });

  return (
    <Fragment>
      <Header changePage={setCurrentPage} />
      {currentPage.value === 'about' ? (
        <About />
      ) : currentPage.value === 'stack' ? (
        <Stack />
      ) : currentPage.value === 'project' ? (
        <Project />
      ) : currentPage.value === 'contact' ? (
        <Contact />
      ) : null}

      <Footer isDarkMode={isDarkMode.value} changeMode={changeMode} />
    </Fragment>
  );
});
