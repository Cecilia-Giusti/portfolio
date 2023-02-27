interface projetCardInt {
  name: string;
  img: string;
  description: string;
  stack: Array<string>;
}

const ProjetCard = ({ name, img, description, stack }: projetCardInt) => {
  return (
    <article className='article-card'>
      <p className='article-card-article'>{name}</p>
      <img
        src={img}
        alt='Mockup de la maquette de Kasa'
        className='article-card-img'
      />
      <ul className='article-card-list'>
        {stack.map((item, id) => (
          <li key={id} className='article-card-item'>
            {item}
          </li>
        ))}
      </ul>
      <p className='article-card-description'>{description}</p>
    </article>
  );
};

export default ProjetCard;
