const AboutCard = ({ title, content }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3">
      <h2 className="text-xl md:text-2xl font-semibold text-purple-700">
        {title}
      </h2>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
};

export default AboutCard;
