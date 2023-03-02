import { Link } from "react-router-dom";

interface ButtonCallToActionInt {
  text: string;
  url: string;
}

const ButtonCallToAction = ({ text, url }: ButtonCallToActionInt) => {
  return (
    <button className='button'>
      <Link to={url} className='button-link' target={"_blank"}>
        {text}
      </Link>
    </button>
  );
};

export default ButtonCallToAction;
