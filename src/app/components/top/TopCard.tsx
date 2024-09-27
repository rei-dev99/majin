import Link from "next/link";

type TopCardProps = {
  title: string;
  content: string;
}

const TopCard: React.FC<TopCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-full md:w-1/2">
      <h2 className="text-xl md:text-2xl font-semibold text-purple-700">
        <Link href={"/members/"}>{title}</Link>
      </h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default TopCard;
