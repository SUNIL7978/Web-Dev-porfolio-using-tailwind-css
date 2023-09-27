import HeroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="aligns-item grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I&apos;am Sunil</h1>
          <p className="text-2xl mt-2 text-teal-900">Front End Developer</p>
          <p className="mt-3">
            responsible for the visual and interactive elements of a website or
            application.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://github.com/">
              <FaGithubSquare className="h-8 w-8 text-slate-400 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-400 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-400 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img
            src={HeroImg}
            alt="coding image not found"
            className="h-80 lg:h-96"
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
