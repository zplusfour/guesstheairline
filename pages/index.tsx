import { randomize } from "../utils/utils";
import { useState, useEffect } from "react";

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function Home({ answer, image, options }: any) {
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const scoreStr = localStorage.getItem('score');
    const parsedScore = scoreStr ? parseInt(scoreStr) : 0;
    setScore(parsedScore);
  }, []);

  const handleClick = (selectedOption: string) => {
    if (selectedOption === answer) {
      alert('Correct!');
      const currentScore = score + 1;
      setScore(currentScore);
      localStorage.setItem('score', currentScore.toString());
    } else {
      alert('Incorrect!');
    }
    window.location.reload();
  };

  return (
    <div
      style={{
        justifyContent: 'center',
        textAlign: 'center',
        margin: '200px',
      }}
    >
      <h1>Guess the Airline</h1>
      <p>
        <img src={image} alt="Airline" />
      </p>
      <h2>Score: {score}</h2>
      {options.map((option: string, index: number) => (
        <li
          key={index}
          style={{
            cursor: 'pointer',
            listStyle: 'none',
            margin: '5px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#333',
          }}
          onClick={() => handleClick(option)}
        >
          {option}
        </li>
      ))}
    </div>
  );
}

export const getServerSideProps = async ({}) => {
  let random = await randomize();
  return {
    props: {
      answer: random.airline,
      image: random.image,
      options: random.options,
    },
  };
};
