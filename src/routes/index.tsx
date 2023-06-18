import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import About from '~/components/about/about';
import Contact from '~/components/contact/contact';
import Project from '~/components/project/project';
import Stack from '~/components/stack/stack';

export default component$(() => {
  return (
    <>
      <About />
      <Stack />
      <Project />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Irshad Nazree',
  meta: [
    {
      name: 'description',
      content: 'Irshad Nazree Portfolio',
    },
  ],
};
