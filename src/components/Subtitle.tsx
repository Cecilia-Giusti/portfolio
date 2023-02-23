interface subtitleInt {
  text: string;
  numberSubtitle: number;
}

const Subtitle = ({ text, numberSubtitle }: subtitleInt) => {
  switch (numberSubtitle) {
    case 4: {
      return <h4>{text}</h4>;
    }
    case 5: {
      return <h5>{text}</h5>;
    }
    case 6: {
      return <h6>{text}</h6>;
    }
    default:
      return <h6>{text}</h6>;
  }
};

export default Subtitle;
