import socialIcons from "../data/database.json";
import SocialNetwork from "./SocialNetwork";
import ButtonContact from "./ButtonContact";

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

        <ButtonContact />
      </div>
      <button className='footer-button-top'>
        <i className='fa-solid fa-chevron-up'></i>
      </button>
    </footer>
  );
};

export default Footer;
