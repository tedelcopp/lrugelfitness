import About from './components/About';
import Classes from './components/Clasess';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const Page = () => {
  return (
    <div>
      <section id="about"><About /></section>
      <section id="classes"><Classes /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default Page;
