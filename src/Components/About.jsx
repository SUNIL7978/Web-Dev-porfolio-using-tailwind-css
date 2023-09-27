import AboutImg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="aligns-item grid items-center md:grid-cols-2 gap-16">
        <img
          src={AboutImg}
          alt="About us image not found"
          className="w-full h-60"
        />
        <article>
          <SectionTitle text="About Us" />
          <p className="text-slate-600 mt-8 leading-loose text-lg">
            A front-end developer with entry-level experience specializing in
            web development, UI design, HTML, and ReactJs. Adept at identifying
            opportunities to enhance front-end design and improve the UX.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
