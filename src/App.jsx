
import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the largest ocean on Earth?",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "In what year did the Berlin Wall fall?",
      answers: [
        {
          text: "1985",
          correct: false,
        },
        {
          text: "1989",
          correct: true,
        },
        {
          text: "1991",
          correct: false,
        },
        {
          text: "1995",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which gas do plants absorb during photosynthesis?",
      answers: [
        {
          text: "Oxygen",
          correct: false,
        },
        {
          text: "Carbon Dioxide",
          correct: true,
        },
        {
          text: "Nitrogen",
          correct: false,
        },
        {
          text: "Hydrogen",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who wrote 'The Great Gatsby'?",
      answers: [
        {
          text: "J.K. Rowling",
          correct: false,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: true,
        },
        {
          text: "George Orwell",
          correct: false,
        },
        {
          text: "Jane Austen",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "South Korea",
          correct: false,
        },
        {
          text: "Thailand",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the currency of Brazil?",
      answers: [
        {
          text: "Peso",
          correct: false,
        },
        {
          text: "Real",
          correct: true,
        },
        {
          text: "Dollar",
          correct: false,
        },
        {
          text: "Euro",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who invented the telephone?",
      answers: [
        {
          text: "Alexander Graham Bell",
          correct: true,
        },
        {
          text: "Thomas Edison",
          correct: false,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "Marie Curie",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the largest desert in the world?",
      answers: [
        {
          text: "Sahara Desert",
          correct: false,
        },
        {
          text: "Gobi Desert",
          correct: false,
        },
        {
          text: "Antarctica",
          correct: true,
        },
        {
          text: "Arabian Desert",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who is known as the 'Father of Modern Physics'?",
      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
        },
        {
          text: "Galileo Galilei",
          correct: false,
        },
        {
          text: "Stephen Hawking",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What is the chemical symbol for water?",
      answers: [
        {
          text: "CO2",
          correct: false,
        },
        {
          text: "H2O",
          correct: true,
        },
        {
          text: "O2",
          correct: false,
        },
        {
          text: "NaCl",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who painted the famous artwork 'Starry Night'?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;