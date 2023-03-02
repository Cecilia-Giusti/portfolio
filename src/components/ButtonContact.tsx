import { useRef } from "react";
const ButtonContact = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleClick = () => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };
  return (
    <button className='button' onClick={handleClick}>
      <a
        className='button-link'
        href='mailto:ceciliagiusti2b@gmail.com'
        ref={linkRef}>
        Contactez-moi
      </a>
    </button>
  );
};

export default ButtonContact;
