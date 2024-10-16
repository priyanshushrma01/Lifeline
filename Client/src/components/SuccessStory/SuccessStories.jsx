import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const stories = [
  {
    title: "Your support gave my son a second chance at life",
    image: "https://kettocdn.gumlet.io/media/banner/0/94/image/26fe5c8a80fe779e091bd15f4de3c80224ca7c5b.jpg?w=auto&dpr=1.3",
    content: "It express my heartfelt gratitude towards you all for saving my son, Vedant's life! He was suffering from CLD Budd Chiari Syndrome, and a liver transplant was his only hope at survival, but we couldn't afford it. We would've lost him had it not been for your generosity and prayers. Thank you for lighting up our lives"
  },
  {
    title: "My daughter finally gets to enjoy her childhood",
    image: "https://kettocdn.gumlet.io/media/banner/0/95/image/bc5ae443b8da492ff0c97082e2981ada078e385d.jpg?w=auto&dpr=1.3",
    content: "My daughter was suffering from Budd Chiari syndrome with a recurrent gastrointestinal bleed and needed an urgent liver transplant to survive, but sadly we couldn't afford it. However, your donations gave her a new lease on life! She underwent a successful liver transplant and is now enjoying her childhood!"
  }
  
];

export function SuccessStories() {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 flex items-center justify-center">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Success Stories
        </h2>
        <div className="flex items-center justify-center space-x-4">
          <ChevronLeft
            onClick={prevStory}
            size={40} 
            color="#01bfbd"
            className="cursor-pointer"
          />

          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl">
            <img
              src={stories[currentStory].image}
              alt={stories[currentStory].title}
              className="w-full md:w-1/2 h-64 md:h-auto object-cover"
              style={{ objectFit: 'cover', alignSelf: 'center' }}
            />
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {stories[currentStory].title}
              </h3>
              <p className="text-gray-600 mb-4">
                {stories[currentStory].content.slice(0, 345)}..
              </p>
            </div>
          </div>

          <ChevronRight
            onClick={nextStory}
            size={40} 
            color="#01bfbd"
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
