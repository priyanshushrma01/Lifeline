import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';


const cardData = [
  {
    id:1,
    title: "Your support gave my son a second chance at life",
    target: "₹10,00,000",
    username: "John Doe",
    date: "20th Oct",
    image: "https://kettocdn.gumlet.io/media/banner/0/94/image/26fe5c8a80fe779e091bd15f4de3c80224ca7c5b.jpg?w=auto&dpr=1.3",
  },
  {
    id:2,
    title: "My daughter finally gets to enjoy her childhood",
    target: "₹8,00,000",
    username: "Jane Smith",
    date: "22nd Oct",
    image: "https://kettocdn.gumlet.io/media/banner/0/95/image/bc5ae443b8da492ff0c97082e2981ada078e385d.jpg?w=auto&dpr=1.3",
  },
  {
    title: "Thank you for giving my family hope",
    target: "₹5,00,000",
    username: "Alice Brown",
    date: "25th Oct",
    image: "https://kettocdn.gumlet.io/media/banner/0/96/image/3e9c1e8e05f37ea59d1e3c49079054b0f6243b7c.jpg?w=auto&dpr=1.3",
  },
  {
    title: "Helped me regain my health",
    target: "₹6,00,000",
    username: "Michael Green",
    date: "28th Oct",
    image: "https://kettocdn.gumlet.io/media/banner/0/97/image/5f3d4952ad8e4068b2fe3e83bb0a6cd430fd7d1b.jpg?w=auto&dpr=1.3",
  },
];

export const Card = ({ id, title, target, username, date, image }) => {
  return (
    <Link to={`/fundraiser/${id}`} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg mx-2 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-pointer">
      <img className="rounded-t-lg" src={image} alt={title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
          {title}
        </h5>
        <p className="flex font-semibold text-slate-600">by {username}</p>
        <div className="mb-3 text-black-700 font-semibold">
          {target} <span className="text-slate-500">raised</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full w-20"></div>
        </div>
        <div className="pt-2 text-slate-500">Last donation 7 hours ago...</div>
        <div className="flex justify-between">
          <div>
            <p className="font-bold">40</p> days left
          </div>
          <div>
            <p className="font-bold">120</p> Supporters
          </div>
        </div>
      </div>
    </Link>
  );
};


export const MultipleCards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardsPerPage = 2; // Number of cards to display at once

  const nextCardSet = () => {
    setCurrentCardIndex(
      (prevIndex) =>
        (prevIndex + cardsPerPage) % cardData.length
    );
  };

  const prevCardSet = () => {
    setCurrentCardIndex(
      (prevIndex) =>
        (prevIndex - cardsPerPage + cardData.length) % cardData.length
    );
  };

  const displayedCards = cardData.slice(currentCardIndex, currentCardIndex + cardsPerPage);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 flex items-center justify-center">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Latest Fundraiser
        </h2>
        <div className="flex items-center justify-center space-x-4">
          <ChevronLeft
            onClick={prevCardSet}
            size={40}
            color="#01bfbd"
            className="cursor-pointer"
          />

          {/* Render the current set of cards */}
          <div className="flex">
            {displayedCards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>

          <ChevronRight
            onClick={nextCardSet}
            size={40}
            color="#01bfbd"
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default MultipleCards;
