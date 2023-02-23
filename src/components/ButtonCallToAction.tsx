import { Link } from "react-router-dom";

interface ButtonCallToActionInt {
  text: string;
  url: string;
}

const ButtonCallToAction = ({ text, url }: ButtonCallToActionInt) => {
  return (
    <button>
      <Link to={url}>{text}</Link>
    </button>
  );
};

export default ButtonCallToAction;
