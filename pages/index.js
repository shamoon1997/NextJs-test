import Head from 'next/head';

import Intro from '../component/Intro';
import About from '../component/About';
import Skills from '../component/Skills';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Topscroll from '../component/Topscroll';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>George Georgiou | Portfolio</title>
        <meta name="description" content="George Georgiou Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Intro />
        <About />
        <Skills />
        <Contact />
        <Topscroll />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
