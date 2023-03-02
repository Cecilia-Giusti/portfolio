import { useState, useEffect } from "react";
import { truncateString } from "../utils/truncateString";

interface projetCardInt {
  name: string;
  img: string;
  description: string;
  stack: Array<string>;
}

const ProjetCard = ({ name, img, description, stack }: projetCardInt) => {
  return (
    <article className='article-card'>
      <p className='article-card-title'>{name}</p>
      <div className='article-card-img'>
        {" "}
        <img src={img} alt={`Mockup de la maquette de ${name.split(" ")[0]}`} />
      </div>

      <ul className='article-card-list'>
        {stack.map((item, id) => {
          if (id === 0) {
            return (
              <li key={id} className='article-card-item'>
                {item}
              </li>
            );
          }
          return (
            <li key={id} className='article-card-item'>
              | {item}
            </li>
          );
        })}
      </ul>
      <p className='article-card-description'>{description}</p>
    </article>
  );
};

export default ProjetCard;
