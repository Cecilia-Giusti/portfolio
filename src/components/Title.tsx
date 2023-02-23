interface titleInt {
  text: string;
  numberTitle: number;
}

const Title = ({ text, numberTitle }: titleInt) => {
  switch (numberTitle) {
    case 1: {
      return <h1>{text}</h1>;
    }
    case 2: {
      return <h2>{text}</h2>;
    }
    case 3: {
      return <h3>{text}</h3>;
    }
    default:
      return <h3>{text}</h3>;
  }
};

export default Title;
