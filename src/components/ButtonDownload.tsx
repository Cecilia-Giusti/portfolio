interface ButtonDownloadInt {
  text: string;
  url: string;
  file: string;
}

const ButtonDownload = ({ text, url, file }: ButtonDownloadInt) => {
  return (
    <button className='button'>
      <a className='button-link' href={url} download={file}>
        {text}
      </a>
    </button>
  );
};

export default ButtonDownload;
