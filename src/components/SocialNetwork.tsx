import { Link } from "react-router-dom";

interface socialNetworkInt {
  url: string;
  logo: string;
}

const SocialNetwork = ({ url, logo }: socialNetworkInt) => {
  return (
    <Link to={url} className='footer-item-link' target={"_blank"}>
      <button className='footer-item-button'>
        <i className={logo}></i>
      </button>
    </Link>
  );
};

export default SocialNetwork;
