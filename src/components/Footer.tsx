import ButtonCallToAction from "./ButtonCallToAction";
import socialIcons from "../data/database.json";
import SocialNetwork from "./SocialNetwork";

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer-text'>À bientôt ! </p>
      <div className='footer-callToAction'>
        <ul className='footer-list'>
          {socialIcons.socialNetwork.map((item, id) => {
            return (
              <li className='footer-item' key={id}>
                <SocialNetwork url={item.url} logo={item.logo} />
              </li>
            );
          })}
        </ul>

        <ButtonCallToAction text='Contactez-moi' url='/' />
      </div>
      <button className='footer-button-top'>
        <i className='fa-solid fa-chevron-up'></i>
      </button>
    </footer>
  );
};

export default Footer;
