interface ButtonDownloadInt {
  text: string;
  url: string;
  file: string;
}

const ButtonDownload = ({ text, url, file }: ButtonDownloadInt) => {
  const handleClick = () => {
    const link = document.getElementById("downloadCV");
    if (link) {
      link.click();
    }
  };
  return (
    <button className='button' onClick={handleClick}>
      <a className='button-link' href={url} id='downloadCV' download={file}>
        {text}
      </a>
    </button>
  );
};

export default ButtonDownload;
