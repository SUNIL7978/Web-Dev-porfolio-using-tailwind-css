import { links } from '../data';

const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="aligns-item py-7 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h4 className="text-3xl font-bold">
          Web <span className="text-emerald-600">Dev</span>
        </h4>
        <div className="flex gap-x-3 capitalize">
          {links.map((item) => {
            const { id, href, text } = item;
            return (
              <a
                key={id}
                href={href}
                className="tracking-wide text-lg font-semibold hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
