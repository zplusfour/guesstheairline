import { randomizeTail } from "../../utils/utils";
import { useState, useEffect } from "react";

export default function Mode2({ answer, airline, options }: any) {
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const scoreStr = localStorage.getItem("score");
    const parsedScore = scoreStr ? parseInt(scoreStr) : 0;
    setScore(parsedScore);
  }, []);

  const handleClick = (selectedOption: string) => {
    if (selectedOption === answer) {
      alert("Correct!");
      const currentScore = score + 1;
      setScore(currentScore);
      localStorage.setItem("score", currentScore.toString());
    } else {
      alert("Incorrect!");
    }
    window.location.reload();
  };

  const currentYear = new Date().getFullYear();
  const name = "zplusfour";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Guess the Tail</h1>
      <div style={{ maxWidth: "100%", textAlign: "center" }}>
        <h1>{airline}</h1>
      </div>
      <p
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          margin: "20px 0",
        }}
      >
        Score: {score}
      </p>
      <ul
        style={{
          padding: 0,
          maxWidth: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          listStyle: "none",
        }}
      >
        {options.map((option: string, index: number) => (
          <li
            key={index}
            style={{
              margin: "5px", // Adjust margin as needed for spacing between images
              maxWidth: "250px",
            }}
          >
            <img
              src={option}
              alt={`Option ${index + 1}`}
              style={{
                width: "250px",
                height: "250px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                display: "block", // Ensures each image stays on a separate line
              }}
              onClick={() => handleClick(option)}
            />
          </li>
        ))}
      </ul>
      <footer
        style={{
          marginTop: "auto",
          textAlign: "center",
          padding: "20px 0",
          color: "gray",
        }}
      >
        © {currentYear} {name}
      </footer>
    </div>
  );
}

export const getServerSideProps = async ({}) => {
  try {
    let random = await randomizeTail();
    return {
      props: {
        answer: random.image,
        airline: random.airline,
        options: random.options,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        answer: null,
        airline: null,
        options: [],
      },
    };
  }
};
