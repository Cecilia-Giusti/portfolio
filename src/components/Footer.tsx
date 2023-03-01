import socialIcons from "../data/database.json";
import SocialNetwork from "./SocialNetwork";
import ButtonContact from "./ButtonContact";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
      <button className='footer-button-top' onClick={scrollToTop}>
        <i className='fa-solid fa-chevron-up'></i>
      </button>
    </footer>
  );
};

export default Footer;
