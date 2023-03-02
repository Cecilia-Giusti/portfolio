import { Link } from "react-router-dom";

interface socialNetworkInt {
  url: string;
  logo: string;
  name: string;
}

const SocialNetwork = ({ url, logo, name }: socialNetworkInt) => {
  return (
    <Link
      to={url}
      className='footer-item-link'
      target={"_blank"}
      aria-label={`See more about me on ${name}`}>
      <button className='footer-item-button' aria-label={`${name}`}>
        <i className={logo}></i>
      </button>
    </Link>
  );
};

export default SocialNetwork;
