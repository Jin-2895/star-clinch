
import React, { useState, useEffect } from 'react';
import { Category } from '@/types/types';
import Image from 'next/image';

type ICategoryProps = {
  categories: Category[];
};

interface Card {
  id: number;
  name: string;
  category_banner_image: string;
}

const CategoryMobile = ({ categories }: ICategoryProps) => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (categories.length > 0) {
      setCards(categories);
    }
  }, [categories]);

  const handleCardClick = (index: number) => {
    setCards(prevCards => {
      const newCards = [...prevCards];
      const clickedCard = newCards[index];
      if (clickedCard) {
      
        const firstCard = newCards.shift();
        if (firstCard) {
          newCards.push(firstCard);
        }
      }
      return newCards;
    });
  };


  return (
    <div className="max-h-[687px]  overflow-hidden">
      
        <div className="relative overflow-hidden  px-4">
          {cards.map((card, index) => (
            <div
            key={card.id}
            onClick={() => handleCardClick(index)}
            className={`cards ${index === 0 ? 'translate-y-[-50px]' : ''} transform   transition-transform duration-500`}
            >
              <div className={` ${index === 0 ? 'h-80' : 'h-26'}  ${index === 0 ? 'mt-12' : '-mt-20'} w-full     rounded-xl  mb-4`}>
                <Image
                  src={card.category_banner_image}
                  alt={card.name}
                  className={`w-full ${index === 0 ? 'h-full' : 'h-32'  } object-cover  rounded-xl  relative mb-2`}
                  style={{   boxShadow: "0px 200px 100px black inset",}}
                />
                <h3 className="text-lg font-semibold absolute top-2 left-3 text-white">{card.name}</h3>
              </div>
            </div>
          ))}
        </div>
     
    </div>
  );
};

export default CategoryMobile;
