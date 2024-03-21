// REACT ROUTER DOM
import { Link } from "react-router-dom";

// REACT
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ICONS
import { FaArrowLeft } from "react-icons/fa";

const Practice = () => {
  // const [practice, setPractice] = useState(null);

  // useEffect(() => {
  //   const fetchPractice = async () => {
  //     const response = await fetch("https://localhost:3000/api/routes");
  //     const json = await response.json();

  //     if (response.ok) {
  //       setPractice(json);
  //     }
  //   };
  //   fetchPractice;
  // }, []);

  const goBack = useNavigate();

  const styles = {
    background: "",
    title: "text-2xl text-titleBlue text-center pt-8",
    button: "pt-8 pl-8",
    container: "m-8 p-6 shadow-lg shadow-lightGrey rounded-lg grid grid-cols-3",
    practiceTitle:
      "text-md font-bold text-darkGrey col-start-1 col-span-2 mb-2",
    reps: "text-darkGrey text-md font-bold col-start-3 place-self-end mb-2",
    aims: "text-yellow font-bold col-start-1 col-span-3 mb-2",
    notesContainer: " col-start-1 col-span-3",
    notes: "font-bold text-lightGrey text-sm",
    notesDescription: "mb-2 text-sm ",
  };

  return (
    <div id="practice">
      <div>
        <Link>
          <button onClick={() => goBack(-1)} className={styles.button}>
            <FaArrowLeft color="#707070" />
          </button>
        </Link>
      </div>
      <h1 className={styles.title}>Weekly Practice Goals</h1>

      <div className={styles.container}>
        <h2 className={styles.practiceTitle}>Sonatina by Mozart</h2>

        <p className={styles.reps}>10 reps</p>

        <h3 className={styles.aims}>Aim: Intonation</h3>

        <p className={styles.bars}>Bars: 12-16</p>

        <div className={styles.notesContainer}>
          <p className={styles.notes}>Notes</p>
          <p className={styles.notesDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            facilis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Practice;
