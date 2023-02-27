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
      <img
        src={img}
        alt='Mockup de la maquette de Kasa'
        className='article-card-img'
      />
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
