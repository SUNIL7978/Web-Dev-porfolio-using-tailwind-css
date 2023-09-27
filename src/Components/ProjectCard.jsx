import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = ({ url, img, text, title, github }) => {
  return (
    <article className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300">
      <img src={img} className="w-full h-64 rounded-t-lg object-cover" />
      <div className="capitaize p-8">
        <h2 className="text-xl tracking-wide font-bold capitalize">{title}</h2>
        <p className="mt-4 text-slate-400">{text}</p>
        <div className="flex gap-2 items-center justify-center">
          <a href={url}>
            <TbWorldWww className="w-8 h-8 mt-2 text-slate-400 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="w-8 h-8 mt-2 text-slate-400 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
