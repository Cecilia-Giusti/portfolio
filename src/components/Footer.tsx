import socialIcons from "../data/database.json";
import SocialNetwork from "./SocialNetwork";
import ButtonContact from "./ButtonContact";

const Footer = () => {
  const buttonUp = document.querySelector("#up");
  const buttonNetwork = document.querySelectorAll(".button-socialNetwork");

  if (buttonUp) {
    buttonUp.addEventListener("touchstart", function (event) {
      event.preventDefault();
      scrollToTop();
    });
  }

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
                <SocialNetwork
                  url={item.url}
                  logo={item.logo}
                  name={item.name}
                />
              </li>
            );
          })}
        </ul>

        <ButtonContact />
      </div>
      <div className='footer-creater'>
        {" "}
        <p className='footer-creater-design'>
          Design with <span>&#x2764;</span> by Cécilia Giusti
        </p>
        <p className='footer-creater-copyright'>
          &copy; 2023 ceciliagiusti Tous droits réservés.
        </p>
      </div>
      <button
        id='up'
        className='footer-button-top'
        aria-label='to up'
        onClick={() => scrollToTop()}>
        <i className='fa-solid fa-chevron-up'></i>
      </button>
    </footer>
  );
};

export default Footer;
