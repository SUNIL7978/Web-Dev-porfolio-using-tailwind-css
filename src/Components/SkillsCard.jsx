const SkillsCard = ({ text, title, icon }) => {
  return (
    <article>
      <span className="h-16 w-16">{icon}</span>
      <h4 className="mt-6 font-bold text-lg">{title}</h4>
      <p className="mt-2 text-stone-400">{text}</p>
    </article>
  );
};

export default SkillsCard;
