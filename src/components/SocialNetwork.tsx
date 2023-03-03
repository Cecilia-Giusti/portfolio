import { Link } from "react-router-dom";

interface socialNetworkInt {
  url: string;
  logo: string;
  name: string;
}

const SocialNetwork = ({ url, logo, name }: socialNetworkInt) => {
  const buttonLinkedin = document.getElementById("Linkedin-button");
  const buttonGitHub = document.getElementById("GitHub-button");

  if (buttonLinkedin) {
    buttonLinkedin.addEventListener("touchstart", (event) => {
      event.preventDefault();
      buttonLinkedin.click();
      event.stopImmediatePropagation();
    });
  }
  if (buttonGitHub) {
    buttonGitHub.addEventListener("touchstart", (event) => {
      event.preventDefault();
      buttonGitHub.click();
      event.stopImmediatePropagation();
    });
  }

  return (
    <Link
      to={url}
      className='footer-item-link'
      id={`${name}-link`}
      target={"_blank"}
      aria-label={`See more about me on ${name}`}>
      <button
        id={`${name}-button`}
        className='footer-item-button button-socialNetwork'
        aria-label={`${name}`}>
        <i className={logo} id={`${name}-icon`}></i>
      </button>
    </Link>
  );
};

export default SocialNetwork;
