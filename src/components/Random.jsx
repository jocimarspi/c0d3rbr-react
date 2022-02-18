const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const RandomNumber = ({min, max}) => {
  return <h2>Your random number is {getRandomNumber(min, max)}</h2>;
};

export default RandomNumber;
