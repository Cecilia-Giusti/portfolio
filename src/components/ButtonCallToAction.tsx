import { Link } from "react-router-dom";
import { useRef } from "react";

interface ButtonCallToActionInt {
  text: string;
  url: string;
}

const ButtonCallToAction = ({ text, url }: ButtonCallToActionInt) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleClick = () => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };
  return (
    <button className='button' onClick={handleClick}>
      <Link ref={linkRef} to={url} className='button-link' target={"_blank"}>
        {text}
      </Link>
    </button>
  );
};

export default ButtonCallToAction;
