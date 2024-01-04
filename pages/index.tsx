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

  const currentYear = new Date().getFullYear();
  const name = "zplusfour";

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Guess the Airline</h1>
      <div style={{ maxWidth: '100%', textAlign: 'center' }}>
        <img src={image} alt="Airline" style={{ width: '100%', height: 'auto' }} />
      </div>
      <p
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '20px 0',
        }}
      >
        Score: {score}
      </p>
      <ul style={{ padding: 0, maxWidth: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {options.map((option: string, index: number) => (
          <li
            key={index}
            style={{
              cursor: 'pointer',
              listStyle: 'none',
              margin: '10px 0',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f0f0f0',
              textAlign: 'center',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              color: '#333',
              width: '100%',
              maxWidth: '300px',
            }}
            onClick={() => handleClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <footer style={{ marginTop: 'auto', textAlign: 'center', padding: '20px 0', color: 'gray' }}>
        © {currentYear} {name}
      </footer>
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
